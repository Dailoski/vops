import React from 'react';
import './Payment.css';
import { connect } from 'react-redux'
import { Chip, Divider, Typography } from '@material-ui/core';
import styled from 'styled-components'
import { removeFromCart } from '../redux/actions';

const ScrollableContainer = styled.div`
    height: 55vh;
    overflow: scroll;
    margin-bottom: 50px;
`

let ShoppingCart = ({selectedItems, remove}) => {
    let sum = 0
    const keys = Object.keys(selectedItems)
    const createLabel = item => `${item.name} ${item.volume} ${item.price}RSD x ${item.quantity} = ${item.price * item.quantity}RSD`
    return (
        <React.Fragment>
            <ScrollableContainer>
            {keys.map(
                key =>  {
                    sum += selectedItems[key].price * selectedItems[key].quantity
                    return(<Chip
                        key={key}
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
    }
});

ShoppingCart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export {ShoppingCart}