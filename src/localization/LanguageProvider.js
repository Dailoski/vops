import { IntlProvider } from 'react-intl';
import { messages } from './messages';
import { connect } from 'react-redux'
// import en from 'react-intl/locale-data/en'




const mapStateToProps = (state) => {
    console.log(state.language.selectedLang)
    return {
        locale: state.language.selectedLang,
        key: state.language.selectedLang,
        messages: messages[state.language.selectedLang]
    }
}

export const LanguageProvider = connect(mapStateToProps)(IntlProvider)