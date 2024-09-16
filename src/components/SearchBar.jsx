import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SearchBar.scss';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar/${searchQuery}`);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <img className="logo-carro-1" src="desktop-solid.svg" width="200" height="70" alt="LAPTOZONE"/>
      </div>
      <form action="#" className="search-bar__form-container" onSubmit={handleSearchSubmit}>
        <label htmlFor="busqueda" className="search-bar__form-label">
          Buscar
        </label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>
      <div className="search-bar__carrito-container">
  <Link to="/carrito">
    <img className="logo-carro" src="cart-shopping-solid.svg" alt="Añadir al carrito" width="40" height="40" />
  </Link>
</div>

      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;