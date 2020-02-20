import React from "react"
import styled from 'styled-components'
import footer from '../images/footer.png'
import beer from '../images/beer.png'
import { Logo } from "./Logo"

const StyledFooter = styled.div`
    display: flex;
    padding: 80px 150px;
    height: 300px;
    background-image: url(${footer});
    .image{ 
        position: absolute;
        right: -150px;
        margin-top: -80px;
        overflow: hidden;
        height: 300px;
        width: 350px;
        && img{
        width: 250px;
    }}
    .logo-and-text{
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        p{
            width: 100%;
            text-align: initial;
        }
    }
`

export const Footer = () => {

    return (
        <StyledFooter>
            <div className="image">
                <img src={beer} alt="beer" />
            </div>
            <div className="logo-and-text">
                <Logo />
                <p>Pije vam se pivo a ne izlazi vam se iz kuće? Mi smo tu da pomognemo!</p>
            </div>
            <div></div>
        </StyledFooter>
    )
}