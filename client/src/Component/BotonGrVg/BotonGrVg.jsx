
import { useDispatch } from "react-redux";
import {  setearEstado } from "../../Redux/Actions/action";

import style from './BotonGrVg.module.css'

const BotonGrVg = () => {

    const disptach = useDispatch();

    const handleChange = (e) => {
    
        disptach(setearEstado(e.target.value))
    }





    return (
        <div className={style.contain}>
            <label>Choose a categories:</label>
            <select onChange={handleChange}>

                <option value="Videojuego">Videojuego</option>
                <option value="Genero" >Genero</option>

            </select>

        </div>

    );

}

export default BotonGrVg;