import React, { useState, useEffect } from "react";
import LoginNavBar from "../LoginNavBar/LoginNavBar";
import NavBar from "../NavBar/NavBar";

import {
  getDatoAleatoriaArray,
  generarValorAleatorio,
} from "../../global/funcions";

import { useApi } from "../../hooks/useApi";

const BannerContainer = () => {
  const urlPicsCBR =
    "https://api.unsplash.com/search/photos?query=motorbikes&per_page=50&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
  const { loading, data } = useApi(urlPicsCBR);

  
  
  const defaultImage =
    "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwxfHxtb3RvcmJpa2VzfGVufDB8fHx8MTcwMTk1ODM0OXww&ixlib=rb-4.0.3&q=80&w=1080";

  const [picForBanner, setPicForBanner] = useState("url(" + defaultImage + ")");

  const getPicForBanner = () => {
    
    if (data !== undefined) {
      //console.log("datas: ", data.data.results[0].urls.regular);
    const selectedPic = data.data.results[generarValorAleatorio(0, data.data.results.length - 1)].urls.regular
      setPicForBanner(
        "url(" + selectedPic + ")"
      );
     
    }
  };


  useEffect(()=>{
    getPicForBanner()
  },[])

  return (
    <div className="w-full bg-cover bg-center flex flex-col content-between" style={{height: "14rem",backgroundImage: picForBanner, }}>
      <LoginNavBar/>
 
    </div>
  );
};

export default BannerContainer;
