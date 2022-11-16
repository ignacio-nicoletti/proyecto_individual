import { GET_VIDEOGAMES, ERROR, FILTRARXNOMBRE, FILTRARXGENERO, SETEARESTADO } from "../Actions/action"

const initial_state = {
    videogames: [],
    videoxpag: [],
    Genres: [],
    error: {},
    estado: "Videojuego"
}




export default function reducer(state = initial_state, action) {

    switch (action.type) {
        case GET_VIDEOGAMES:
            return { ...state, videogames: action.payload, videoxpag: action.payload }

        case FILTRARXNOMBRE:
            return { ...state, videoxpag: action.payload }


        case FILTRARXGENERO:
            return { ...state, Genres: action.payload }


        case SETEARESTADO:
            return { ...state, estado: action.payload }

        case ERROR: return { ...state, error: action.payload }



        default: return { ...state }
    }

}