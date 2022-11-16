import { GET_VIDEOGAMES, ERROR, FILTRARXNOMBRE, FILTRARXGENERO, SETEARESTADO, ORDER } from "../Actions/action"

const initial_state = {
    videogames: [],
    videoxpag: [],
    Genres: [],
    error: {},
    estado: "Videojuego",
    order: "A-Z",

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




        case ORDER:
            const games =
                action.payload==="A-Z"
                    ? state.videoxpag.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    })
                    : state.videoxpag.sort((b, a) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    });
            return {
                ...state,
                videoxpag: games,
            };


        case ERROR: return { ...state, error: action.payload }





        default: return { ...state }
    }

}