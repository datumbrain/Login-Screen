import React, { Component } from 'react';
import './App.css';
import img_elBaseWShadow from './images/ButtonsButton_elBaseWShadow.png';


export default class ButtonsButton extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBaseWShadow = {
        backgroundImage: 'url('+img_elBaseWShadow+')',
        backgroundSize: '100% 100%',
     };
    const style_elLogin = {
        fontSize: 15.2,
        color: 'white',
        textAlign: 'center',
     };
    
    return (
      <div className="ButtonsButton" style={baseStyle}>
        <div className="foreground">
          <div className='elBaseWShadow' style={style_elBaseWShadow} />
          <div className='font-montserratSemiBold  elLogin' style={style_elLogin}>
            <div>{this.props.locStrings.buttonsbutton_login_128141}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
