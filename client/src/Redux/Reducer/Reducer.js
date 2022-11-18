import { GET_VIDEOGAMES, ERROR, FILTRARXNOMBRE, FILTRARXGENERO, SETEARESTADO, ORDER, RATING, GET_DETAIL, FILTRADODEGENERO } from "../Actions/action"

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
                action.payload === "" ?
                    state.videoxpag : state.videoxpag.filter((e) => e.genres.includes(action.payload))
            return { ...state, videofiltrados: Xgeneros }


        case SETEARESTADO:
            return { ...state, estado: action.payload }

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

        case ERROR: return { ...state, error: action.payload }

        default: return { ...state }
    }

}