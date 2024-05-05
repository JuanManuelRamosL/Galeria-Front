// actions.js
import axios from 'axios';
import { SET_IMAGES,SET_IMAGES_S,SET_IMAGES_ID,FAV,REMOVE_FAV_BY_ID, COLECTION, COLECTION_G,USER,FAVBD,NAMEAUX,REMOVE_ALL_FAV,ARTIST} from './reducer';

const API_KEY = "oXoJVrAoQ3rCRQsvu3BJaHYxhqKwsPulWoQuHJag5iQ"

export const fetchImages = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
      dispatch({ type: SET_IMAGES, payload: response.data });
      
    } catch (error) {
      console.error('Error fetching imagenes:', error);
    }
  };
};


export const searchImages = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get( ` https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`);
      dispatch({ type: SET_IMAGES_S, payload: response.data });
      
    } catch (error) {
      console.error('Error fetching imagenes:', error);
    }
  };
};

export const selectImageId = (id) => {
  return async (dispatch) => {
    try {
    const response = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`)
      dispatch({ type: SET_IMAGES_ID, payload: response.data });
      // la url no anda hasta aca llega el id
    } catch (error) {
      console.error('Error fetching imagenes:', error);
    }
  };
};

export const addFav = (objeto)=>{
  return async (dispatch) => {
    try {
      //añadir el nuevo favorito
      dispatch({ type: FAV, payload: objeto });
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeFavById = (id) => {
  return (dispatch, getState) => {
    try {
      const { fav } = getState(); // Obtener la lista de favoritos actual
      const updatedFav = fav.filter(item => item.id !== id); // Filtrar los favoritos para eliminar el objeto con la ID dada
      dispatch({ type: REMOVE_FAV_BY_ID, payload: updatedFav }); // Actualizar la lista de favoritos
    } catch (error) {
      console.error(error)
    }
  };
};

export const colecciones = () => {
  return async (dispatch) => {
    try {
    const response = await axios.get(`https://api.unsplash.com/collections/?client_id=${API_KEY}`)
      dispatch({ type: COLECTION, payload: response.data });
    } catch (error) {
      console.error('Error fetching imagenes:', error);
    }
  };
};


export const colecciones_g = (id) => {
  return async (dispatch) => {
    try {
    const response = await axios.get(`https://api.unsplash.com/collections/${id}/photos?client_id=${API_KEY}`)
      dispatch({ type: COLECTION_G, payload: response.data });
    } catch (error) {
      console.error('Error fetching imagenes:', error);
    }
  };
};

export const artista = (name) => {
  return async (dispatch) => {
    try {
    const response = await axios.get(`https://api.unsplash.com/users/${name}/photos/?client_id=${API_KEY}`)
      dispatch({ type: ARTIST, payload: response.data });
      console.log(response)
    } catch (error) {
      console.error('Error fetching imagenes:', error);
    }
  };
};

export const User = (name, fav, image) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`https://galery-back.onrender.com/favs`, {
        name: name,
        favorites: fav,
        image: image
      });
      dispatch({ type: USER, payload: response.data });
    } catch (error) {
      console.error('Error fetching de usuario:', error);
    }
  };
};  


export const addFavBD = (name, fav) => {
  return async (dispatch) => {
    try {
      console.log(name)
      const response = await axios.post(`https://galery-back.onrender.com/addFavs/${name}`, {
        favorites: fav,
        name:name
      });
      dispatch({ type: FAVBD, payload: response.data });
    } catch (error) {
      console.error('Error fetching de usuario:', error);
    }
  };
};  

export const getName = (name) => {
  return async (dispatch) => {
    try {
      //http://localhost:2233 desarrollo
      const response = await axios.post(`https://galery-back.onrender.com/name/${name}`, { name });
      dispatch({ type: NAMEAUX, payload: response.data });
    } catch (error) {
      console.error('Error fetching de usuario:', error);
    }
  };
};  


export const removeAllFav = () => {
  return {
    type: REMOVE_ALL_FAV
  };
};