import React, { useEffect, useState } from "react";
import "./ProductCard.styles.css";
import RateVisor from "../RateVisor/RateVisor";
import { PiHeartStraightLight } from "react-icons/pi";
import { BiCartAdd } from "react-icons/bi";
import { getProductByID } from "../../DATA/data_manager";
import { NavLink } from "react-router-dom";
import ProductPriceViewer from "../ProductPriceViewer/ProductPriceViewer";
//import 'bulma/css/bulma.min.css'


function ProductCard({ productID }) {

//Puedo recibir parametros ya sea por componente o por url
   
  const [product, setProduct] = useState(getProductByID(productID));

  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src={product.imageSrc} alt="" />
      </div>
      <div className="product-details">
        <h4>
           <NavLink 
           to={'./itemdetail/'+product.productID}
           className="product-title">{product.productName}</NavLink>
        </h4>

        <RateVisor rateNumber={product.rate} />
        <ProductPriceViewer productPrice={product.productPrice}/>
    

        <div className="product-links-container">
          <PiHeartStraightLight
            size={28}
            color={"#4169e1"}
            className="product-links-icon"
          />
          <BiCartAdd
            size={30}
            color={"#4169e1"}
            className="product-links-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
