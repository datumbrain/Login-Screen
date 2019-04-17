import React, { Component } from 'react';
import './App.css';
import img_elOutline from './images/LoginScreen_elOutline.png';
import img_elSuche from './images/LoginScreen_elSuche.png';
import img_elSuche2 from './images/LoginScreen_elSuche2.png';
import ButtonsButton from './ButtonsButton';
import RegisterBtn from './RegisterBtn';
import img_elOutline2 from './images/LoginScreen_elOutline2.png';
import img_elSuche3 from './images/LoginScreen_elSuche3.png';
import img_elSuche4 from './images/LoginScreen_elSuche4.png';
import img_elCheckboxChecked from './images/LoginScreen_elCheckboxChecked.png';
import img_elRememberme from './images/LoginScreen_elRememberme.png';
import img_elForgotpassword from './images/LoginScreen_elForgotpassword.png';
import img_elImgCopy from './images/LoginScreen_elImgCopy_757429.png';
import img_elLogo from './images/LoginScreen_elLogo.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: 'white',
     };
    const style_elRectangle = {
        background: 'rgba(251, 251, 251, 1.000)',
     };
    const style_elOutline = {
        backgroundImage: 'url('+img_elOutline+')',
        backgroundSize: '100% 100%',
     };
    const style_elSuche = {
        backgroundImage: 'url('+img_elSuche+')',
        backgroundSize: '100% 100%',
     };
    const style_elSuche2 = {
        backgroundImage: 'url('+img_elSuche2+')',
        backgroundSize: '100% 100%',
     };
    const style_elOutline2 = {
        backgroundImage: 'url('+img_elOutline2+')',
        backgroundSize: '100% 100%',
     };
    const style_elSuche3 = {
        backgroundImage: 'url('+img_elSuche3+')',
        backgroundSize: '100% 100%',
     };
    const style_elSuche4 = {
        backgroundImage: 'url('+img_elSuche4+')',
        backgroundSize: '100% 100%',
     };
    const style_elCheckboxChecked = {
        backgroundImage: 'url('+img_elCheckboxChecked+')',
        backgroundSize: '100% 100%',
     };
    const style_elRememberme = {
        backgroundImage: 'url('+img_elRememberme+')',
        backgroundSize: '100% 100%',
     };
    const style_elForgotpassword = {
        backgroundImage: 'url('+img_elForgotpassword+')',
        backgroundSize: '100% 100%',
     };
    const style_elLoginToYourAccoun = {
        fontSize: 18.6,
        color: '#1a2733',
        textAlign: 'left',
     };
    const style_elImgCopy = {
        backgroundImage: 'url('+img_elImgCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elEmail = {
        fontSize: 10.1,
        color: '#6a6c6e',
        textAlign: 'left',
     };
    const style_elPassword = {
        fontSize: 10.1,
        color: '#6a6c6e',
        textAlign: 'left',
     };
    const style_elLogo = {
        backgroundImage: 'url('+img_elLogo+')',
        backgroundSize: '100% 100%',
     };
    const style_elFINDAJOBFINDACA = {
        fontSize: 10.1,
        color: 'black',
        textAlign: 'left',
     };
    const style_elYourEmail = {
        fontSize: 11.0,
        color: '#dee1e5',
        textAlign: 'center',
     };
    const style_elYourEmailCopy = {
        fontSize: 11.0,
        color: '#dee1e5',
        textAlign: 'center',
     };
    
    return (
      <Container fluid={true} className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRectangle' style={style_elRectangle} />
            <div className='elOutline' style={style_elOutline} />
            <div className='elSuche' style={style_elSuche} />
            <div className='elSuche2' style={style_elSuche2} />
            <div className='hasNestedComps elButtonsButton'>
              <ButtonsButton ref={(el)=> this._elButtonsButton = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='hasNestedComps elRegisterBtn'>
              <RegisterBtn ref={(el)=> this._elRegisterBtn = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='elOutline2' style={style_elOutline2} />
            <div className='elSuche3' style={style_elSuche3} />
            <div className='elSuche4' style={style_elSuche4} />
            <div className='elCheckboxChecked' style={style_elCheckboxChecked} />
            <div className='elRememberme' style={style_elRememberme} />
            <div className='elForgotpassword' style={style_elForgotpassword} />
            <div className='font-montserratBold  elLoginToYourAccoun' style={style_elLoginToYourAccoun}>
              <div>{this.props.locStrings.login_logintoyouraccoun_279958}</div>
            </div>
            <div className='elImgCopy' style={style_elImgCopy} />
            <div className='font-montserratBold  elEmail' style={style_elEmail}>
              <div>{this.props.locStrings.login_email_825869}</div>
            </div>
            <div className='font-montserratBold  elPassword' style={style_elPassword}>
              <div>{this.props.locStrings.login_password_809056}</div>
            </div>
            <div className='elLogo' style={style_elLogo} />
            <div className='font-montserratBold  elFINDAJOBFINDACA' style={style_elFINDAJOBFINDACA}>
              <div>{this.props.locStrings.login_findajobfindaca_593687}</div>
            </div>
            <div className='font-helvetica  elYourEmail' style={style_elYourEmail}>
              <div>{this.props.locStrings.login_youremail_1005552}</div>
            </div>
            <div className='font-helvetica  elYourEmailCopy' style={style_elYourEmailCopy}>
              <div>{this.props.locStrings.login_youremailcopy_538947}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
