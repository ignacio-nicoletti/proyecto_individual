import { GET_VIDEOGAMES, ERROR ,FILTRARXNOMBRE} from "../Actions/action"

const initial_state = {
    videogames: [],
    error: {}
}




export default function reducer(state = initial_state, action) {

    switch (action.type) {
        case GET_VIDEOGAMES:
            return { ...state, videogames: action.payload }

        case FILTRARXNOMBRE:   
        return { ...state, videogames: action.payload }

        case ERROR: return { ...state, error: action.payload }

        default: return { ...state }
    }

}