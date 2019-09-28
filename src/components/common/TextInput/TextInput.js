import React, { Component } from 'react';
//import PropTypes from 'prop-types' ;
import './TextInput.css';

export default class TextInput extends Component {
  
  //   static propTypes = {
  //     id: PropTypes.string.isRequired,
  //     locked: PropTypes.bool,
  //     active: PropTypes.bool,
  //     value: PropTypes.string,
  //     error: PropTypes.string,
  //     label: PropTypes.string,
  //     onChange: PropTypes.func,
  //  };
   
  //  static defaultProps = {
  //     locked: false,
  //     active: false,
  //     value: '',
  //     error: '',
  //     label: '',
  //     onChange: () => '',
  //  };
  
   constructor(props) {
    super(props);
    
    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || '',
      error: props.error || '',
      label: props.label || '',
    };
  
  }
  
    onChange = event => {
  
   // const { id } = this.props;
    const value = event.target.value;
    this.setState({ value, error: this.props.error });
   // console.log(value);
  //  return this.props.onChange(id, value);
  }
    
    render() {
      const { active, value, error, label } = this.state;
      const { id, locked } = this.props;
      const fieldClassName = `field ${(locked ? active : active || value) && 'active'} ${locked && !active && 'locked'}`;
  
      return (
        <div className={fieldClassName}>
          <input
          id={id}
          type="text"
          value={this.props.value}
          placeholder={label}
          onChange= {this.props.onChange}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
          />
          <label htmlFor={id} className={error && 'error'}>
          {error || label}
        </label>
        </div>
      );
    }
  }