import React from "react";
import "./CategoriesContainer.styles.css";
import { getCategoriesFromProductList } from "../../DATA/data_manager";
import { NavLink } from "react-router-dom";

export default function CategoriesContainer() {
  //Por cada categoria genero un navLink con su correspondiente url
  const categoriesList = getCategoriesFromProductList();
  console.log('cccc: ', categoriesList)

  return (
    <nav className="container-categories">
      <NavLink className="button is-black" to={"/"}>
        TODOS LOS PRODUCTOS
      </NavLink>
        {categoriesList.map((item) => (
        <NavLink className="button is-black" to={"categories/" + item + ""}>
          {item.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
}
