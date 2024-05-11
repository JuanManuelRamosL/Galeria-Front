import { useEffect, useState } from "react";
import "./user.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Usuario() {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [usuario, setUsuario] = useState(null);
  const [verificado, setverificado] = useState(null);
  const navegar = () => {
    navigate("/home");
  };
  useEffect(() => {
    if (user) {
      localStorage.setItem("userPicture", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const storedUserPicture = localStorage.getItem("userPicture");
    if (storedUserPicture) {
      const userData = JSON.parse(storedUserPicture);
      // Puedes hacer algo con los datos del usuario aquí, como mostrarlos en un componente
      console.log("usuario recuperado:", userData);
      setUsuario(userData);
      setverificado(userData.email_verified);
    }
  }, []);

  console.log(usuario);
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
      {user && (
        <div className="container-user">
          <div className="cardd">
            {usuario && (
              <>
                <img src={usuario.picture} className="foto-user" alt="User" />
                <span className="number">{usuario.email}</span>
                <span className="owner">{usuario.name}</span>
                {verificado ? <span>Email verificado</span> : null}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Usuario;
