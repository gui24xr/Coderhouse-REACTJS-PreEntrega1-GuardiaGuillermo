import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdSportsMotorsports } from "react-icons/md";

const LogoSite = () => {
    return (
        <NavLink className='flex flex-row' to={"/"}>
           <MdSportsMotorsports className= 'underline decoration-4' color='white' size={40}/>
           <div className="text-blue-600/100 text-2xl font-bold text-shadow-lg underline decoration-4">
            INSIDE<span className="text-3xl font-bold text-shadow-lg text-white indent-8 drop-shadow-2xl">HELMET</span>
         </div>
        </NavLink>
    );
}

export default LogoSite;