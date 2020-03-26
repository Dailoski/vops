import fetch from 'cross-fetch'
import parser from 'query-string-parser'
import matchSorter from 'match-sorter'

const getQuery = (searchTermKey, params, searchValue) => {

    const prms = { ...params }
    prms[searchTermKey] = searchValue

    return parser.toQuery(prms)
}

//    fetchFromCache = (searchValue,       autocompleteStuff,              cacheStuff     ) => {...}
const fetchFromCache = (searchValue, { omitItems, limit, requestId }, { responseShape, cache }) => {
    const { getTextToShow } = responseShape
    const remainingObjects = cache.stateSlice
        .map(obj => ({ ...obj, acTextToShow: getTextToShow(obj) }))
        .filter(obj => !omitItems.some(item => item.acTextToShow === obj.acTextToShow))
        .reduce((acc, curr) => {
            if (!acc.some(obj => obj.acTextToShow === curr.acTextToShow)) { acc.push(curr) }
            return acc
        }, [])

    const sortedObjects = searchValue
        ? matchSorter(remainingObjects, searchValue, { keys: ['acTextToShow'], })
        : remainingObjects

    const limitedObjects = limit
        ? sortedObjects.slice(0, limit)
        : sortedObjects

    return Promise.resolve({
        response: {
            data: limitedObjects,
            requestId,
        },
    })
}

//    fetchFromApi = (searchValue,       autocompleteStuff,                          apiStuff                      ) => {...}
const fetchFromApi = (searchValue, { omitItems, limit, requestId }, { url, endpoint, params, searchTermKeys, responseShape }) => {
    const BASE_URL = url;
    const ps = searchTermKeys
        .map(searchTermKey => getQuery(searchTermKey, params, searchValue))
        .map(query => fetch(BASE_URL + endpoint + '?' + query))
        .map(p => p.then(
            response => response.ok ? ({ data: response }) : ({ err: response.statusText }),
            err => ({ err })
        ))

    const { collectionKey, getTextToShow } = responseShape

    return Promise
        .all(ps)
        .then(xs => {
            const ys = xs.filter(x => x.data)

            if (ys.length > 0) {
                return ys.map(y => y.data)
            }

            throw xs[0].err
        })
        .then(responses => responses.map(response => response.json()))
        .then(promises => Promise
            .all(promises)
            .then(objs => objs.map(obj => obj[collectionKey.split(".")[0]][collectionKey.split(".")[1]]))
            .then(arrs => arrs.reduce((acc, curr) => acc.concat(curr)), [])
            .then(arr => {

                const remainingObjects = arr
                    .map(obj => ({ ...obj, acTextToShow: getTextToShow(obj) }))
                    .filter(obj => !omitItems.some(item => item.acTextToShow === obj.acTextToShow))
                    .reduce((acc, curr) => {
                        if (!acc.some(obj => obj.acTextToShow === curr.acTextToShow)) { acc.push(curr) }
                        return acc
                    }, [])

                const limitedObjects = limit
                    ? remainingObjects.slice(0, limit)
                    : remainingObjects

                return {
                    response: {
                        data: limitedObjects,
                        requestId,
                    },
                }
            })
            .catch(error => { throw error })
        )
        .catch(error => Promise.reject({
            response: {
                error,
                requestId,
            },
        }))
}

const fetchObjects = (searchValue, autocompleteStuff, apiStuff) => {

    if (apiStuff.cache) { return fetchFromCache(searchValue, autocompleteStuff, apiStuff) }

    return fetchFromApi(searchValue, autocompleteStuff, apiStuff)
}

export { fetchObjects }
