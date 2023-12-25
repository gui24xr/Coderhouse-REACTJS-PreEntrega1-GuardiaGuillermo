import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemDetailContext } from "../../context/ItemDetailContext";

const ItemCountSelector = () => {

    const contextoItemDetail = useContext(ItemDetailContext)
    const contextoCarrito = useContext(CartContext)
    const [selectedQuantity, setSeletectedQuantity] = useState();

    const addQuantity = () => {
        if (contextoItemDetail.availableStock) {
            //Lo trabo con esta condicion por si viene un undefined de parametro
            contextoItemDetail.setSelectedQuantity(selectedQuantity + 1)
            selectedQuantity < contextoItemDetail.availableStock &&
                setSeletectedQuantity(selectedQuantity + 1);
        }
    };

    const decQuantity = () => {
        if (contextoItemDetail.availableStock) {
            //Lo trabo con esta condicion por si viene un undefined de parametro
            contextoItemDetail.setSelectedQuantity(selectedQuantity - 1)
            selectedQuantity > 1 && setSeletectedQuantity(selectedQuantity - 1);
        }
    };

    //Este use effect es para que cada vez que venga una cantidad de stock diferente se resetee el contador
    useEffect(()=>{
        
        //aCTUALIZO TANTo la variable local como la cantidad de la nube
        contextoItemDetail.setSelectedQuantity(1)
        setSeletectedQuantity(1)}
                
    ,[contextoItemDetail.availableStock])

    return (
        <div>
            <div  className="flex flex-row bg-white border border-gray-200 rounded-lg dark:bg-slate-700 dark:border-gray-700" data-hs-input-number>
                <div className="w-full flex justify-between items-center gap-x-1">
                    <div className="grow py-1 px-3">
                        <input  className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="number"
                                value={selectedQuantity}
                                data-hs-input-number-input
                        />
                    </div>
                    <div className="flex items-center -gap-y-px divide-x divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                        <button   onClick={() => decQuantity()} type="button" 
                            className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            data-hs-input-number-decrement
                        >
                            <svg
                                className="flex-shrink-0 w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M5 12h14" />
                            </svg>
                        </button>
                        <button
                            onClick={() => addQuantity()}
                            type="button"
                            className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            data-hs-input-number-increment
                        >
                            <svg
                                className="flex-shrink-0 w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-2/2 px-2">
                      <button className="flex flex-row my-4 w-full bg-fuchsia-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                      onClick={()=>contextoItemDetail.selectedQuantity>=1 && contextoCarrito.addItem(contextoItemDetail.selectedProductID,contextoItemDetail.selectedQuantity,contextoItemDetail.selectedSize)}
                      >Añadir
                      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
                      </button>
                  </div>
            </div>
            
            <span className="mt-1 grid justify-items-center text-center center font-semibold text-green-500 dark:text-gray-300">{' ' + contextoItemDetail.availableStock + ' unidades disponibles'}</span>
            
        </div>
    );
};

export default ItemCountSelector;

/*

<form classNameNameName="w-full flex flex-row mx-auto">
            
<input type="number" id="number-input" aria-describedby="helper-text-explanation" classNameNameName=" my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresar cantidad" required/>
<span classNameNameName="text-center center font-bold text-green-500 dark:text-gray-300">{' ' + contexto.availableStock + ' unidades disponibles'}</span>
</form>

*/
