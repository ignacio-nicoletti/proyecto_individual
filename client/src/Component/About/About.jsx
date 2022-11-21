import React from 'react';
import fondoAbout from '../../assets/fondoAbout.jpg'
import style from './About.module.css'
import { Link } from 'react-router-dom';
const About = () => {

    return (

        <div className={style.contain}>
            <img src={fondoAbout} alt="fondo" className={style.fondo} />
            <div className={style.p}>

                <p>Proyecto creado para evaluacion final,
                    consistiendo en una landing-page que muestra
                    los juegos desde una api y una base de datos.
                    Se puede Crear un videojuego, ordernarlos por rating,
                    alfabeticamente y por generos, como asi tambien buscarlos
                    por nombre.
                </p>

            </div>
            <div className={style.button}>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>

        </div>
    )
}

export default About;