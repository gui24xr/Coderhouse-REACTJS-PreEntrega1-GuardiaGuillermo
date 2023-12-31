import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getProductList } from "../../DATA/data_manager";

const CartContainer = ({productos}) => {
 
  console.log('CARRO: ', productos)
  //De los productos necesito informacion de los mismos,el tema es que me vienen en forma de promesa asique antes proceso

  if (productos.length > 0) {
    return (
      <div className="flex flex-row justify-center">
        <div className="my-9 h-dvh first-letter:my-10 max-h-15 relative overflow-x-auto shadow-md sm:rounded-lg">
          <ul className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-b-4 border-indigo-500 ">
           
              {productos.map((item) => (
                <li className="flex flex-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <div className="p-4">
                    <img
                      src={item.productImage}
                      className="w-16 md:w-32 max-w-20 max-h-full"
                      alt={item.productName}
                    />
                  </div>
                  <div className="flex flex-col px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <span>{item.productName}</span>
                    <span>
                      Talle: {item.size != null ? item.size.toUpperCase() : "-"}
                    </span>
                    <div className="mt-3 pl-1 flex flex-col bg-blue-50">
                      <span>
                        {" "}
                        {item.productPrice +
                          " x " +
                          item.quantity +
                          " unidades=$" +
                          item.subTotal}{" "}
                      </span>
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-red-500 hover:underline"
                      >
                        Eliminar
                      </a>
                    </div>
                  </div>
                </li>
              ))}
           
          </ul>
        </div>
      </div>
    );
  } else {
    return <span>Carrito aun vacio</span>;
  }
};

export default CartContainer;
