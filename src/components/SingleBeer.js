import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions';

const useStyles = makeStyles({
    card: {
      width: "100%",
    },
    media: {
      height: 140,
    },
  });
  
const StyledButton = styled(Button)`
  &&{
    border-radius: 0;
    background-color: #01012b;
    color: white;
    :hover{
      background-color: #01012b;
    }
    }
`

const StyledSingleBeer = styled.div`
  width: 300px;
  padding: 0 25px 70px 25px;
  img{
    width: 250px;
    height: 270px;
    border: solid 1px #c4c4c4;
  }
  p{
    width: 90%;
    font-family: Poppins;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #4e4e59;
  }
  h3{
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #01012b;

  }
`

let SingleBeer = ({imgUrl, name, description, volume, add, id, price}) =>{ 
    const classes = useStyles();
    console.log(classes)
    const item = {
      id,
      volume,
      name,
      price,
      imgUrl
    }
    return(
      <StyledSingleBeer>
        <img src={imgUrl} alt="beer" />
        <p> {name + " " + volume + "l"} </p>
        <h3> {price + " RSD"} </h3>
        <StyledButton onClick={() => add(item, 1)}>
          Dodaj u gajbu
        </StyledButton>
      </StyledSingleBeer>
)}

const mapStateToProps = state => ({
})


const mapDispatchToProps = dispatch => ({
  add: (item, quantity) => {
      dispatch(addToCart(item, quantity));
  }
});

SingleBeer = connect(mapStateToProps, mapDispatchToProps)(SingleBeer)

export {SingleBeer}