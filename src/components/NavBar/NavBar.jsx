import React from "react";
import "bulma/css/bulma.min.css";

//Componentes
import SearchInput from "./SearchInput.jsx/SearchInput";
import CartWidget from "./CartWidget/CartWidget";

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

      <CartWidget />
    </nav>
  );
}
