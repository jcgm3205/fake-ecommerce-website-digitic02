import React from "react";
import { ArrowPathIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon ,UserIcon } from "@heroicons/react/24/outline";

function App() {
    return (
      <>
            <header className="header bg-main-bg-clr">
                {/* First strip of three */}
                <div className="header-hotline py-3 px-0 border-b border-solid border-b-primary-grey text-white text-center">
                    <p className="header__phone text-[13px] leading-none">Hotline: (888) 4434-0006 - (888) 3918-8331</p>      
                </div>

                {/* Second strip of three */}
                <div className="header-mainstrip py-4 px-2 flex items-center">
                    <button className="header__burgerbtn mr-[0.625rem]"><Bars3Icon className="w-9 text-white" /></button>

                    {/* Link to the Home page: */}
                    <h1 className="header__logo mr-auto">
                        <a href="/" className="text-white font-light text-[1.75rem]">Digitic02</a>
                    </h1>

                    {/* User navigation menu goes here: */}
                    <nav className="header-usermenu flex items-center">
                        <a href="/compare"  className="header__userlink ml-2"><ArrowPathIcon className="text-white w-6" /></a>
                        <a href="/wishlist" className="header__userlink ml-2"><HeartIcon className="text-white w-6" /></a>

                        {/* Dropdown component for the user login/logout here: */}
                        <div className="header-userdrop-cont flex items-center">
                            <button className="header__userbtn ml-2"><UserIcon className="text-white w-6" /></button>
                        </div>

                        {/* Shopping cart component goes here: */}
                        <div className="header-cart-cont flex items-center">
                            <button className="header__cartbtn ml-2"><ShoppingCartIcon className="text-white w-6" /></button>
                        </div>                         
                    </nav>
                </div>

                {/* Last strip of the three */}
                <div className="header-bottomstrip bg-sec-bg-clr py-3 px-0 flex justify-center relative">

                    {/* Site navigation menu goes here: */}
                    <nav className="header-sitenavmenu">

                    </nav>

                    {/* Global search component goes here: */}
                    <form   className="header-searchbar-cont h-[2.25rem] flex items-center rounded-[5px] overflow-hidden"
                            action="/search" >
                        <input  type="text" 
                                name="q" 
                                id="search-query"
                                className="header__search-input h-full pr-[60px] pl-4 text-sm"
                                placeholder="Search Product Here..." />
                        <button className="header__glassbtn bg-primary-yellow py-2 px-4"
                                type="submit" >
                            <MagnifyingGlassIcon className="w-5 text-black" />
                        </button>        
                    </form> 
                </div>  
            </header>      
      </>
    );
}

export default App;



