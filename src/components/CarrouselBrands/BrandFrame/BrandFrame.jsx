import React from 'react';
import { NavLink } from 'react-router-dom';


const BrandFrame = ({brandName, brandImage}) => {

    
    return (
     <NavLink className="flex items-center" to={"brands/" + brandName + ""}>
        <img className='w-40 h-20 object-contain 'src={brandImage} alt="" />
        </NavLink>
    );
}

export default BrandFrame;