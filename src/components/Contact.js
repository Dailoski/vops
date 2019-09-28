import React from 'react';
import TextInput from './common/TextInput/TextInput'
import './Contact.css';

// 'Step 1: DA LI NAM TREBA IME I PREZIME? Treba, moramo znati kome dostavljamo a dodao bih i BROJ TELEFONA ovde, pa cemo njega da cuvamo u bazi, za sledeci put da imamo podatke';
export default class Contact extends React.Component {
    
    constructor(){
        super();
        this.state = {
            phone: '',
            name: '',
            error: ''
        }
        this.handlePhone = this.handlePhone.bind(this);
        this.handleName = this.handleName.bind(this);
        this.click = this.click.bind(this);
    }

    handlePhone(event) {
       this.setState({ phone: event.target.value });
    }

    handleName(event) {
        this.setState({ name: event.target.value});
    }


    render(){
        return (
           
            <div className="contactForm">
             <TextInput id="phone" label="Broj telefona" error={this.state.error} value={this.state.phone} onChange={this.handlePhone} />
             <TextInput id="name" label="Ime i prezime" error={this.state.error} value={this.state.name} onChange={this.handleName} />
             <button onClick={this.click} >Click</button>
            </div>       
        )
    }

    click(){
        console.log(this.state.phone);
        console.log(this.state.name);
    }
}
