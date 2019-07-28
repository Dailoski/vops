import React from 'react';
import './Beer.css';

// 'Step 2: OVDE BIH NEKE KARTICE I DA SE KLIKCE NA NJIH? Yes, kartice sa slikom piva, ili samo imena. To treba videti, mozemo stavimo slike za pocetak, msm da je lepse.'
export default class Beer extends React.Component {
    
    render(){
        return (
            <div className="beerForm">
                <label>
                    Izaberi pivo:
                    <input type="text" name="name" />
                </label>
                
                <label>
                    Kolicina:
                    <input type="text" name="phone" />
                </label>
                <div>
                Step 2: OVDE BIH NEKE KARTICE I DA SE KLIKCE NA NJIH? Yes, kartice sa slikom piva, ili samo imena. To treba videti, mozemo stavimo slike za pocetak, msm da je lepse.
                </div>
            </div>
           
        )
    }
}
