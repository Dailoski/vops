import React from "react"
import styled from 'styled-components'
import bigImage from '../images/about-us-big.png'
import cer1 from '../images/cereals-1.svg'
import cer2 from '../images/cereals-2.svg'
import { NavBar } from '../components/NavBar'
import { Footer } from "../components/Footer"

const StyledOrder = styled.div`

    .container {
    position: relative;
    /* text-align: center; */
    /* color: white; */
        img{
            width: 100%;
        }
        h1 {
           position: absolute;
           top: 25vh;
           left: 10vw;
           width: 248px;
           height: 53px;
           font-family: Bitter;
           font-size: 44px;
           font-weight: bold;
           font-stretch: normal;
           font-style: normal;
           line-height: normal;
           letter-spacing: 0.88px;
           color: #ffffff;
       }

       .content {
         display: flex;
         flex-wrap: nowrap;
        .paragraph {
         height: 70vh;
         margin-top: 10vh;
        
         p {
            font-family: Poppins;
            font-size: 18px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: left;

          
          }
        }
        .left-cer{
          height: 100%;
          width: 100%;
            img {
                height: 60vh;
                width: 20vw;
                
            }
        }
        .right-cer{
            height: 100%;
            width: 100%;
          img {
                height: 30vh;
                width: 30vw;
            }
        }

     }
    }
    
`

export const AboutUsPage = () => {

    return (
        <StyledOrder>
            <NavBar />
            <div className="container">
            <img src={bigImage} alt="About us" />
            <h1>Naša priča</h1>
            <div className="content">
                <div className="left-cer">
                    <img  src={cer1} alt="beer" />
                </div>
                <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero justo, volutpat a ligula sed, semper consequat urna. 
                        Aliquam lacinia odio a dignissim iaculis. Nullam quis elementum libero. Praesent dictum ultrices nulla in facilisis. 
                        In ultrices enim rutrum pharetra dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec libero justo, volutpat a ligula sed, semper consequat urna. Aliquam lacinia odio a dignissim iaculis. Nullam quis elementum libero.
                        Praesent dictum ultrices nulla in facilisis. In ultrices enim rutrum pharetra dignissim.</p>
                </div>
                <div className="right-cer">
                    <img  src={cer2} alt="beer" />
                </div>
            </div>
            </div>
            <Footer />
        </StyledOrder>
    )
}