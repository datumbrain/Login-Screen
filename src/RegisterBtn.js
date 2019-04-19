import React, { Component } from 'react';
import './App.css';
import img_elOverridesBlueOutline from './images/RegisterBtn_elOverridesBlueOutline.png';


export default class RegisterBtn extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elOverridesBlueOutline = {
        backgroundImage: 'url('+img_elOverridesBlueOutline+')',
        backgroundSize: '100% 100%',
     };
    const style_elRegitser = {
        fontSize: 15.2,
        color: '#e41d25',
        textAlign: 'center',
     };
    
    return (
      <div className="RegisterBtn" style={baseStyle}>
        <div className="foreground">
          <div className='elOverridesBlueOutline' style={style_elOverridesBlueOutline} />
          <div className='font-montserratSemiBold  elRegitser' style={style_elRegitser}>
            <div>{this.props.locStrings.registerbtn_regitser_596969}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
