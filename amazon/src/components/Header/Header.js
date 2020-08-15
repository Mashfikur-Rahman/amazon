import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Inventroy</a>
                <a href= "/home">Home</a>
                <a href= "/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;