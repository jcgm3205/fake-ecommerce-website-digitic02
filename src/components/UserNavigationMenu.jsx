import React from 'react';
import {    HiArrowPath, 
            HiOutlineHeart, 
            HiOutlineUser, 
            HiOutlineShoppingCart  } from "react-icons/hi2";

export default function UserNavigationMenu() {
    return (
        <nav className="header-usermenu flex items-center">
            <a href="/compare"  className="header__userlink ml-2"><HiArrowPath className="w-6 text-[1.5rem] text-white" /></a>
            <a href="/wishlist" className="header__userlink ml-2"><HiOutlineHeart className="w-6 text-[1.5rem] text-white" /></a>

            {/* Dropdown component for the user login/logout here: */}
            <div className="header-userdrop-cont flex items-center">
                <button className="header__userbtn ml-2"><HiOutlineUser className="w-6 text-[1.5rem] text-white" /></button>
            </div>

            {/* Shopping cart component goes here: */}
            <div className="header-cart-cont flex items-center">
                <button className="header__cartbtn ml-2"><HiOutlineShoppingCart className="w-6 text-[1.5rem] text-white" /></button>
            </div>                         
        </nav>
    );
}