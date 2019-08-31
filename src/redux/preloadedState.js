

export const preloadedState = {
    info: {
        name: "Pera Peric",
        number: "066555555"
    },
    beerList: {
        items: []
    },
    location: {
        savedLocation: "Mladenovac",
        enteredLocation: "Beograd"
    },
    time: {
        asap: false,
        selectedTime: new Date().toISOString()
    },
    shoppingCart: {
        ordered: false,
        newItem: false,
        selectedItems:{
            "1243":{
                name: "Niksicko",
                volume: "33cl",
                price: 150,
                quantity: 5
            },
            "12333":{
            name: "Niksicko",
            volume: "33cl",
            price: 150,
            quantity: 10
        }
        }
    }
}