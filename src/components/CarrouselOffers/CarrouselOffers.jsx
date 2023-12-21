/* Este componente toma la lista de ofertas del dia con la cual genera un array de componentes para enviar a un carrouselContainer */

import React, { useState, useEffect } from "react";
import { getOfferList } from "../../DATA/data_manager";
import CarrouselContainer from "../CarrouselContainer/CarrouselContainer";
import OfferCard from "./OfferCard/OfferCard";


const CarrouselOffers = () => {
  const offersListComponents = [];

  const [productsOffers, setProductsOffers] = useState([]);

  useEffect(() => {
    //Obtengo de mi BD las ofertas existentes, y formo un array de offercard para enviar al carrousel.
    getOfferList()
      .then((response) => {
        //Con reponse tengo que armar un array de offerCards
        response.forEach((itemInOfferList) => {
          offersListComponents.push(
            <OfferCard
              key={itemInOfferList.productID}
              product={itemInOfferList}
            />
          );
        });

        setProductsOffers(offersListComponents);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <CarrouselContainer
        titleComponent={
          <div className="px-5 w-6/6 h-6 flex flex-row bg-blue-200 font-semibold text-md text-white shadow-md">
            OFERTAS DEL DIA
          </div>
        }
        itemList={productsOffers}
        containerClassName="mx-center w-5/5 my-8  flex flex-col"
        gridClassName="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 "
      />
    </>
  );
};

export default CarrouselOffers;
