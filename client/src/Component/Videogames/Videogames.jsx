import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_detail, get_videogames } from '../../Redux/Actions/action';
import style from './Videogames.module.css'
import carga from "../../assets/carga.gif"
import DetailGame from '../DetailGame/DetailGame';

const Videogames = ({ currentPost }) => {

   const dispatch = useDispatch()


const id=useSelector(state=>state.Videogames.id)
console.log(id);
   

useEffect(() => {
      dispatch(get_videogames());
      dispatch(get_detail(id))
   }, [dispatch])
   
   
   
   const [activo, SetActivo] = useState(false)
   
   const handleClick = () => {
      
      SetActivo(true)
    

   }






   return (

      <>
         {
            currentPost.length > 0
               ? currentPost.map(({ imageUrl, name, genres, rating, id }) => (
                  <div className={style.contain} key={name}>

                     <img src={imageUrl} alt="Foto game" className={style.portada} />

                     <h3 className={style.dim}>{name}</h3>
                     <h4 className={style.dim}>Genre: {genres}</h4>
                     <h4 className={style.dim}>Rating: {rating}	★</h4>
                     <button onClick={handleClick()}>Detail</button>
                  </div>
               ))
               :
               <>
                  <img src={carga} alt="" />
               </>

         }
{/* 
         {activo === true ? <DetailGame /> : ""} */}

      </>







   )
}

export default Videogames;



