import React from "react"
import styled from 'styled-components'
import cer1 from '../images/cereals-1.svg'
import cer2 from '../images/cereals-2.svg'
import image from '../images/slika.png'
import { TextAndSearch } from "./TextAndSerach"

const StyledDiv = styled.div`
    padding: 50px 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-cer{
        width: 700px;
        position: absolute;
        left: -300px;
        margin-top: 50px;
    }
    .right-cer{
        width: 400px;
        position: absolute;
        right: -100px;
        margin-top: -230px;
    }
    .beers-image{
        width: 460px;
        z-index: 10;
    }
`

export const WantBeer = () => {
    return(
        <StyledDiv>
            <img className="left-cer" src={cer1} alt="beer" />
            <img className="right-cer" src={cer2} alt="beer" />
            <img className="beers-image" src={image} alt="beer" />
            <TextAndSearch dark small title="Želiš pivo?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero justo, volutpat a ligula sed, semper consequat urna. Aliquam lacinia odio a dignissim iaculis. Nullam quis elementum libero." />
        </StyledDiv>
    )
}