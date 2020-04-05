import React from "react"
import styled from 'styled-components'
import { NavBar } from '../components/NavBar'
import { Order } from '../components/Order'
import { Footer } from "../components/Footer"






const StyledOrder = styled.div`
  overflow-x: hidden;
  
`

export const OrderPage = () => {

    return (
        <StyledOrder>
            <NavBar />
           
            <Order />
            <Footer />
        </StyledOrder>
    )
}