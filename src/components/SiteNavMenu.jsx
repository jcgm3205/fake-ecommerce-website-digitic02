import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import {    FaFacebookSquare,
            FaInstagram,
            FaPinterest,
            FaTwitter,
            FaYoutube  } from "react-icons/fa";

import { miniLibrary } from '../utils/miniLib';            

export default function SiteNavMenu() {

    const lib = miniLibrary();

    return (
        <nav    className="header-sitenavmenu"
                id='navMenu' >
            <div className="header-btn-cont pr-5 flex justify-end">
                <button className='header__xmarkbtn'
                        onClick={ () => { lib.toggleClass("navMenu", "visible") } }>
                    <HiOutlineXMark className='text-white text-2xl'/>
                </button>
            </div>
            <ul className='header-linklist mb-5'>
                <li className='header-listitem'><NavLink to="/"        className='header__link'>Home</NavLink></li>
                <li className='header-listitem'><NavLink to="/news"    className='header__link'>Latest News</NavLink></li>
                <li className='header-listitem'><NavLink to="/contact" className='header__link'>Contact</NavLink></li>    
            </ul>
            <div className="header-social-container h-16 pl-6 flex items-center justify-start">
                <a href="https://www.twitter.com"   className='header__sociallink mr-[6px]'><FaTwitter        className='socialicon'/></a>
                <a href="https://www.facebook.com"  className='header__sociallink mr-[6px]'><FaFacebookSquare className='socialicon'/></a>
                <a href="https://www.pinterest.com" className='header__sociallink mr-[6px]'><FaPinterest      className='socialicon'/></a>
                <a href="https://www.instagram.com" className='header__sociallink mr-[6px]'><FaInstagram      className='socialicon'/></a>
                <a href="https://www.youtube.com"   className='header__sociallink'>         <FaYoutube        className='socialicon'/></a>    
            </div>             
        </nav>
    );
}
