import axios from 'axios'
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const ERROR = "ERROR";
export const POST_VIDEOGAMES = "POST_VIDEOGAMES";
export const FILTRARXNOMBRE = "FILTRAXNOMBRE";
export const FILTRARXGENERO = "FILTRARXGENERO";
export const ORDER = "ORDER";
export const RATING = "RATING";
export const GET_DETAIL = "GET_DETAIL";
export const FILTRADODEGENERO = "FILTRADODEGENERO";
export const POSTVIDEOGAME = "POSTVIDEOGAME";
export const BD_API = "BD_API";

export const get_videogames = () => {

    return async function (dispatch) {

        try {

            const response = await axios.get('http://localhost:3001/videogames')
            const videogames = response.data
            dispatch({
                type: GET_VIDEOGAMES,
                payload: videogames

            })


        } catch (error) {
            console.log(error)
            dispatch({
                type: ERROR,
                payload: error
            })
        }

    }
}

export const filtrarXVideogame = (name) => {
    return async function (dispatch) {

        try {

            const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            const videogames = response.data

            return dispatch({
                type: FILTRARXNOMBRE,
                payload: videogames,

            })


        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            })
        }

    }

}

export const filtrarXGenero = () => {
    return async function (dispatch) {

        try {

            const response = await axios.get('http://localhost:3001/genre')
            const genres = response.data

            dispatch({
                type: FILTRARXGENERO,
                payload: genres,

            })


        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }

    }

}

export const setearOrder = (value) => {
    return {
        type: ORDER,
        payload: value,
    };
}

export const setearRating = (value) => {

    return {
        type: RATING,
        payload: value,
    };

}

export const setearBD_api = (value) => {

    return {
        type: BD_API,
        payload: value
    }
}

export const get_detail = (id) => {
    return async function (dispatch) {
        try {

            const response = await axios.get(`http://localhost:3001/videogame/${id}`)
            const detail = response.data

            return dispatch({
                type: GET_DETAIL,
                payload: detail[0]

            })

        } catch (error) {

            return dispatch({
                type: ERROR,
                payload: error
            })
        }

    }
}

export const filtradoDeGenero = (value) => {
    return {
        type: FILTRADODEGENERO,
        payload: value,
    }
}

export const post_videogames = (input) => {
    return async function (dispatch) {
        try {
            const juegoC = await axios.post(`http://localhost:3001/videogames`, input)
            return dispatch({
                type: POSTVIDEOGAME,
                payload: juegoC.data,
            })

        } catch (error) {
            console.log(error);
            return dispatch({
                type: ERROR,
                payload: error

            })
        }


    }
}
