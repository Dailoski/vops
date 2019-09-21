import React from 'react';
import './Beer.css';
//import { beerList } from '../mocked/beerList';
import { SingleBeer } from './SingleBeer';
import styled from 'styled-components'
import { fetchBeers } from '../services.js/fetchBeers';
// 'Step 2: OVDE BIH NEKE KARTICE I DA SE KLIKCE NA NJIH? Yes, kartice sa slikom piva, ili samo imena. To treba videti, mozemo stavimo slike za pocetak, msm da je lepse.'

export const ScrollableContainer = styled.div`
    height: 65vh;
    overflow: scroll;
    margin-bottom: 50px;
`

const BeerContainer = styled.div`
        width: 100%;
        padding: 25px;
        overflow-y: scroll;
    @media (min-width: 400px){
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 728px){

    }

    @media (min-width: 900px){
        grid-template-columns: repeat(3, 1fr);

    }
    @media (min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);

    }
    @media (min-width: 1800px){} 
`
export default class Beer extends React.Component {
    state = {beerList: []}
    async componentDidMount(){
        const x = await fetchBeers()
        setTimeout(() => {
            this.setState({
                beerList: x
            })
        }, 4000);
        
    }
    render(){
        const {beerList} = this.state
        return (
            <ScrollableContainer>
                <BeerContainer>
                    {beerList.map(
                        beer => <SingleBeer key={beer.name} {...beer}/>
                    )}
                </BeerContainer>            
            </ScrollableContainer>
         
        )
    }
}
