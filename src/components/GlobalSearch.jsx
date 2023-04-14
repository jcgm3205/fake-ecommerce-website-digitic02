import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function GlobalSearch() {
    return (
        <form   className="header-searchbar-cont h-[2.25rem] flex items-center rounded-[5px] overflow-hidden lg:absolute lg:top-[length:var(--specialtop)] lg:left-1/2 lg:translate-x-[-50%]"
                action="/search" >
            <input  type="text" 
                    name="q" 
                    id="search-query"
                    className="header__search-input h-full pr-[60px] pl-4 text-sm"
                    placeholder="Search Product Here..." />
            <button className="header__glassbtn bg-primary-yellow py-2 px-4"
                    type="submit" >
                <HiMagnifyingGlass className="w-5 text-[1.5rem] text-black" />
            </button>        
        </form>        
    );
}
