import React from 'react';
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from 'react-router-dom';

import { miniLibrary } from '../utils/miniLib';

export default function UserDropdown() {
    const lib = miniLibrary();

    function handleButton(e){
        e.stopPropagation();
        lib.toggleClass("headerDropdown", "show");
    }

    document.documentElement.addEventListener("click", () => {
        if( document.getElementById("headerDropdown").classList.contains("show") ){
            lib.toggleClass("headerDropdown", "show");
        }
    });

    return (
        <div className="header-userdrop-cont flex items-center relative">
            <button className="header__userbtn ml-2"
                    onClick={ handleButton }>
                <HiOutlineUser className="w-6 text-[1.5rem] text-white" />
            </button>
            <div className="header-dropdown" id='headerDropdown'>
                <Link to="/login" className='header__down-link' >Login</Link>
            </div>
        </div>
    );
}
