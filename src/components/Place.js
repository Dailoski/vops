import React from 'react';
import './Place.css';
import { TextInput } from './common/TextInput/TextInput';
import { connect } from 'react-redux'
import { changeInput } from '../redux/actions';
import { injectIntl } from 'react-intl';
import { messages } from '../localization/locales';
// 'Step 4: ADRESA? adresa da se unese, ili da ga lociramo sami preko gps, pretpostavljam da to moze da se uradi, a on samo da potvrdi, da, to je to. ';

// 'Step 1: DA LI NAM TREBA IME I PREZIME? Treba, moramo znati kome dostavljamo a dodao bih i BROJ TELEFONA ovde, pa cemo njega da cuvamo u bazi, za sledeci put da imamo podatke';
let Place = ({onChange, info, adress, intl}) => {
    return (
        <div className="placeForm">
            <TextInput id="adress" label={intl.formatMessage(messages.locationLabel)} value={adress} onChange={event => onChange(event.target.value, "location")} />
            <TextInput id="info" label={intl.formatMessage(messages.additionalLabel)} value={info} onChange={event => onChange(event.target.value, "info")} />
        </div>       
        )
    
}
const mapStateToProps = state => ({
    adress: state.location.enteredLocation,
    info: state.location.additionalInfo
})


const mapDispatchToProps = dispatch => ({
    onChange: (value, name) => {
        dispatch(changeInput(value, name));
    }
});

Place = connect(mapStateToProps, mapDispatchToProps)(Place)
Place = injectIntl(Place)
export {Place}
