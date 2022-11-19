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



    const platforms = ["PC", "PlayStation 3", "PlayStation 4", "PlayStation 5", "macOS", "Linux", "Xbox360", "Android", "Nintendo Switch", "iOS", "Xbox One", "Xbox Series S/X"]



    const initialState = {

        name: "",
        description: "",
        released: "",
        rating: "",
        platforms: [],
        genres: [],
        imageUrl: "",
    }
    const generos = useSelector(state => state.Genres)//hago un mapeo para las opciones


    const [input, setInput] = useState(initialState)

    const [option, setOption] = useState([])//generos

    const [option2, setOption2] = useState([])//Platforms



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
        alert("juego creado con exito")
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

    const optionchange = (e) => {
        setInput({
            ...input, genres: [...input.genres, e.target.value]
        })
        setOption([
            ...option, e.target.value
        ])

    }

    const optionchangeP = (e) => {

        setInput({
            ...input, platforms: [...input.platforms, e.target.value]
        })
        setOption2([
            ...option2, e.target.value
        ])



    }



    return (

        <div className={style.contain}>

            <h2>Crear Videojuego</h2>

            <form onSubmit={handleSubmit} className={style.formulario}>

                <div className={style.contain_div}>
                    <label htmlFor="" className={style.labels}>Name:</label>
                    <input type="text" name='name' value={input.name} onChange={handleChange} />
                </div>

                <div className={style.contain_div}>
                    <label htmlFor="" className={style.labels}>Description:</label>
                    <input type="text" name='description' value={input.description} onChange={handleChange} />
                </div>

                <div className={style.contain_div}>
                    <label htmlFor="" className={style.labels}>ReleaseDate:</label>
                    <input type="text" name='released' value={input.released} onChange={handleChange} />
                </div>

                <div className={style.contain_div}>
                    <label htmlFor="" className={style.labels}>Rating:</label>
                    <input type="text" name='rating' value={input.rating} onChange={handleChange} />
                </div>

                <div className={style.contain_div}>
                    <label htmlFor="" className={style.labels}>Platform:</label>


                    <select onChange={optionchangeP}>

                        {platforms.map(platform => (
                            <option value={platform}>{platform}</option>

                        ))}
                    </select>

                    <input type="text" name='platform' value={option2} onChange={handleChange} />

                </div>

                <div className={style.contain_div}>
                    <label htmlFor="" className={style.labels}>Genres:</label>


                    <select onChange={optionchange}>

                        {generos.map(genero => (
                            <option value={genero.name}>{genero.name}</option>

                        ))}
                    </select>
                    <input type="text" name='genres' value={option} onChange={handleChange} />


                </div>

                <div className={style.contain}>
                    <label htmlFor="" className={style.labels}>ImageUrl:</label>
                    <input type="text" name='imageUrl' value={input.imageUrl} onChange={handleChange} />
                </div>

                <button type="submit" className={style.button}>create</button>
            </form>

        </div>

    )
}

export default Form;