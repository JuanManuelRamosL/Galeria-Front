import { useState } from "react";
import "./nav.css";
import { useDispatch } from "react-redux";
import { searchImages } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Nav({ setLlave }) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      dispatch(searchImages(searchQuery));
      setTimeout(() => {
        setLlave(true);
      }, 2000);
    }
  };

  const navFav = () => {
    navigate("/favs");
    setIsMobileMenuOpen(false);
  };

  const navCat = () => {
    navigate("/categorias");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleUserNav = () => {
    navigate("/user");
  };

  const navNosotros = () => {
    navigate("/nosotros ");
  };
  return (
    <>
      <nav className="">
        <div
          className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <i className="fa-solid fa-bars icono-bars"></i>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-hexagon-letter-j"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="logo"
          onClick={navNosotros}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
          <path d="M10 8h4v6a2 2 0 1 1 -4 0" />
        </svg>
        <ul className={`container-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li className="links-nav hidden-mobile" onClick={navCat}>
            Colecciones
          </li>
          <li className="links-nav hidden-mobile" onClick={navFav}>
            Favoritos
          </li>
        </ul>
        <div className="container-buscador">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="  Buscar"
              value={searchQuery}
              onChange={handleInputChange}
              className="buscador"
            />
            <button type="submit" className="cont-btn">
              <i class="fa-solid fa-magnifying-glass button-buscar"></i>
            </button>
          </form>
        </div>

        <div className="container-img-user">
          {user.picture && (
            <img
              className="img-user"
              onClick={handleUserNav}
              src={user.picture}
              alt=""
            />
          )}
        </div>
      </nav>
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={navCat}>Colecciones</li>
          <li onClick={navFav}>Favoritos</li>
          <li onClick={navNosotros}>
            Sobre Nosotros
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-hexagon-letter-j"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="logo-responsive"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
              <path d="M10 8h4v6a2 2 0 1 1 -4 0" />
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
