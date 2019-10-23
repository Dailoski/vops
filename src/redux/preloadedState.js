

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
        selectedTime: new Date(new Date().getTime() + 60 * 60 * 1000)
    },
    shoppingCart: {
        ordered: false,
        newItem: false,
        selectedItems:{}
        
    }
}