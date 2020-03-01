import firebase from 'firebase';

const transformResponse = object => {
    const array = []
    const keys = Object.keys(object)
    keys.forEach(key => {
        const beer = {id: key, imgUrl:object[key].downloadUrl}
        array.push(Object.assign(beer, object[key]))
    })
    return array
}

export const fetchBeers = async() =>{
    let x  = []
    await firebase.database().ref('/beers').once('value').then((snapshot) => {
         x = snapshot.val()
         console.log(x);

         x = transformResponse(x)

        console.log(x);
    })
    return x
}