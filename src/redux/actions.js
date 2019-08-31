export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export const addToCart = (item, quantity) => ({
    type: ADD_TO_CART,
    id: item.id,
    item: {
        name: item.name,
        volume: item.volume,
        quantity,
        price: item.price
    },
    quantity
})

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    id
})
