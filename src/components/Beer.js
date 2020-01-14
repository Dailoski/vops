import React from 'react';
import './Beer.css';
//import { beerList } from '../mocked/beerList';
import { SingleBeer } from './SingleBeer';
import styled from 'styled-components'
import { fetchBeers } from '../services.js/fetchBeers';
import { TextInput } from './common/TextInput/TextInput';
import { injectIntl } from 'react-intl';
import { messages } from '../localization/locales';
// 'Step 2: OVDE BIH NEKE KARTICE I DA SE KLIKCE NA NJIH? Yes, kartice sa slikom piva, ili samo imena. To treba videti, mozemo stavimo slike za pocetak, msm da je lepse.'

export const ScrollableContainer = styled.div`
    height: 65vh;
    overflow: scroll;
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

const replaceSerbianLetters = string => {
    let newString = string.replace(/[ć|č]/g,'c')
    newString = newString.replace('š','s')
    newString = newString.replace('ž','z')

    return newString
}
class Beer extends React.Component {
    state = {beerList: [],
             searchString: ''
    }
    async componentDidMount(){
        const x = await fetchBeers();
        this.setState({beerList:x});
        
    }
    render(){
        const {beerList} = this.state
        const {intl} = this.props
        //multiplying beer list
        if(beerList.length < 16){beerList.forEach(beer => {beerList.push(beer)})
        beerList.forEach(beer => {beerList.push(beer)})}
        return (
            <div>
            
            <TextInput value={this.state.searchString} label={intl.formatMessage(messages.searchLabel)} onChange={event => this.onChange(event.target.value)} />
                <ScrollableContainer>
                    <BeerContainer>
                        {beerList
                        .filter(
                            e => replaceSerbianLetters(e.name.toLowerCase()).indexOf(this.state.searchString.toLowerCase()) > -1) 
                        .map(
                            beer => <SingleBeer key={beer.name + Math.random()} {...beer}/>
                        )}
                    </BeerContainer>            
                </ScrollableContainer>
            </div>
        )
    }

    onChange(value){
        this.setState({searchString:value});
    } 
}
Beer = injectIntl(Beer)
export default Beer