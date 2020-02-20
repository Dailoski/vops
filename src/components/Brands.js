import React from "react"
import styled from 'styled-components'
import zajecarsko from '../images/zajecarsko-logo.png'

const StyledDiv = styled.div`
    height: 600px;
    background-color: #01012b;
    padding: 10px 180px;

    h2{
        height: 53px;
        font-family: Bitter;
        font-size: 44px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ebebeb;
    }
    .brands-flex-container{
        display: flex;
        flex-wrap: wrap;
        div{
            width: 16.66%;
            img{
                width: 70%;
            }
        }
    }
`

export const Brands = () => {
    const array = [zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko,zajecarsko]
    return(
        <StyledDiv>
            <h2>Brendovi</h2>
            <div className="brands-flex-container">
                {array.map(img => (
                <div>
                    <img src={img} alt="beer"/>
                </div>
                ))}
            </div>
            <div></div>
        </StyledDiv>
    )
}