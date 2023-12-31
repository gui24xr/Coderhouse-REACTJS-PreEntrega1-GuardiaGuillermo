import React from 'react';
import { useState } from 'react';


const CheckoutForm = ({onConfirm}) => {

 

 
    function handleConfirm(event){
        event.preventDefault()
        const fields = new window.FormData(event.target)
        const dataBuyer={name: fields.get('name'),email: fields.get('email'),phone:fields.get('phone'),comments:fields.get('comment')}
        onConfirm(dataBuyer)

    }

    return (
        <div className="w-full flex items-center min-h-screen bg-gray-500 dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
                <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">FINALIZAR COMPRA...</h1>
                    <p className="text-gray-400 dark:text-gray-400">Ingresa tus dato</p>
                </div>
                <div className="m-7">
                    <form onSubmit={handleConfirm} >
                              <div className="mb-6">
                            <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre</label>
                            <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
                            <input type="email" name="email" id="email" required 
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div className="mb-6">
    
                            <label for="phone" className="text-sm text-gray-600 dark:text-gray-400">Telefono</label>
                            <input type="text" name="phone" id="phone"  required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div className="mb-6">
                            <label for="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Comentarios</label>
    
                            <textarea rows="5" name="comment" id="comment"  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Aceptar</button>
                        </div>
                        <p className="text-base text-center text-gray-400" id="result">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CheckoutForm;