import { useDispatch } from "react-redux";
import { setearOrder } from "../../Redux/Actions/action";


import style from './BotonRating.module.css'

const BotonRating = ({ setRender, render }) => {

    const disptach = useDispatch();




    const handleChange = (e) => {
        
       
    }



    return (
        <div className={style.contain}>
            <label>Rating:</label>
            <select onChange={handleChange}>

                <option value="Mayor">Mayor</option>
                <option value="Menor">Menor</option>


            </select>

        </div>

    );

}

export default BotonRating;