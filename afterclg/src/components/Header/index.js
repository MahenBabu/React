import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png'

function Header(props) {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="AfterClg" />
                </div>
            </div>

        </div>
    )
}

export default Header
