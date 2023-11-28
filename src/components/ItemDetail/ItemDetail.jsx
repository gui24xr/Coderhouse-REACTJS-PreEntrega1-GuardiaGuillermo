import React from "react";
import "./itemDetail.styles.css";

//import { DATA_PRODUCTS } from '../../DATA/product_data';

const ItemDetail = (props) => {
  console.log("tttt", props.imageSrc);
  console.log("tttt", props.stock.sizeXS);
  return (
    <div className="container">
      <div className="container-image">
        <img src={props.imageSrc} className="image" />
      </div>
      <div className="container-details">
        <h3>{props.productName}</h3>
        <p>Rate:{props.rate}</p>
        <p>Rate:{props.description}</p>
        <p>{props.stock.sizeXS}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
