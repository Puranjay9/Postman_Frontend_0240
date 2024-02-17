import React, { useState, useEffect } from 'react';
import './nav.css';

function Nav() {
    const [show ,handleShow] = useState(false);

    const Navbartransition = () => {
        if(window.scrollY > 150) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", Navbartransition);
        return () => window.removeEventListener("scroll", Navbartransition);
    }, []);
    
  return (
   <div className={`Nav ${show && 'Nav_blue'}`}>
    <div className='nav_cont'>
        <h1 className='title'>StreamBinge</h1>
        <button className={`profile ${show &&'prof_blue'}`}>P</button>
    </div>
   </div>
  );
}

export default Nav;
