import React from 'react';
import { addToCart } from '../redux/actions';
import { connect } from 'react-redux'
import styled from 'styled-components'

// const Calc = styled.span`
//     display: none;
//     @media (min-width: 728px){
//         display: flex;  
//     }
// `
const Container = styled.div`
    width: 90%;
    margin: 15px auto;
    display: flex;
    img{
      width: 40%;
      border: 1px gray solid;
    }
    .info{
      width: 60%;
    }
    .price{
      font-weight: 900;
    }
      .controls{
        width: 30px;
        height: 30px;
        display: inline-flex;
        border: 1px solid black;
        justify-content: center;
        align-items: center;
        :hover{
          cursor: pointer;
        }
      
    }
`

let SingleCheckoutItem = ({ quantity, name, label, volume, imgUrl, onDelete, add, id }) => {
  return (
    <Container>
      <img alt="sranje" src={imgUrl} />
      <div className="info">
        <p> {name + " " + volume + "l"}</p>
        <p className="price">{label.split("=")[1]}</p>
        <div>
          <span onClick={() => add({id}, -1)} className="controls">-</span>
          <span className="controls">{quantity}</span>
          <span onClick={() => add({id}, 1)} className="controls">+</span>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
})


const mapDispatchToProps = dispatch => ({
  add: (item, quantity) => {
    dispatch(addToCart(item, quantity));
  }
});

SingleCheckoutItem = connect(mapStateToProps, mapDispatchToProps)(SingleCheckoutItem)

export { SingleCheckoutItem }