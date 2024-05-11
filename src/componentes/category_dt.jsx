import { useEffect, useState } from "react";
import { fetchImages, selectImageId } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./category.css";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

function Category_dt() {
  const images = useSelector((state) => state.colection_g);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(images);
  }, [images]);

  const navegar = () => {
    navigate("/categorias");
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 12H6M12 5l-7 7 7 7" />
      </svg>
      <h1>Colecciones</h1>
      <div class="container" id="masonry-container">
        {images.map((photo) => (
          <div className="cards">
            <img
              src={photo.urls.regular}
              alt={photo.alt_description}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{photo.alt_description}</h5>
              <p className="card-text">Likes: {photo.likes}</p>
              <a
                href={photo.links.html}
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver foto
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category_dt;
