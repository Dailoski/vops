import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { fetchBeers } from "../services/fetchBeers"
import { SingleBeer } from "../components/SingleBeer"
import { ShoppingCart } from "../components/ShoppingCart"
import { TextInput } from "../components/common/TextInput/TextInput"

const StyledBeerList = styled.div`
    .content{
        padding: 80px 150px;
    }
    h1{
        text-align: initial;
        font-family: Poppins;
        font-size: 36px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
    }
    .beer-list{
        display: flex;
        flex-wrap: wrap;
        width: 900px;
    }
`

export const BeerList = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        (async function () {
            const x = await fetchBeers();
            setItems(x)
        })();

    }, []);
    return (
        <StyledBeerList>
            <NavBar />

            <div className="content">
                <div>
                    <h1>Izaberi pivo</h1>
                   
                </div>
                <div className="beer-list">
                    {items.map(beer => <SingleBeer key={beer.id} {...beer} />)}
                </div>
                <ShoppingCart />

            </div>

            <Footer />
        </StyledBeerList>
    )
}