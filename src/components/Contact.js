import React from 'react';
import {TextInput} from './common/TextInput/TextInput'
import './Contact.css';
import { connect } from 'react-redux'
import { changeInput } from '../redux/actions';
import { Title } from './common/Title/Title';

// 'Step 1: DA LI NAM TREBA IME I PREZIME? Treba, moramo znati kome dostavljamo a dodao bih i BROJ TELEFONA ovde, pa cemo njega da cuvamo u bazi, za sledeci put da imamo podatke';
let Contact = ({onChange, name, phone}) => {
    return (
        <div className="contactForm">
             <Title text="Kontakt podaci" />
            <TextInput id="phone" label="Broj telefona" value={phone} onChange={event => onChange(event.target.value, "number")} />
            <TextInput id="name" label="Ime i prezime" value={name} onChange={event => onChange(event.target.value, "name")} />
        </div>       
        )
    
}
const mapStateToProps = state => ({
    name: state.info.name,
    phone: state.info.number
})


const mapDispatchToProps = dispatch => ({
    onChange: (value, name) => {
        dispatch(changeInput(value, name));
    }
});

Contact = connect(mapStateToProps, mapDispatchToProps)(Contact)

export {Contact}
