import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filtrarXVideogame } from '../../Redux/Actions/action'
import style from './BotonGrVg.module.css'

const BotonGrVg = () => {







    return (
        <div className={style.contain}>
            <label for="dog-names">Choose a categories:</label>
            <select name="tipo">

                <option value="Genero">Genero</option>
                <option value="Videojuego">videojuegos  </option>

            </select>

        </div>

    );

}

export default BotonGrVg;