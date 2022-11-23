import { GET_VIDEOGAMES, ERROR, FILTRARXNOMBRE, FILTRARXGENERO, ORDER, RATING, GET_DETAIL, FILTRADODEGENERO, POSTVIDEOGAME, BD_API, DELETE, BORRARCACHEDETAIL } from "../Actions/action"

const initial_state = {
    videogames: [],
    videoxpag: [],
    videofiltrados: [],
    Genres: [],
    order: "A-Z",
    Rating: "",
    detail: {},
    error: {},


}

export default function reducer(state = initial_state, action) {

    switch (action.type) {

        case GET_VIDEOGAMES:
            return { ...state, videogames: action.payload, videoxpag: action.payload }

        case FILTRARXNOMBRE:
            return { ...state, videoxpag: action.payload, videofiltrados: action.payload }


        case FILTRARXGENERO:
            return { ...state, Genres: action.payload }


        case FILTRADODEGENERO:

            const Xgeneros =
                action.payload === ""
                    ? state.videoxpag
                    : state.videoxpag.filter((e) =>
                        e.genres.includes(action.payload))
            return { ...state, videofiltrados: Xgeneros }

        case ORDER:

            const arrayfilter = state.videofiltrados.length
                ? state.videofiltrados
                : state.videoxpag

            const games =
                action.payload === "A-Z"
                    ?
                    arrayfilter.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    })
                    : arrayfilter.sort((b, a) => {
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
                videofiltrados: games
            };

        case RATING:
            const arrayrating = state.videofiltrados.length
                ? state.videofiltrados
                : state.videoxpag
            const rating =
                action.payload === "Menor"
                    ? arrayrating.sort((a, b) => {
                        if (a.rating > b.rating) {
                            return 1;
                        }
                        if (b.rating > a.rating) {
                            return -1;
                        }
                        return 0;
                    })
                    : arrayrating.sort((b, a) => {
                        if (a.rating > b.rating) {
                            return 1;
                        }
                        if (b.rating > a.rating) {
                            return -1;
                        }
                        return 0;
                    });
            return {
                ...state,
                videoxpag: rating,
                videofiltrados: rating
            };

        case GET_DETAIL:
            return {
                ...state, detail: action.payload
            }

        case BD_API:
            const todosJ = state.videogames;
            let JFiltrados =
                action.payload === "creados"
                    ? todosJ.filter((j) => j.createdInDb) :
                    action.payload === "api"
                        ? todosJ.filter((j) => !j.createdInDb) : ""

            return {
                ...state,


                videofiltrados: JFiltrados
            }

        case POSTVIDEOGAME:
            return {
                ...state, videogames: [...state.videogames, action.payload]
            }

        case DELETE:
            const deleteVideogames = state.videofiltrados.filter((v) => v.id !== action.payload)
            return { ...state, videofiltrados: deleteVideogames }

        case ERROR: return {
            ...state, error: action.payload
        }

        case BORRARCACHEDETAIL:
            return {
                ...state, detail: action.payload
            }
        default: return { ...state }
    }



}