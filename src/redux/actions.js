export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const REMOVE_NEW_ITEM_NOTIFICATION = "REMOVE_NEW_ITEM_NOTIFICATION"
export const CHANGE_TIME = "CHANGE_TIME"
export const CHANGE_ASAP_SWITCH = "CHANGE_ASAP_SWITCH"
export const CHANGE_INPUT = "CHANGE_INPUT"
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

export const changeLanguage = checked => ({
    type: CHANGE_LANGUAGE,
    checked
})

export const removeNewItemNotification = () => ({
    type: REMOVE_NEW_ITEM_NOTIFICATION
})

export const addToCart = (item, quantity) => ({
    type: ADD_TO_CART,
    id: item.id,
    item: {
        name: item.name,
        volume: item.volume,
        quantity,
        price: item.price,
        imgUrl: item.imgUrl
    },
    quantity
})

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    id
})

export const changeTime = date => ({
    type: CHANGE_TIME,
    date
})

export const changeAsapSwitch = value => ({
    type: CHANGE_ASAP_SWITCH,
    value
})

export const changeInput = (value, name) => ({
    type: CHANGE_INPUT,
    value,
    name
})