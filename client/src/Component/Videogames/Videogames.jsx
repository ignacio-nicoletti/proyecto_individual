import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_videogames } from '../../Redux/Actions/action';
import style from './Videogames.module.css'
import carga from "../../assets/carga.gif"

const Videogames = () => {


   const dispatch = useDispatch()

   const videogames = useSelector(state => state.videogames)

   useEffect(() => {
      dispatch(get_videogames())
   }, [dispatch])




   return (

      <>
         {
            videogames.length > 0

               ? videogames.map(({ imageUrl, name, genres, }) => (
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
            (videogames.length < 100 && videogames.length > 0)
               ?
               <button onClick={()=>dispatch(get_videogames())}>Regresar</button> : ""
         }



      </>

   )
}

export default Videogames;



