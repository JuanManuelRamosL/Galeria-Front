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
    navigate("/home");
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
      <div onClick={cl}>
        Artista :{artist[0]?.user.name}{" "}
        <img src={artist[0]?.user.profile_image.medium} alt="" />
      </div>
      <p>Biografia: {artist[0].user.bio}</p>
      <p>Pais :{artist[0]?.user.location}</p>
      <p>Total de Likes: {artist[0]?.user.total_likes}</p>
      <p>Total de Likes: {artist[0]?.user.total_photos}</p>

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
