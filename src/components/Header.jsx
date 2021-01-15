import React from 'react';
import './style.css'
import Logo from './../assets/logo.png'
import Profile from './../assets/profile.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className="section">
                <div className="logoside">
                    <div className="hamburger"><span><i className="fas fa-bars"></i></span></div>
                    <div className="thelogo">
                        <div className="insidelogo">
                            <img width='100%' height='100%' src={Logo} alt="logo"/>
                        </div>
                    </div>
                </div>
                <div className="loginside">
                    <div className="welcome hidewelcome">Hallo, <span className='blockname'>Gadjian User</span></div>
                    <div className="photo">
                        <div className="insidephoto">
                            <img className='borderimg' width='100%' height='100%' src={Profile} alt="person_photo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;