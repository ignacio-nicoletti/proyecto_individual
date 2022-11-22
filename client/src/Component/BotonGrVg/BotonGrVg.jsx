
import { useDispatch, useSelector } from "react-redux";
import { filtradoDeGenero } from "../../Redux/Actions/action";

import style from './BotonGrVg.module.css'

const BotonGrVg = () => {

    const dispatch = useDispatch();

    const generos = useSelector(state => state.Genres)

    const handleChange = (e) => {

        dispatch(filtradoDeGenero(e.target.value))

    }

    return (
        <div className={style.contain}>

            <div>
                <select className={style.select} onChange={(e) => { handleChange(e) }}>

                    <option selected >Choose a genre...</option>

                    {generos.map((op, i) => {
                        return <option value={op.name} key={i}>{op.name}</option>
                    })}
                </select>


            </div>
        </div>



    );

}

export default BotonGrVg;