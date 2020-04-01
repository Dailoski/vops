import React from "react"
import styled from 'styled-components'
import footer from '../images/footer-bg-sa-belom-pozadinom.png'
import beer from '../images/beer.png'
import { Logo } from "./Logo"
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
    display: flex;
    padding: 80px 150px;
    height: 300px;
    background-image: url(${footer});
    .left {
        float: left;
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
    }
    .right {
        float: right;
        margin-left: 25vw;
        .first-column{
       float:left;

   }
   .second-columt{
       float:right;
   }
   
    }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #01012b;
    p {
        margin-block-start: 0;
        margin-block-end: 1vh;  
        :hover {
            cursor: pointer;
            text-decoration: underline;        }
    }
    a {
    color: inherit;
    text-decoration: none;
}
   td {
       width: 13vw;
       height: 3vh;
       text-align: left;
   }
  

`

export const Footer = () => {

    return (
        <StyledFooter>
            <div className="left">
                <div className="image">
                    <img src={beer} alt="beer" />
                </div>
                <div className="logo-and-text">
                    <Logo />
                    <p>Pije vam se pivo a ne izlazi vam se iz kuće? Mi smo tu da pomognemo!</p>
                </div>
            </div>
            <div className="right">
               <StyledDiv>
                  <table>
                        <tbody>
                            <tr>
                                <td align="left">
                                    <Link to="/"><p> Home</p></Link>
                                </td>
                                <td align="left">
                                    <Link to="/about-us"><p> O nama</p></Link>
                                </td>
                                <td align="left">
                                    <Link to="/brands"><p> Pravila o zaštiti ličnih podataka</p></Link>
                                </td>
                            </tr>
                            <tr >
                                <td align="left">
                                    <Link to="/brands"><p> Kako radi</p></Link>
                                </td>
                                <td align="left">
                                    <Link to="/brands"><p> Kontakt</p></Link>
                                </td>
                                <td align="left">
                                    <Link to="/brands"><p> Pravila o kolačićima</p></Link>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <Link to="/brands"><p> Brendovi</p></Link>
                                </td>
                                <td align="left">
                                    <Link to="/brands"><p> Uslovi korišćenja</p></Link>
                                </td>
                            </tr>
                            <tr>
                                <td align="left">
                                    <Link to="/brands"><p> Pogledaj piva</p></Link>
                                </td>
                                <td align="left">
                                    <Link to="/brands"><p> Izjava o privatnosti</p></Link>
                                </td>
                            </tr>

                        </tbody>
                      
                  </table>
                </StyledDiv>
                    {/* <div className="first-column">
                    <StyledDiv>
                        
                        
                        
                        <Link to="/choose-beer"><p> Pogledaj piva</p></Link>
                    </StyledDiv>
                    </div>
                    
                    <div className="second-column">
                    <StyledDiv>
                        <Link to="/"><p> O nama</p></Link>
                        <Link to="/how-it-works"><p> kontakt</p></Link>
                        <Link to="/brands"><p> Uslovi korišćenja</p></Link>
                        <Link to="/choose-beer"><p> Izjava o privatnosti</p></Link>
                    </StyledDiv>
                    </div> */}
                
            </div>
        </StyledFooter>
    )
}