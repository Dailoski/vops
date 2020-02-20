import React from "react"
import styled from 'styled-components'
import { NavBar } from '../components/NavBar'
import bigImage from '../images/hero-image-big.png'
import { TextAndSearch } from "../components/TextAndSerach"
import { HowItWorks } from "../components/HowItWorks"
import { Brands } from "../components/Brands"
import { WantBeer } from "../components/WantBeer"
import { Footer } from "../components/Footer"

const StyledMainPage = styled.div`
    img{
        width: 100%;
    }

`

export const MainPage = () => {

    return (
        <StyledMainPage>
            <NavBar />
            <img src={bigImage} alt="beer" />
            <TextAndSearch absolute title="Pivo je naše srednje ime." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero justo, volutpat a ligula sed, semper consequat urna. Aliquam lacinia odio a dignissim iaculis. Nullam quis elementum libero." />
            <HowItWorks />
            <Brands />
            <WantBeer />
            <Footer />
        </StyledMainPage>
    )
}