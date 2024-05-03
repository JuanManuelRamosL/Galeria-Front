import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "./landing.css"
import {useAuth0} from "@auth0/auth0-react"
import { User } from '../redux/action';

function Landing() {
const navigate = useNavigate()
const dispatch = useDispatch();

const navegar = ()=>{
navigate("/home")
}

const {loginWithRedirect} = useAuth0()
const {user,logout} = useAuth0()
console.log(user)


useEffect(() => {
  if (user) {
    const name = user.name;
    const image = user.picture;
    dispatch(User(name, [""], image));
   
  }
}, [user]);

 

  return (
    <>
<div className='contenedor'>
  <h1>Galeria de imagenes</h1>
  {
    user ? (
      <>
       <button className='boton-i' onClick={navegar}>INICIAR</button>
      <button className='boton-s' onClick={()=> logout()}>Salir</button>
      </>
    ) : <> <button className='boton-i' onClick={()=> loginWithRedirect()}>Registrarse</button> </>
  }
  
  
</div>
    </> 
  )
}

export default Landing
