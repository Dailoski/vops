import React from 'react';
import {TextInput} from './common/TextInput/TextInput'
import './Contact.css';
import { connect } from 'react-redux'
import { changeInput } from '../redux/actions';
import { Title } from './common/Title/Title';
import { injectIntl } from "react-intl";
import { messages } from '../localization/locales';

// 'Step 1: DA LI NAM TREBA IME I PREZIME? Treba, moramo znati kome dostavljamo a dodao bih i BROJ TELEFONA ovde, pa cemo njega da cuvamo u bazi, za sledeci put da imamo podatke';
let Contact = ({onChange, name, phone, intl}) => {
    return (
        <div className="contactForm">
             <Title text="Kontakt podaci" />
            <TextInput id="phone" label={intl.formatMessage(messages.phoneLabel)} value={phone} onChange={event => onChange(event.target.value, "number")} />
            <TextInput id="name" label={intl.formatMessage(messages.nameLabel)} value={name} onChange={event => onChange(event.target.value, "name")} />
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
Contact = injectIntl(Contact)
export {Contact}
