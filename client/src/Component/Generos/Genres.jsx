import React, { useEffect} from "react";
import { useDispatch, useSelector, } from "react-redux";
import { filtrarXGenero } from '../../Redux/Actions/action'
import style from './Genres.module.css'

const Genres = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filtrarXGenero())
     }, [dispatch])
    
  
    const InfGenero = useSelector(state => state.Genres)


 

    return (InfGenero.map(({ name }) =>



        <div className={style.contain} >

            <h3>{name}</h3>

        </div>
    )




    )



}



export default Genres;