import React from 'react';
import './Payment.css';
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core';
import styled from 'styled-components'
import { removeFromCart, removeNewItemNotification } from '../redux/actions';
import { SingleCheckoutItem } from './SingleCheckoutItem';
import Button from '@material-ui/core/Button';

const ScrollableContainer = styled.div`
    overflow: scroll;
    margin: 0 auto;
    border: solid 1px #c4c4c4;
    margin-bottom: 50px;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
    h2{
        width: 100%;
    }
`
const StyledButton = styled(Button)`
  &&{
    border-radius: 0;
    background-color: #ffbc21;
    color: white;
    :hover{
      background-color: #ffbc21;
    }
    }
`
let ShoppingCart = ({selectedItems, remove, removeNotification}) => {
    removeNotification()  
    
    let sum = 0
    const keys = Object.keys(selectedItems)
    const createLabel = item => `${item.price}RSD x ${item.quantity} = ${item.price * item.quantity}RSD`
    return (
        <React.Fragment>
            <ScrollableContainer>
            <h2>{keys.length ? "Tvoja gajba" : "Muči te žeđ?"}</h2>
            {keys.length ? <React.Fragment><span>Kruševačka 20, Beograd</span><span>promeni</span></React.Fragment> : <p>Napuni svoju gajbu odmah!</p>}
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
            <StyledButton>
                Nastavite
            </StyledButton>
        </ScrollableContainer>
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