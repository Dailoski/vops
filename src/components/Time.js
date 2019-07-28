import React from 'react';
import './Time.css';

// 'Step 5: VREME DOSTAVE? vreme dostave bira izmedju "ASAP" i nekog custom vremena, npr ako sad ja porucim a za veceras mi treba.';
export default class Time extends React.Component {
    
    render(){
        return (
            <div className="timeForm">
                <label>
                    Sto pre?
                    <input type="checkbox" name="asap" />
                </label>
                
                <label>
                    Neko određeno vreme?
                    <input type="text" name="time" />
                </label>
                <div>
                    Step 4: VREME DOSTAVE? vreme dostave bira izmedju "ASAP" i nekog custom vremena, npr ako sad ja porucim a za veceras mi treba.
                </div>
            </div>
            
        )
    }
}
