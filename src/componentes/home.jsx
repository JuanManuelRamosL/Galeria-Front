import { useEffect, useState } from "react";
import { fetchImages, getName, selectImageId } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const [llave, setLlave] = useState(false);
  const images = useSelector((state) => state.images);
  const imagesS = useSelector((state) => state.imagesS);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useAuth0();
  useEffect(() => {
    dispatch(getName(user.name));
  }, []);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  // console.log(images)
  // console.log(imagesS)

  const handleDetail = (id) => {
    console.log(id);
    dispatch(selectImageId(id));
    setTimeout(() => {
      navigate("/detail");
    }, 340);
    //
  };

  return (
    <>
      <Nav setLlave={setLlave} />
      {!llave ? (
        <div class="container" id="masonry-container">
          {images.map((img) => (
            <img
              key={img.id}
              onClick={() => handleDetail(img.id)}
              src={img.urls.regular}
              className="img"
            />
          ))}
        </div>
      ) : (
        <div className="container" id="masonry-container">
          {imagesS.results.map((img) => (
            <img
              key={img.id}
              src={img.urls.regular}
              onClick={() => handleDetail(img.id)}
              className="img"
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
