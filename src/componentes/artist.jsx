import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./artist.css";
import { artista, getName } from "../redux/action";

function Artist() {
  const artist = useSelector((state) => state.artista);
  const imageID = useSelector((state) => state.imageID);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navegar = () => {
    navigate("/detail");
  };

  const name = imageID.user.username;

  useEffect(() => {
    dispatch(artista(name));
  }, []);

  const cl = () => {
    console.log(artist);
  };

  return (
    <>
      {" "}
      <svg
        className="volver"
        onClick={navegar}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 12H6M12 5l-7 7 7 7" />
      </svg>
      <div class="notification">
        <div class="notiglow"></div>
        <div class="notiborderglow"></div>
        <div class="notititle">Artista :{artist[0]?.user.name} </div>
        <div class="notibody">
          <img src={artist[0]?.user.profile_image.medium} alt="" />
          <p>Biografia: {artist[0]?.user.bio}</p>
          <p>Pais :{artist[0]?.user.location}</p>
          <p>Total de Likes: {artist[0]?.user.total_likes}</p>
          <p>Total de Likes: {artist[0]?.user.total_photos}</p>
        </div>
      </div>
      <div className="container">
        {artist.map((item) => (
          <div key={item.id} className="artist-card">
            <img src={item.urls.small} alt="Artista" className="img" />
            <small>{item.likes} ❤️</small>
            <div></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Artist;
