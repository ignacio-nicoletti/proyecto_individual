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
            <select onChange={handleChange} className={style.select}>
                <option value="rating">rating</option>
                <option value="Mayor">Mayor</option>
                <option value="Menor">Menor</option>


            </select>

        </div>

    );

}

export default BotonRating;