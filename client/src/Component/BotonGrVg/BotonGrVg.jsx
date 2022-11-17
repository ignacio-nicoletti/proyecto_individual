
import { useDispatch, useSelector } from "react-redux";
import { filtradoDeGenero, setearEstado } from "../../Redux/Actions/action";

import style from './BotonGrVg.module.css'

const BotonGrVg = () => {
    
    const dispatch = useDispatch();
    
    
    
    
    const generos = useSelector(state => state.Genres)
    
    
    
    
    
    const handleChange = (e) => {
   
        // dispatch(setearEstado(e.target.value))


        dispatch(filtradoDeGenero(e.target.value))
        
    }


    
    
    
    
    return (
        <div className={style.contain}>
            {/* <label htmlFor="">Category: </label>
            <select onChange={handleChange}>
                <option value="">Category </option>
                <option value="Videojuego">Videojuego</option>
                <option value="Genero" >Genero</option>




            </select> */}




            <div>
                <select className={style.selectors} onChange={(e) => { handleChange(e) }}>
                  
                    <option selected>Choose a genre...</option>
                    
                    {generos.map((op, i) => {
                        return <option value={op.name} key={i}>{op.name}</option>
                    })}
                </select>


            </div>
        </div>



    );

}

export default BotonGrVg;