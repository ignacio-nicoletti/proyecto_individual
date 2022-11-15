import axios from 'axios'

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const ERROR = "ERROR";

export const POST_VIDEOGAMES = "POST_VIDEOGAMES";
export const FILTRARXNOMBRE= "FILTRAXNOMBRE";

export const get_videogames = () => {

    return async function (dispatch) {

        try {

            const response = await axios.get('http://localhost:3001/videogames')
            const videogames = response.data
            console.log(videogames);
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
         
            dispatch({
                type:FILTRARXNOMBRE,
                payload: videogames

            })


        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }

    }

}



export const post_videogames = () => {







}
