import React from "react";
//import "./HeaderContainer.styles.css";
import BannerContainer from "../BannerContainer/BannerContainer";
import NavBar from "../NavBar/NavBar";
import SearchInput from "../SearchInput.jsx/SearchInput";
import LoginNavBar from "../LoginNavBar/LoginNavBar";

export default function HeaderContainer() {
  return (
    <div className='w-full'>
     
    
      <BannerContainer/>
      <NavBar/>
      <SearchInput/>
      
    </div>
  );
}

