// reducers.js
export const SET_IMAGES = 'SET_IMAGES';
export const SET_IMAGES_S="SET_IMAGES_S"
export const SET_IMAGES_ID="SET_IMAGES_ID"
export const FAV = "FAV"
export const REMOVE_FAV_BY_ID = 'REMOVE_FAV_BY_ID'; 
export const COLECTION = "COLECTION";
export const COLECTION_G = "COLECTION_G"
export const USER = "USER"
export const FAVBD = "FAVBD"
export const NAMEAUX = "NAMEAUX"
export const REMOVE_ALL_FAV = 'REMOVE_ALL_FAV';
export const ARTIST = "ARTIST"

const initialState = {
  images: [],
  imagesS:[],
  imageID:[],
  fav:[],
  colection:[],
  colection_g:[],
  user:[],
  favBD:[],
  name_aux:[],
  artista:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      }; case SET_IMAGES_S:
      return {
        ...state,
        imagesS: action.payload,
      };case SET_IMAGES_ID:
      return {
        ...state,
        imageID: action.payload,
      };case FAV:
      return {
        ...state,
        fav: [...state.fav, action.payload],
      }; case REMOVE_FAV_BY_ID: // Nuevo caso de acción para eliminar favorito por ID
      return {
        ...state,
        fav: action.payload, // Actualiza el estado fav con la nueva lista de favoritos
      }; case COLECTION: // Nuevo caso de acción para eliminar favorito por ID
      return {
        ...state,
        colection: action.payload, // Actualiza el estado fav con la nueva lista de favoritos
      };case COLECTION_G:
      return {
        ...state,
        colection_g: action.payload,
      };case USER:
      return {
        ...state,
        user: action.payload,
      };case FAVBD:
      return {
        ...state,
        favBD: action.payload,
      };case NAMEAUX:
      return {
        ...state,
        name_aux: action.payload,
      };
      case REMOVE_ALL_FAV:
      return {
        ...state,
        fav: [] // Elimina todos los favoritos
      };;
      case ARTIST:
      return {
        ...state,
        artista: action.payload, // Elimina todos los favoritos
      };
      
    default:
      return state;
  }
  
};

export default rootReducer;
