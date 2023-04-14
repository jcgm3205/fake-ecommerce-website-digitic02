import React from 'react';
import { Link } from 'react-router-dom';
import {    HiArrowPath, 
            HiOutlineHeart  } from "react-icons/hi2";
import UserDropdown from './UserDropdown';
import ShoppingCart from './ShoppingCart';

export default function UserNavigationMenu() {
    return (
        <nav className="header-usermenu flex items-center">
            <Link to="/compare"  className="header__userlink ml-2"><HiArrowPath className="w-6 text-[1.5rem] text-white" /></Link>
            <Link to="/wishlist" className="header__userlink ml-2"><HiOutlineHeart className="w-6 text-[1.5rem] text-white" /></Link>

            {/* Dropdown component for the user login/logout here: */}
            <UserDropdown /> 

            {/* Shopping cart component goes here: */}
            <ShoppingCart />                             
        </nav>
    );
}
