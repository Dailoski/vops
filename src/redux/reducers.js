import { combineReducers } from 'redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const name = (state = '', action) => state
const number = (state = '', action) => state

const items = (state = [], action) => state

const savedLocation = (state = '', action) => state
const enteredLocation = (state = '', action) => state

const asap = (state = false, action) => state
const selectedTime = (state = '', action) => state

const ordered = (state = false, action) => state
const selectedItems = (state = {}, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_TO_CART:
            if(newState[action.id]){
                newState[action.id].quantity += action.quantity
            }
            else newState[action.id] = action.item
            return newState
        case REMOVE_FROM_CART:
            delete newState[action.id]
            return newState
        default:
            return state;
    
    }
}

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
