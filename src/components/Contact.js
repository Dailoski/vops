import React from 'react';
import './Contact.css';

// 'Step 1: DA LI NAM TREBA IME I PREZIME? Treba, moramo znati kome dostavljamo a dodao bih i BROJ TELEFONA ovde, pa cemo njega da cuvamo u bazi, za sledeci put da imamo podatke';
export default class Contact extends React.Component {
    
    render(){
        return (
            <div className="contactForm">
                <label>
                    Ime i prezime:
                    <input type="text" name="name" />
                </label>
                
                <label>
                    Broj telefona:
                    <input type="text" name="phone" />
                </label>
                <div>
                    Step 1: DA LI NAM TREBA IME I PREZIME? Treba, moramo znati kome dostavljamo a dodao bih i BROJ TELEFONA ovde, pa cemo njega da cuvamo u bazi, za sledeci put da imamo podatke
                </div>
            </div>
            
        )
    }
}
