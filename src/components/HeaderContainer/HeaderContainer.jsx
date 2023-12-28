import React from "react";

import BannerContainer from "../BannerContainer/BannerContainer";
import NavBar from "../NavBar/NavBar";
import SearchInput from "../SearchInput.jsx/SearchInput";
import LoginNavBar from "../LoginNavBar/LoginNavBar";
import Visualizador from "../Visualizador/Visualizador";

export default function HeaderContainer() {
  return (
    <div className='w-full'>
     
      <Visualizador/>
      <BannerContainer/>
      <NavBar/>
      
      
    </div>
  );
}

