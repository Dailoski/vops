import React from 'react';
import './Time.css';
import { connect } from 'react-redux'
import { changeTime, changeAsapSwitch } from '../redux/actions';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import { Checkbox } from '@material-ui/core';

// 'Step 5: VREME DOSTAVE? vreme dostave bira izmedju "ASAP" i nekog custom vremena, npr ako sad ja porucim a za veceras mi treba.';
let Time = ({value, setTime, asap, onChange}) =>{
    

        return (
            <div className="timeForm">
                <label>
                    Sto pre?
                    <Checkbox color="primary" checked={asap} onChange={(e)=> console.log(e.target) || onChange(e)} />
                </label> 
                
                <label>
                    Neko određeno vreme?
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    
                    <DateTimePicker
                        ampm={false}
                        value={value}
                        disablePast
                        onChange={setTime}
                        showTodayButton
                        disabled={asap}
                    />
                    </MuiPickersUtilsProvider>

                </label>
                <div>
                    Step 4: VREME DOSTAVE? vreme dostave bira izmedju "ASAP" i nekog custom vremena, npr ako sad ja porucim a za veceras mi treba.
                </div>
            </div>
            
        )
    
}
const mapStateToProps = state => ({
    value: state.time.selectedTime,
    asap: state.time.asap
})


const mapDispatchToProps = dispatch => ({
  setTime: date => dispatch(changeTime(date)),
  onChange: event => dispatch(changeAsapSwitch(event.target.checked))
});

Time = connect(mapStateToProps, mapDispatchToProps)(Time)

export { Time }
