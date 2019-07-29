import React from 'react';
import './Payment.css';

// 'Step 4: ADRESA? adresa da se unese, ili da ga lociramo sami preko gps, pretpostavljam da to moze da se uradi, a on samo da potvrdi, da, to je to. ';
export default class Payment extends React.Component {

    render(){
        return (
            <div className="paymentForm">
                <label>
                        Online
                        <input type="radio" name="paymentMethod" value="online" />
                    </label>
                <label>
                    Kartica
                    <input type="radio" name="paymentMethod" value="card" />
                </label>
                
                <label>
                    Keš
                    <input type="radio" name="paymentMethod" value="cash"/>
                </label>
                <div>
                Step 5: PLACANJE? Kes ili kartica
                </div>
            </div>
            
        )
    }
}

