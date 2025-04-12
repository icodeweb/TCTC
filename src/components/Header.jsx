import React from 'react';

const Header = () => {
    return (
        <div id="header">
            <div id="siteTitle">
                <h1>TCTC DESIGN STUDIO</h1>
                <img src="assets/images/logo.png" alt="logo" />
            </div>
            <div id="navBar">
                <a href="#">INFO</a>
                <a href="#">PRESS</a>
                <a href="#">PROJECT</a>
            </div>
        </div>
    );
};

export default Header;