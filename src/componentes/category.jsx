import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colecciones, colecciones_g } from '../redux/action';
import "./category.css"
import { useNavigate } from 'react-router-dom';




function Category() {
    const dispatch = useDispatch()
    const colection = useSelector(state => state.colection);
    const colection_g = useSelector(state => state.colection_g);
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(colecciones())
    },[dispatch])

    const navegar = ()=>{
        navigate("/home")
        }
        useEffect(()=>{
          console.log(colection)
        },[colection])

        const handleDetail = (id)=>{
          dispatch(colecciones_g(id)) //hay que ver si le llega el id
          setTimeout(() => {
            navigate("/categorias_d")
          }, 2000);
        }

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
  {colection ? (
    <div className='card-container'>
 {colection.map(img => (
    <div key={img.id} className='card'>
        <h1 className='titulo'>{img.title}</h1>
        <p className='cantidad'>Imagenes: {img.total_photos}</p>
        <img key={img.id} onClick={() => handleDetail(img.id)} src={img.cover_photo.urls.regular} className='imagen-c' />
        </div>
     ))} 
    </div>
   
  ):<></>}
    </>
  )
}

export default Category
