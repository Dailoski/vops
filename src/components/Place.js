import React from 'react';
import './Place.css';

// 'Step 4: ADRESA? adresa da se unese, ili da ga lociramo sami preko gps, pretpostavljam da to moze da se uradi, a on samo da potvrdi, da, to je to. ';
export default class Place extends React.Component {

    render(){
        return (
            <div className="placeForm">
                <label>
                    Da li je ovo tvoja lokacija?
                    <input type="text" name="gpslocation" />
                </label>
                
                <label>
                    Gde donosimo pivo?
                    <input type="text" name="location" />
                </label>
                <div>
                Step 4: ADRESA? adresa da se unese, ili da ga lociramo sami preko gps, pretpostavljam da to moze da se uradi, a on samo da potvrdi, da, to je to. 
                </div>
            </div>
            
        )
    }
}

