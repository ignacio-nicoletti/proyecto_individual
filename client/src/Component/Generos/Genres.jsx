import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { filtrarXGenero, filtrarXVideogame } from '../../Redux/Actions/action'
import style from './Genres.module.css'

const Genres = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filtrarXGenero())
     }, [dispatch])
    
  
    const InfGenero = useSelector(state => state.Genres)


    console.log(InfGenero);

    return (InfGenero.map(({ name }) =>



        <div className={style.contain} >

            <h3>{name}</h3>

        </div>
    )




    )



}



export default Genres;