import React from "react"
import styled from 'styled-components'
import { Logo, Gajba } from "./Logo"

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
`
export const NavBar = () => {

    return(
        <StyledNavBar>
            <Logo/>
            <StyledDiv>
                <p> POGLEDAJ PIVA</p>
                <Gajba />
            </StyledDiv>
        </StyledNavBar>
    )
}