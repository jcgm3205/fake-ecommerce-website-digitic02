import React from 'react';
import { HiBars3 } from "react-icons/hi2";

import { miniLibrary } from '../utils/miniLib';

export default function BurgerButton() {
    const lib = miniLibrary();

    return (
        <button className="header__burgerbtn mr-[0.625rem]"
                onClick={lib.toggleNavMenu} >
            <HiBars3 className="w-9 text-white text-4xl" />
        </button>        
    );
}
