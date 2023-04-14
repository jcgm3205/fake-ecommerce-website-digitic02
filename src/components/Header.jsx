import React from 'react';
import { Link } from 'react-router-dom';

import SiteNavMenu from './SiteNavMenu';
import GlobalSearch from './GlobalSearch';
import BurgerButton from './BurgerButton';
import UserNavigationMenu from './UserNavigationMenu';

export default function Header() {

    return (
        <header className="header bg-main-bg-clr">
            {/* First strip of three */}
            <div className="header-topstrip-hotline py-3 px-0 border-b border-solid border-b-primary-grey text-white text-center">
                <p className="header__phone text-[13px] leading-none">Hotline: (888) 4434-0006 - (888) 3918-8331</p>      
            </div>

            {/* Second strip of three */}
            <div className="header-mainstrip h-mainstrip-he py-4 px-2 flex items-center lg:px-5">
                <BurgerButton />

                {/* Link to the Home page: */}
                <h1 className="header__logo mr-auto">
                    <Link to="/" className="text-white font-light text-[1.75rem]">Digitic02</Link>
                </h1>

                {/* User navigation menu goes here: */}
                <UserNavigationMenu />
            </div>

            {/* Last strip of the three */}
            <div className="header-bottomstrip bg-sec-bg-clr py-3 px-0 flex justify-center relative lg:px-5 lg:justify-start">

                {/* Site navigation menu goes here: */}
                <SiteNavMenu /> 

                {/* Global search component goes here: */}
                <GlobalSearch />  
            </div>  
        </header>
    );
}
