import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import CarrouselOffers from "../CarrouselOffers/CarrouselOffers";
import CarrouselBrands from "../CarrouselBrands/CarrouselBrands";
import CarrouselBranchs from "../CarrouselBranchs/CarrouselBranchs";
import Visualizador from "../Visualizador/Visualizador";



export default function HomeContainer() {
  

  
  return (
    <div className="flex flex-col">
      <Visualizador/>
      <CarrouselOffers />
      <CarrouselBrands />
      <CarrouselBranchs />
      <HomeBanner/>

    </div>
  );
}
