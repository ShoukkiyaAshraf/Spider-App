import React from "react";
import logoImage from '../../logo.png';
import { Link } from "react-router-dom";

function NavHeader(){

    const currentPage = window.location.pathname;
    return (
        <div className="Nav-header">
            <div className="Logo-Head">
            <div className={currentPage != '/start' ? 'nav-header-logo animate-logo' : 'nav-header-logo'}>
                <img src={logoImage} alt="Logo-Spider" />
            </div>
            <div className="logo-head-text">
                <h1>Spider</h1>
            </div>
            </div>
            <div className="Nav-items">
                <Link to="/"> Home</Link>
                {
                    currentPage !== '/start' && (
                        <Link to="/start">Start Over</Link>
                    )
                }
                
                <Link to="/">About Us</Link>
            </div>
        </div>
    );
}

export default NavHeader;