import "./NavBar.css";
import { useState } from "react";

import { Link } from "react-router-dom";


export default function NavBar() {
  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  // Define MobileMenu component
  const MobileMenu = () => {  
    return (
      <div className={'mobile-menu'}>
        <Link to="#home" onClick={toggleMobileMenu}>Home</Link>
        <Link to='#news' onClick={toggleMobileMenu}>Entries</Link>
        <Link to='#shop' onClick={toggleMobileMenu}>Show Entries</Link>
        <Link to='#contact' onClick={toggleMobileMenu}>Locate</Link>
      </div>
    );
  }; 

  return (
    <div className='topnav'>
      {/* Your Logo/Brand here */}
      <div className='logo' style={{ fontFamily: "Inter, sans-serif", }}>
        Mediform
      </div>

      {/* Desktop Menu, which only appears on large screens */}
      <div className='menu'>
        
        <Link to='/'>Home</Link>
        <Link to='/NewEntry'>Entries</Link>
        <Link to='/ShowEntries'>Show Entries</Link>
        <Link to='/Contact'>Locate</Link>
      </div>

      {/* This button only shows up on small screens. It is used to open the mobile menu */}
      <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
        &#8801;
      </button>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </div>
  );  
}
