import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_videogames } from '../../Redux/Actions/action';
import style from './Videogames.module.css'
import carga from "../../assets/carga.gif"

const Videogames = ({currentPost}) => {
   
   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(get_videogames())
   }, [dispatch])

   
   return (

      <>
         {
            currentPost.length > 0
               ? currentPost.map(({ imageUrl, name, genres, }) => (
                  <div className={style.contain} key={name}>

                     <img src={imageUrl} alt="Foto game" className={style.portada} />

                     <h3 className={style.dim}>{name}</h3>
                     <h4 className={style.dim}>Genre: {genres}</h4>


                  </div>
               ))
               :
               <>
                  <img src={carga} alt="" />
               </>



         }

         {
            (currentPost.length < 100 && currentPost.length > 0)
               ?
               <button onClick={() => dispatch(get_videogames())}>borrar busqueda</button> : ""
         }



      </>

   )
}

export default Videogames;



