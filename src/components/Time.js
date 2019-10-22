import React from 'react';
import './Time.css';
import { connect } from 'react-redux'
import { changeTime } from '../redux/actions';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

// 'Step 5: VREME DOSTAVE? vreme dostave bira izmedju "ASAP" i nekog custom vremena, npr ako sad ja porucim a za veceras mi treba.';
let Time = ({value, setTime}) =>{
    

        return (
            <div className="timeForm">
                <label>
                    Sto pre?
                    <input type="checkbox" name="asap" />
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
    value: state.time.selectedTime
})


const mapDispatchToProps = dispatch => ({
  setTime: (date) => {
      dispatch(changeTime(date));
  }
});

Time = connect(mapStateToProps, mapDispatchToProps)(Time)

export { Time }
