import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getName, removeAllFav, selectImageId } from "../redux/action";
import "./home.css";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Favs() {
  const [msg, setMsg] = useState(false);
  const fav = useSelector((state) => state.fav);
  const favBD = useSelector((state) => state.name_aux);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name_aux = useSelector((state) => state.name_aux);
  const { user } = useAuth0();

  useEffect(() => {
    if (user && user.name) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // Utilizar la información de autenticación para autenticar automáticamente al usuario
      dispatch(getName(user.name));
    }
  }, []);

  const handleDetail = (id) => {
    dispatch(selectImageId(id));
    setTimeout(() => {
      navigate("/detail");
    }, 2000);
  };

  const navegar = () => {
    navigate("/home");
  };

  //hacer funcion para eliminar todos
  const deleteAll = async () => {
    dispatch(removeAllFav());
    if (name_aux.length > 0 && name_aux[0].name) {
      //http://localhost:2233/deleteAll
      const response = await axios.post(
        `https://galery-back.onrender.com/deleteAll`,
        {
          name: name_aux[0].name,
        }
      );
      console.log(response.data);
      setMsg(true);
    } else {
      console.error("No se encontró el nombre del usuario en name_aux");
    }
  };

  return (
    <>
      <svg
        className="volver"
        onClick={navegar}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H6M12 5l-7 7 7 7" />
      </svg>
      <h1 className="titulo">Favoritos</h1>
      <button onClick={deleteAll}>Eliminar todos</button>
      <div className="container">
        {fav && fav.length > 0
          ? fav.map((img) => (
              <img
                key={img.id}
                onClick={() => handleDetail(img.id)}
                src={img.urls.regular}
                alt={img.alt_description}
                className="img"
              />
            ))
          : favBD.map((user) =>
              user.favorites
                .filter((img) => img.trim() !== "")
                .map((img, index) => (
                  <>
                    <img
                      key={index}
                      onClick={() => handleDetail(user.id)}
                      src={img}
                      alt={`Favorite ${index}`}
                      className="img"
                    />
                  </>
                ))
            )}
        {/*   {msg ? (
          <h1 className='msg'>Imagenes Eliminadas Exitosamente</h1>
        ):null} */}
      </div>
    </>
  );
}

export default Favs;
