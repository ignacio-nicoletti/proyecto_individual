import React, { useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { filtrarXGenero, get_videogames } from '../../Redux/Actions/action';
import style from './Videogames.module.css'
import { Link } from 'react-router-dom';
import Carga from '../Carga/Carga';

const Videogames = ({ currentPost }) => {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(get_videogames());
      dispatch(filtrarXGenero());
   }, [dispatch])

   
   
   return (

      <>
         {
            currentPost.length > 0
               ? currentPost.map(({ imageUrl, name, genres, rating, id, createdInDb }) => (
                  <div className={style.contain} key={name}>

                     <img src={imageUrl} alt="Foto game" className={style.portada} />
                     <h3 className={style.dim}>{name}</h3>
                     <h4 className={style.dim}>Genre: {genres}</h4>
                     <h4 className={style.dim}>Rating: {rating}★</h4>

                     <Link to={`/home/${id}`}>
                        <button>Detail</button>
                     </Link>
                     
                  </div>
               ))
               :
               <>
                  <Carga />
               </>






         }

      </>

   )
}

export default Videogames;



