import React from "react"
import styled from 'styled-components'
import { CustomizedInputBase } from "./Search"

const StyledDiv = styled.div`
    height: fit-content;
    width: ${props => props.small ? "40vw" : "45vw"};
    ${props => props.absolute && "position: absolute; top: 15vw; left: 10vw;"}
    max-width: 800px;
    text-align: initial;
        h1{
        font-family: Bitter;
        font-size: 44px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.88px;
        color: ${props => props.dark ? "black;" : "white;"}
    }
    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${props => props.dark ? "black;" : "white;"}
    }
`

export const TextAndSearch = ({absolute, text, title, dark, small}) => {

    return(
        <StyledDiv absolute={absolute} dark={dark} small={small}>
            <h1>
                {title}
            </h1>
            <p>
                {text}
            </p>
            <CustomizedInputBase />
        </StyledDiv>
    )
}