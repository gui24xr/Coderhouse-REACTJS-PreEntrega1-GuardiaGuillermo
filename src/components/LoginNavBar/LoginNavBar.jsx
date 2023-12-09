import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import LogoSite from '../LogoSite/LogoSite';
import LoginWidget from '../LoginWIdget/LoginWidget';

const LoginNavBar = () => {
    return (
        <div className="w-full px-4 py-2 flex justify-between bg-black bg-opacity-50 ">
          <LogoSite/>
          <div className='flex flex-row gap-4'>
            <LoginWidget/>
            <CartWidget/>
            
          </div>
        </div>
    );
}

export default LoginNavBar;