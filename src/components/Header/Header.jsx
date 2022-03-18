import React from 'react';
import headerLogo from './../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={headerLogo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="review">Order Review</a>
                <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;