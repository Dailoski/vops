import { combineReducers } from 'redux'

const name = (state = '', action) => state
const number = (state = '', action) => state

const items = (state = [], action) => state

const savedLocation = (state = '', action) => state
const enteredLocation = (state = '', action) => state

const asap = (state = false, action) => state
const selectedTime = (state = '', action) => state

const ordered = (state = false, action) => state
const selectedItems = (state = [], action) => state

const info = combineReducers({
    name,
    number
});

const beerList = combineReducers({
    items
});

const location = combineReducers({
    savedLocation,
    enteredLocation
});

const time = combineReducers({
    asap,
    selectedTime
});

const shoppingCart = combineReducers({
    ordered,
    selectedItems
});

export const rootReducer = combineReducers({
    info,
    beerList,
    location,
    time,
    shoppingCart
})
