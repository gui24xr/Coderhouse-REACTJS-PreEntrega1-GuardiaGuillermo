import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BranchCard = ({branchID,branchName,branchAddress,branchContact}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
      <div className="flex flex-col items-center pb-10 px-4 pt-8">
        <FaMapMarkerAlt className="w-10 h-10 mb-3" color={"red"} />
        <h5 className="mb-1 text-l font-medium text-gray-900 dark:text-white">{branchName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{branchAddress}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Contacto: {branchContact}</span>
        <div className="flex mt-4 md:mt-6">
          <NavLink to={branchID} className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver en el mapa
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
