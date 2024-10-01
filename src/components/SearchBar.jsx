import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarritoContext from './../context/CarritoContext';
import './TablaFila.scss';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useContext(CarritoContext);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar/${searchQuery}`);
    }
  };

  return (
    <div className="search-bar">
      {/* Logo Container */}
      <div className="search-bar__logo-container">
        <img className="logo-carro-1" src="desktop-solid.svg" alt="LAPTOZONE" />
      </div>

      {/* Search Form */}
      <form className="search-bar__form-container" onSubmit={handleSearchSubmit}>
        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input type="submit" className="search-bar__form-submit" value="Buscar" />
      </form>

      {/* Cart Container */}
      <div className="search-bar__carrito-container">
        <Link to="/carrito">
          <img className="logo-carro" src="cart-shopping-solid.svg" alt="Carrito" />
          <span className="carrito-count">{cartCount}</span>
        </Link>
      </div>

      {/* Menu Toggle */}
      <div className="menu-toggle">
        <label htmlFor="menu" className="menu-toggle__label">
          <span className="menu-toggle__top-bread"></span>
          <span className="menu-toggle__meat"></span>
          <span className="menu-toggle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
