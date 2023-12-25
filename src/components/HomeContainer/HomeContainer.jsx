import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import CarrouselOffers from "../CarrouselOffers/CarrouselOffers";
import CarrouselBrands from "../CarrouselBrands/CarrouselBrands";
import CarrouselBranchs from "../CarrouselBranchs/CarrouselBranchs";
import Visualizador from "../Visualizador/Visualizador";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { generarValorAleatorio } from "../../global/funcions";

export default function HomeContainer() {
  
  const datosContexto = useContext(CartContext)
  
  return (
    <div className="flex flex-col">
      
      <span>{datosContexto.a}</span>
      <span>{datosContexto.isInCart(24)}</span>
      <button onClick={()=> datosContexto.addItem(generarValorAleatorio(1,100),100)}>Agregar</button>
      <button onClick={()=> datosContexto.viewCart()}>Ver Carrito</button>
    
      <CarrouselOffers />
      <CarrouselBrands />
      <CarrouselBranchs />
      <HomeBanner/>

    </div>
  );
}
