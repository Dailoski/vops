import { DateTimePicker } from "@material-ui/pickers";
import { connect } from 'react-redux'
import { changeTime } from "../../../redux/actions";

let DatePicker = () => (
    <DateTimePicker
        value={selectedDate}
        disablePast
        onChange={handleDateChange}
        label="With Today Button"
        showTodayButton
      />
)
const mapStateToProps = state => ({
    date: state.time.selectedTime
})


const mapDispatchToProps = dispatch => ({
  changeTime: (date) => {
      dispatch(changeTime(date));
  }
});

DatePicker = connect(mapStateToProps, mapDispatchToProps)(DatePicker)
export {DatePicker}