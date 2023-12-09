import React from "react";
import '../NavBar/NavBar.styles.css'
import { NavLink } from "react-router-dom";

//Componentes
import SearchInput from "./SearchInput.jsx/SearchInput";
import CartWidget from "../CartWidget/CartWidget";
import LoginWidget from "../LoginWIdget/LoginWidget";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";


import { getCategoriesFromProductList } from "../../DATA/data_manager";




export default function NavBar() {
   //Es un array con la lista de todas las categorias existentes
   const categoriesList = getCategoriesFromProductList();

  return (
    <nav className=" px-2 bg-black shadow-md rounded-b-lg">
               

            
              <NavLink className="mx-1 px-4 bg-blue-600 text-lg font-semibold text-white rounded-bl-lg hover:text-amber-300" to={"categories/todos"}>
                TODOS LOS PRODUCTOS
              </NavLink>
            
              {categoriesList.map((item) => (
              <NavLink className="mx-1 px-4 bg-blue-600 text-lg font-semibold text-white rounded-bl-lg hover:text-amber-300" to={"categories/" + item + ""}>
              {item.toUpperCase()}
              </NavLink>
          ))}
           
          
       
      </nav>
  );
}


/*


export default function NavBar() {
  const sectionButtons = [
    { category: "cascos", onPressActionAction: () => alert("Ir a cascos") },
    { category: "chaquetas", onPressAction: () => alert("Ir a chaquetas") },
    { category: "guantes", onPressAction: () => alert("Ir a guantes") },
    { category: "botas", onPressAction: () => alert("Ir a botas") },
    { category: "accesorios", onPressAction: () => alert("Ir a accesorios") },
    { category: "pantalones", onPressAction: () => alert("Ir a pantalones") },
    {
      category: "protecciones",
      onPressAction: () => alert("Ir a protecciones"),
    },
    { category: "casual", onPressAction: () => alert("Ir a casual") },
    { category: "rebajas %", onPressAction: () => alert("Ir a rebajas") },
  ];

  //Es un array con la lista de todas las categorias existentes
  const categoriesList = getCategoriesFromProductList()

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <SearchInput />

      <div className="container is-widescreen">
        {sectionButtons.map((item) => (
          <button className="button is-black" onClick={item.onPressAction}>
            {item.category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="container is-widescreen">
        {categoriesList.map((item) => (
          <button className="button is-black" >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      <CartWidget />
    </nav>
  );
}*/


/*
export default function NavBar() {
   //Es un array con la lista de todas las categorias existentes


  return (
    <nav className="container-nav" >
     <div className='container-search'>
      <SearchInput/>
      <LoginWidget/>
      <CartWidget/>
      
     </div>
     <div className='container-categories'>
      <CategoriesContainer/>
     </div>
    </nav>
  );
}

*/