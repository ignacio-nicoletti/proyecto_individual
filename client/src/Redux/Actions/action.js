import axios from 'axios'
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const ERROR = "ERROR";

export const get_videogames = () => {

    return async function (dispatch) {

        try {

            const response = await axios.get('http://localhost:3001/videogames/')
            const videogames = response.data
            dispatch({
                type: GET_VIDEOGAMES,
                payload: videogames

            })


        } catch (error) {
            dispatch({
                type: ERROR
            })
        }

    }
}