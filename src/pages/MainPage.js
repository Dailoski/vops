import React from "react"
import styled from 'styled-components'
import { NavBar } from '../components/NavBar'
import bigImage from '../images/hero-image-big.png'
import { TextAndSearch } from "../components/TextAndSerach"
import { HowItWorks } from "../components/HowItWorks"
import { Brands } from "../components/Brands"
import { WantBeer } from "../components/WantBeer"
import { Footer } from "../components/Footer"
import Autocomplete from "../components/autocomplete/AutoComplete"


const StyledMainPage = styled.div`
    img{
        width: 100%;
    }

`

export const MainPage = () => {
    const api = {
        url: "https://api.donesi.rs/v2",
        endpoint: "/location/places",
        searchTermKeys: ["address"],
        responseShape: {
            collectionKey: 'data.addresses',
            getTextToShow: obj => obj.street
        }
    }
    return (
        <StyledMainPage>
            <NavBar />
            <Autocomplete 
             limit={10}
             api={api}
             placeholder="ADRESA"
             selectedItems={[]}
             add={()=>{}}
             addToShop={()=>{}}
             remove={()=>{}}
             removeFromShop={()=>{}}
             wherePart={""}
            />
            <img src={bigImage} alt="beer" />
            <TextAndSearch absolute title="Pivo je naše srednje ime." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero justo, volutpat a ligula sed, semper consequat urna. Aliquam lacinia odio a dignissim iaculis. Nullam quis elementum libero." />
            <HowItWorks />
            <Brands />
            <WantBeer />
            <Footer />
        </StyledMainPage>
    )
}