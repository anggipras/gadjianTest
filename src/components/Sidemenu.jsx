import React from 'react';
import './style.css'
import SideLogo from './../assets/logo.png'

const Sidemenu = () => {

    return (
        <div className='sidemenu hidden'>
            <div className="menusection">
                <div className="menulogo">
                    <img width='100%' height='100%' src={SideLogo} alt="logo"/>
                </div>
                <div className="allmenu">
                    <div className="listmenu">
                        <div className='thumbnail'>
                            <span><i className="fas fa-home"></i></span>
                        </div>
                        <div>
                            <h5>Beranda</h5>
                        </div>
                    </div>
                    <div className="listmenu active">
                        <div className='thumbnail'>
                            <span><i className="fas fa-users"></i></span>
                        </div>
                        <div style={{marginLeft: '-1px'}}>
                            <h5>Personnel List</h5>
                        </div>
                    </div>
                    <div className="listmenu">
                        <div className='thumbnail'>
                            <span style={{paddingLeft: '2px'}}><i className="far fa-calendar-alt"></i></span>
                        </div>
                        <div style={{marginLeft: '3px'}}>
                            <h5>Daily Attendance</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidemenu;