import React from 'react';
import { useState } from 'react';

import style from './Form.module.css'

const Form = () => {

    const [input, setInput] = useState({

        name: "",
        ReleaseDate: "",
        Rating: "",
        Platforms: "",
        Genres: "",
        ImageUrl: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        const videogame = {

            name: document.querySelector("input[name='name']").value,
            ReleaseDate: document.querySelector("input[name='ReleaseDate']").value,
            Rating: document.querySelector("input[name='Rating']").value,
            Platforms: document.querySelector("input[name='Platforms']").value,
            Genres: document.querySelector("input[name='Genres']").value,
            ImageUrl: document.querySelector("input[name='name']").value,
            
        }
        console.log(videogame);
    }

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        validateInput(input)
    }

    const validateInput=(input)=>{
        if(!input.name.length){return "Debe ingresar un value"}
        if(!input.ReleaseDate.length){return "Debe ingresar un value"}
        if(!input.name.Rating){return "Debe ingresar un value"}
        if(!input.Platforms.length){return "Debe ingresar un value"}
        if(!input.Genres.length){return "Debe ingresar un value"}
        if(!input.ImageUrl.length){return "Debe ingresar un value"}
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
                    <label htmlFor="">ReleaseDate:</label>
                    <input type="text" name='ReleaseDate' value={input.ReleaseDate} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">Rating:</label>
                    <input type="text" name='Rating' value={input.Rating} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">Platforms:</label>
                    <input type="text" name='Platforms' value={input.Platforms} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">Genres:</label>
                    <input type="text" name='Genres' value={input.Genres} onChange={handleChange} />
                </div>

                <div className={style.contain}>
                    <label htmlFor="">ImageUrl:</label>
                    <input type="text" name='ImageUrl' value={input.ImageUrl} onChange={handleChange} />
                </div>

                <button type="submit" >create</button>
            </form>

        </div>

    )
}

export default Form;