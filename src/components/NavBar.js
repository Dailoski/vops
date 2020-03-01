import React from "react"
import styled from 'styled-components'
import { Logo, Gajba } from "./Logo"
import { Link } from "react-router-dom";
const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    align-items: center;
    padding-left: 150px;
    padding-right: 150px;
    svg:hover{
        cursor: pointer;
    }
`

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #01012b;
    p{
        margin-right: 80px;
        :hover{
            cursor: pointer;
        }
    }
    a {
    color: inherit;
    text-decoration: none;
}

a:hover 
{
     color:inherit; 
     text-decoration:none; 
     cursor:pointer;  
}
`
export const NavBar = () => {

    return (
        <StyledNavBar>
            <Logo />
            <StyledDiv>
                <Link to="/choose-beer"><p> POGLEDAJ PIVA</p></Link>
                <Gajba />
            </StyledDiv>
        </StyledNavBar>
    )
}