import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtrarXGenero, post_videogames } from '../../Redux/Actions/action';

import style from './Form.module.css'

const Form = () => {


    const dispatch = useDispatch()

    //hacer un useefect de validation 
    useEffect(() => {
        dispatch(filtrarXGenero());
    }, [dispatch])


    const generos = useSelector(state => state.Genres)
    const initialState = {

        name: "",
        description: "",
        released: "",
        rating: "",
        platforms: "",
        genres: [],
        imageUrl: "",
    }

    const [input, setInput] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(post_videogames({
            name: input.name,
            description: input.description,
            released: input.released,
            rating: parseFloat(input.rating),//de string a number
            platforms: input.platforms,
            imageUrl: input.imageUrl,
            genres: input.genres,
            createdInDb: true
        }))
        setInput(initialState)
    }

    const validateInput = (input) => {
        const error = {}
        if (!input.name.length) error.name = "Debe ingresar un name"
        if (!input.released.length) error.released = "Debe ingresar un released"
        if (!input.name.rating) error.rating = "Debe ingresar un rating"
        if (!input.platforms.length) error.platforms = "Debe ingresar un platforms"
        if (!input.genres.length) error.genres = "Debe ingresar un genres"
        if (!input.imageUrl.length) error.imageUrl = "Debe ingresar un ImageUrl"
        if (!input.description.length) error.description = "Debe ingresar un description"

        return error
    }

    const handleChange = (event) => {

        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        validateInput(input)
    }

    const [option, setOption] = useState([])




    const optionchange = (e) => {
        setInput({
            ...input, genres: [...input.genres, e.target.value]
        })
        setOption([
            ...option, e.target.value
        ])

    }



    return (

        <div className={style.contain}>

            <h2>Crear Videojuego</h2>

            <form onSubmit={handleSubmit}>

                <div className={style.contain}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name='name' value={input.name} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">Description:</label>
                    <input type="text" name='description' value={input.description} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">ReleaseDate:</label>
                    <input type="text" name='released' value={input.released} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">Rating:</label>
                    <input type="text" name='rating' value={input.rating} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">Platforms:</label>
                    <input type="text" name='platforms' value={input.platforms} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">Genres:</label>


                    <select onChange={optionchange}>

                        {generos.map(genero => (
                            <option value={genero.name}>{genero.name}</option>

                        ))}
                    </select>
                    <input type="text" name='genres' value={option} onChange={handleChange} />


                </div>

                <div className={style.contain}>
                    <label htmlFor="">ImageUrl:</label>
                    <input type="text" name='imageUrl' value={input.imageUrl} onChange={handleChange} />
                </div>

                <button type="submit" >create</button>
            </form>

        </div>

    )
}

export default Form;