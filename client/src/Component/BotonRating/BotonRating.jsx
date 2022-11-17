import { useDispatch } from "react-redux";
import { setearRating } from "../../Redux/Actions/action";


import style from './BotonRating.module.css'

const BotonRating = ({ setRating, rating }) => {

    const disptach = useDispatch();

    const handleChange = (e) => {
        setRating(!rating)
        disptach(setearRating(e.target.value))
    }

return (
    <div className={style.contain}>
        <label>Rating: </label>
        <select onChange={handleChange}>

            <option value="Mayor">Mayor</option>
            <option value="Menor">Menor</option>


        </select>

    </div>

);

}

export default BotonRating;