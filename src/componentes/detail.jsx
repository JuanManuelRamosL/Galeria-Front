import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./detail.css"
import { addFav, addFavBD, getName, removeFavById } from '../redux/action';
import {useAuth0} from "@auth0/auth0-react"
import axios from 'axios';

function Detail() {
  const [isFav,setIsFav] = useState(false)
  const imageID = useSelector(state => state.imageID);
  const fav = useSelector(state => state.fav)
  const favBD = useSelector(state => state.favBD)
  const name_aux = useSelector(state => state.name_aux)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useAuth0()

  console.log(imageID)
const navegar = ()=>{
navigate("/home")
}

useEffect(()=>{
  
dispatch(getName(user.name))
},[])

const handleFav = ()=>{
  dispatch(addFav(imageID));
  //dispatch addfav a base de datos
  
  const fav = imageID.urls.regular;
  console.log(fav)
  dispatch(addFavBD(name_aux[0].name,fav))  
  setIsFav(true)
}

const eliminar = async()=>{
  const del = imageID.urls.regular.toString();

  dispatch(removeFavById(imageID.id))
  //http://localhost:2233/delete
  const response = await axios.post(`https://galery-back.onrender.com/delete`,{
    "name":name_aux[0].name,
    "favorites": del
  });
  setIsFav(false)
      console.log(response.data)
}
//console log para ver si se guardo bien el objeto
useEffect(()=>{
console.log(fav)
console.log(favBD)
},[fav,favBD])

  return (
    <>
    <svg
    className='volver'
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
  <div className="container_d" id="">
         <h1> {imageID.alt_description}</h1>
            <img key={imageID.id} src={imageID.urls.regular} className='img' />
            <p>{imageID.description}</p>
            <section>
              <small className='likes'>Likes: {imageID.likes}</small>
              <small className='fecha'>Fecha: {imageID.updated_at}</small>
              <small className='usuario'>Usuario: {imageID.user.instagram_username}</small>
              { !isFav ? (
              <svg className='svg' onClick={handleFav} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
              </svg>
              ) : (<svg onClick={eliminar} className='svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"></path>
              </svg>)
              }
              </section>
      </div>
    </>
  )
}

export default Detail