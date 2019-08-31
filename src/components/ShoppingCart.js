import React from 'react';
import './Payment.css';
import { connect } from 'react-redux'
import { Chip } from '@material-ui/core';
import { ScrollableContainer } from './Beer';

// 'Step 4: ADRESA? adresa da se unese, ili da ga lociramo sami preko gps, pretpostavljam da to moze da se uradi, a on samo da potvrdi, da, to je to. ';
let ShoppingCart = ({selectedItems}) => {
    const keys = Object.keys(selectedItems)
    const createLabel = item => `${item.name} ${item.volume} ${item.price}RSD x ${item.quantity} = ${item.price * item.quantity}RSD`
    return (
        <ScrollableContainer>
            {keys.map(
                key =>  <Chip
                key={key}
                // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                label={createLabel(selectedItems[key])}
                onDelete={()=>{}}
              />
            )}

        </ScrollableContainer>
    )
}

const mapStateToProps = state => ({
    selectedItems: state.shoppingCart.selectedItems
})


const mapDispatchToProps = dispatch => ({
    onChange: (checked) => {
        dispatch(()=>{});
    }
});

ShoppingCart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export {ShoppingCart}