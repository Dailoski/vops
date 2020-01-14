import React from 'react';
import { FormControlLabel, FormControl, Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeLanguage } from '../redux/actions';

let LangSwitcher = ({selected, changeLang}) => (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <Switch checked={selected} onChange={e => changeLang(e.target.checked)} value="antoine" />
        }
        label="English"
      />
  </FormControl>
)
const mapStateToProps = state => ({
    selected: state.language.selectedLang === "en"
})


const mapDispatchToProps = dispatch => ({
  changeLang: (checked) => {
      dispatch(changeLanguage(checked));
  }
});

LangSwitcher = connect(mapStateToProps, mapDispatchToProps)(LangSwitcher)

export { LangSwitcher }