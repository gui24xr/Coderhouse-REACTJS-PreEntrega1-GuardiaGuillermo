import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getProductList } from '../../DATA/data_manager';


const CartContainer = () => {

    const {getCart,getCartAmount} = useContext(CartContext)
    const [productos,setProductos] = useState(getCart())
   
    //De los productos necesito informacion de los mismos,el tema es que me vienen en forma de promesa asique antes proceso

    if (productos.length > 0){

    return (
  

    
        <div className="my-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-b-4 border-indigo-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio Unitario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sub total
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Accion
                        </th>
                    </tr>
                </thead>
            <tbody>
            {  productos.map( item => 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                        <img src={item.productImage} className="w-16 md:w-32 max-w-10 max-h-full" alt={item.productName}/>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.productName}
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Quantity button</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <div>
                                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={item.quantity} required/>
                            </div>
                            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Quantity button</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.productPrice}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.subTotal}
                </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                    </td>
                </tr>
            )}
            </tbody>
    </table>
    <div className="py-3 pr-10 flex justify-end text-xs text-white uppercase bg-blue-600 dark:text-white">
      TOTAL $= {getCartAmount()}
    </div>
</div>
    
    );
        }
    else{
        return(
            <span>Carrito aun vacio</span>
        )
    }
}

export default CartContainer;