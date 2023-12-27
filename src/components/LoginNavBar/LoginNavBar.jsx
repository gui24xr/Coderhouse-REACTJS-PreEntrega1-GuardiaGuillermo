import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import LogoSite from '../LogoSite/LogoSite';
import LoginWidget from '../LoginWIdget/LoginWidget';
import SearchInput from '../SearchInput.jsx/SearchInput';

const LoginNavBar = () => {
    return (
        <div className="w-full px-4 py-1 flex justify-between bg-black bg-opacity-50 ">
          <LogoSite/>
          <div className='flex flex-row gap-4'>
            <SearchInput/>
            <LoginWidget/>
            <CartWidget/>
            
          </div>
        </div>
    );
}

export default LoginNavBar;