import React from 'react'

export class Fetch extends React.Component {

    static initialState = { loading: false, error: null, objects: [] }
    state = Fetch.initialState

    requestId = 0
    mounted = false

    reset(overrides) {
        this.setState({ ...Fetch.initialState, ...overrides })
    }

    fetch = debounce(() => {

        if (!this.mounted) {
            return
        }

        const { omitItems, limit, api, fetchObjects } = this.props
        this.requestId++

        fetchObjects(this.props.searchValue, { omitItems, limit, requestId: this.requestId, }, api)

            .then(({ response: { data: objects, requestId } }) => {

                if (this.mounted && requestId === this.requestId) {
                    this.props.onLoaded()
                    this.setState({ loading: false, objects })
                }

            }, ({ response: { error, requestId } }) => {

                if (this.mounted && requestId === this.requestId) {
                    this.props.onLoaded()
                    this.setState({ loading: false, error })
                }
            },
            )
    }, 300)

    prepareFetch() {
        this.reset({ loading: true })
    }

    componentDidMount() {
        this.mounted = true
        this.prepareFetch()
        this.fetch()
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.searchValue !== this.props.searchValue ||
            prevProps.omitItems !== this.props.omitItems
        ) {
            this.prepareFetch()
            this.fetch()
        }
    }

    componentWillUnmount() {
        this.mounted = false
    }

    render() {
        return this.props.render(this.state)
    }
}

function debounce(fn, time) {

    let timeoutId

    return wrapper

    function wrapper(...args) {

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
            timeoutId = null
            fn(...args)
        }, time)
    }
}
