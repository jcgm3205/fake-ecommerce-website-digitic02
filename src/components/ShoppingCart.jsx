import React from 'react';
import {    HiOutlineShoppingCart  } from "react-icons/hi2";

export default function ShoppingCart() {
    return (
        <div className="header-cart-cont flex items-center">
            <button className="header__cartbtn ml-2"><HiOutlineShoppingCart className="w-6 text-[1.5rem] text-white" /></button>
        </div>        
    );
}
