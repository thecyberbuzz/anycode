import React, { useState, useEffect } from 'react';
import Hamburger from './Hamburger';




const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isToggled, setIsToggled]= useState(false);

  const toggleClass =()=>{
    setIsToggled(prevState=> !prevState);
};


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = 50;
      setIsSticky(scrollPosition > stickyThreshold);
      console.log('stcky')
    };
      
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isSticky ? 'sticky' : null}>
      
        <div className={isSticky ? 'nav-content-sticky':'nav-content'}>
          <ul className='nav-items1'>
            <li onClick={toggleClass} >Hamburger </li>
{/* <li className={isToggled? 'hamburger':'hide'}><Hamburger /></li> */}
            <li>
              Uber <strong>Eats</strong>
            </li>
          </ul>
        
          <ul className={isSticky?'nav-items3-sticky':'hide'}>
          <li>  <input  type="text" placeholder='Enter delivery address' /></li>
          </ul>
          <ul className='nav-items2'>
            <li>
              
              <button className='nav-buttons' id='logIn'>
                Log In
              </button>
            </li>
            <li>
              
              <button className='nav-buttons' id='signUp'>
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
