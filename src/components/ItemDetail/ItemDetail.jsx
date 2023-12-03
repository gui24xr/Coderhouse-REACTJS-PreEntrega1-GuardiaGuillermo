import React from "react";
import "./ItemDetail.styles.css";
import RateVisor from "../RateVisor/RateVisor";
import ProductPriceViewer from "../ProductPriceViewer/ProductPriceViewer";


const ItemDetail = ({ product }) => {
  return (
    <>
      <style>
        @import
        url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
      </style>

        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div >
             
                <img
                  src={product.imageSrc}
                  className="w-full relative z-10"
                  alt=""
                />
                <RateVisor rateNumber={product.rate}/>
                

                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  {product.productName}
                </h1>
                
                
              </div>
              <div>
                <ProductPriceViewer productPrice={product.productPrice} bannerStyle={false}/>
                <div className="inline-block align-bottom">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ItemDetail;
