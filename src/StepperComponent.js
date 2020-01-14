import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux'
import {Contact} from './components/Contact';
import Beer from './components/Beer';
import {Place} from './components/Place';
import {Time} from './components/Time';
import {ShoppingCart} from './components/ShoppingCart';
import { Badge } from '@material-ui/core';
import { injectIntl } from 'react-intl';
import { messages } from './localization/locales';
import { LangSwitcher } from './localization/LangSwitcher';

const useStyles = makeStyles(theme => ({
  root: {
    height: "90vh",
    width: "100%",
    padding: "2vh"
  },
  component: {
    height: "76vh",
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%"
  },
  icon: {
    '&:hover': {
      color: 'blue'
    }
  },
  step: {
    width: '95%',
    transition: 'all 0.5s ease-out'
  },
  controls: {
    margin: "0 auto",
    height: "fit-content",
    alignSelf: "flex-end"
  }
}));

const writeData = (jsonObj, fb) => {
  console.log(jsonObj)

  fb.database().ref('data').push(jsonObj).then(
    console.log('uspesno')
  ).catch(err => {
    console.log('puklo')
  });
}

const adaptData = data => ({
  firstName: data.info.name,
  lastName: data.info.name,
  phoneNumber: data.info.number,
  order: {
    ...data.shoppingCart.selectedItems
  },
  city:data.location.enteredLocation,
  street:data.location.enteredLocation,
  streetNumber:data.location.enteredLocation,
  door:data.location.additionalInfo,
  floor:data.location.additionalInfo,
  apartment:data.location.additionalInfo,
  dateOfDelivery:data.time.selectedTime.toISOString(),
  timeOfDelivery:data.time.selectedTime.toISOString(),
  timeStamp: new Date().getTime()
})

let OrderButton = ({state, fb, intl}) => {
  return(
    <Button variant="contained" color="secondary" onClick={() => writeData(adaptData(state), fb)}>
      {intl.formatMessage(messages.order)}
    </Button>
  )
}
OrderButton = connect(state => ({state}))(OrderButton)

function getSteps() {
  return ['Ko?', 'Sta?', 'Gde?', 'Kad?', 'Naplata?'];  //Izbacio sam "Koliko"
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Contact/>;
    case 1:
      return <Beer/>;
    case 2:
      return  <Place/>;
    case 3:
      return  <Time/>;
    case 4:
      return <ShoppingCart/>;
    default:
      return 'Unknown step';
  }
}

let StepperComponent = ({newItem, removeNotification, fb, intl}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  function handleNext() {
    const newActiveStep = activeStep + 1;

    setActiveStep(newActiveStep);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function ReturnIcon(props) {
    
    if (props.index === 0) {
    return (
    <Tooltip title="Ko smeta?!">
      <SvgIcon className={classes.icon} fontSize="large">
        <path d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" />
      </SvgIcon>
    </Tooltip>
    );
  }
    else if (props.index === 1) {
      return (
      <Tooltip title="Sta treba?!">
        <SvgIcon className={classes.icon} fontSize="large">
          <path d="M4,2H19L17,22H6L4,2M6.2,4L7.8,20H8.8L7.43,6.34C8.5,6 9.89,5.89 11,7C12.56,8.56 15.33,7.69 16.5,7.23L16.8,4H6.2Z" />
        </SvgIcon>
      </Tooltip>
      );
    }
    else if (props.index === 2) {
      return (
      <Tooltip title="Gde nosimo?!">
        <SvgIcon className={classes.icon} fontSize="large">
          <path d="M15.5,4.5C15.5,5.06 15.7,5.54 16.08,5.93C16.45,6.32 16.92,6.5 17.5,6.5C18.05,6.5 18.5,6.32 18.91,5.93C19.3,5.54 19.5,5.06 19.5,4.5C19.5,3.97 19.3,3.5 18.89,3.09C18.5,2.69 18,2.5 17.5,2.5C16.95,2.5 16.5,2.69 16.1,3.09C15.71,3.5 15.5,3.97 15.5,4.5M22,4.5C22,5.5 21.61,6.69 20.86,8.06C20.11,9.44 19.36,10.56 18.61,11.44L17.5,12.75C17.14,12.38 16.72,11.89 16.22,11.3C15.72,10.7 15.05,9.67 14.23,8.2C13.4,6.73 13,5.5 13,4.5C13,3.25 13.42,2.19 14.3,1.31C15.17,0.44 16.23,0 17.5,0C18.73,0 19.8,0.44 20.67,1.31C21.55,2.19 22,3.25 22,4.5M21,11.58V19C21,19.5 20.8,20 20.39,20.39C20,20.8 19.5,21 19,21H5C4.5,21 4,20.8 3.61,20.39C3.2,20 3,19.5 3,19V5C3,4.5 3.2,4 3.61,3.61C4,3.2 4.5,3 5,3H11.2C11.08,3.63 11,4.13 11,4.5C11,5.69 11.44,7.09 12.28,8.7C13.13,10.3 13.84,11.5 14.41,12.21C15,12.95 15.53,13.58 16.03,14.11L17.5,15.7L19,14.11C20.27,12.5 20.94,11.64 21,11.58M9,14.5V15.89H11.25C11,17 10.25,17.53 9,17.53C8.31,17.53 7.73,17.28 7.27,16.78C6.8,16.28 6.56,15.69 6.56,15C6.56,14.31 6.8,13.72 7.27,13.22C7.73,12.72 8.31,12.47 9,12.47C9.66,12.47 10.19,12.67 10.59,13.08L11.67,12.05C10.92,11.36 10.05,11 9.05,11H9C7.91,11 6.97,11.41 6.19,12.19C5.41,12.97 5,13.91 5,15C5,16.09 5.41,17.03 6.19,17.81C6.97,18.59 7.91,19 9,19C10.16,19 11.09,18.63 11.79,17.91C12.5,17.19 12.84,16.25 12.84,15.09C12.84,14.81 12.83,14.61 12.8,14.5H9Z" />
        </SvgIcon>
      </Tooltip>
      );
    }
    else if (props.index === 3) {
      return (
      <Tooltip title="Za kad to?!">
        <SvgIcon className={classes.icon} fontSize="large">
          <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
        </SvgIcon>
      </Tooltip>
      );
    }
    else if (props.index === 4) {
      return props.newItem ? 
      <Badge badgeContent="dodato" color="primary">
        <Tooltip  title="Pare nisu problem!">
          <SvgIcon className={classes.icon} fontSize="large">
            <path d="M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14A1,1 0 0,0 15,15V12A1,1 0 0,0 14,11H11V10H15V8H13V7H11V8H10A1,1 0 0,0 9,9V12A1,1 0 0,0 10,13H13V14H9V16H11V17Z" />
          </SvgIcon>
        </Tooltip> 
      </Badge> 
      :
      <Tooltip title="Pare nisu problem!">
        <SvgIcon className={classes.icon} fontSize="large">
          <path d="M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14A1,1 0 0,0 15,15V12A1,1 0 0,0 14,11H11V10H15V8H13V7H11V8H10A1,1 0 0,0 9,9V12A1,1 0 0,0 10,13H13V14H9V16H11V17Z" />
        </SvgIcon>
      </Tooltip> 
    }
}

  return (
    // dodao background color i border radius , borderRadius: 10 }} 
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep} style={{ backgroundColor: "rgba(255,255,255,0.8)", marginBottom:'1vh', height:"9vh"}}> 
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepButton className={classes.step} style ={{backgroundColor: activeStep === index ? 'rgba(0,0,0,0.1)' : null}}
                icon={<ReturnIcon newItem={newItem} index={index}/>}
                onClick={handleStep(index)}
                {...buttonProps}
              >
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div className={classes.component}>

            <Typography  component={'div'} className={classes.instructions}>{getStepContent(activeStep)} </Typography> {/*dodao component = span zbog CANNOT NEST <DIV> INSIDE <P> warning*/}
            <div className={classes.controls}>
              <Button 
                disabled={activeStep === 0} 
                onClick={handleBack} 
                className={classes.button} 
                color="primary" 
                variant="contained"
              >
                {intl.formatMessage(messages.back)}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={activeStep === 4}
              >
                {intl.formatMessage(messages.next)}
              </Button>
                <OrderButton intl={intl} fb={fb} />
                <LangSwitcher />
            </div>
          </div>
      </div>
  );
}

const mapStateToProps = state => ({
  newItem: state.shoppingCart.newItem
})

StepperComponent = connect(mapStateToProps)(StepperComponent)
StepperComponent = injectIntl(StepperComponent)
export {StepperComponent}