import React from 'react';
import Logo from '../assets/logo.svg'
import { Link } from 'react-scroll';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt=''/>
        </a>
        <Link to='work' 
              smooth={true} 
              duration={500} 
              className='btn btn-lg flex justify-center items-center'>Мои работы </Link>
      </div>
    </div>
  </header>);
};

export default Header;
