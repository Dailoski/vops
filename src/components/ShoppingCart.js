import React from 'react';
import './Payment.css';
import { connect } from 'react-redux'
import { Divider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import { removeFromCart, removeNewItemNotification } from '../redux/actions';
import { SingleCheckoutItem } from './SingleCheckoutItem';

const ScrollableContainer = styled.div`
    height: 55vh;
    overflow: scroll;
    margin-bottom: 50px;
`

let ShoppingCart = ({selectedItems, remove, removeNotification}) => {
    removeNotification()  
    
    let sum = 0
    const keys = Object.keys(selectedItems)
    const createLabel = item => `${item.name} ${item.volume} ${item.price}RSD x ${item.quantity} = ${item.price * item.quantity}RSD`
    return (
        <React.Fragment>
            <ScrollableContainer>
            {keys.map(
                key =>  {
                    sum += selectedItems[key].price * selectedItems[key].quantity
                    return(<SingleCheckoutItem
                        key={key}
                        id={key}
                        {...selectedItems[key]}
                        // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                        label={createLabel(selectedItems[key])}
                        onDelete={()=>{remove(key)}}
                />)}
            )}
        </ScrollableContainer>
        <Divider />
        <Typography color="primary" variant="h1" component="h2" gutterBottom>
            {`Ukupno: ${sum}RSD`}
        </Typography>
        </React.Fragment>
        
    )
}

const mapStateToProps = state => ({
    selectedItems: state.shoppingCart.selectedItems
})


const mapDispatchToProps = dispatch => ({
    remove: (id) => {
        dispatch(removeFromCart(id));
    },
    removeNotification: () => {
        dispatch(removeNewItemNotification());
    }
});

ShoppingCart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export {ShoppingCart}