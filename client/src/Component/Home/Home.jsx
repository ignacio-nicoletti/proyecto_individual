import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BotonGrVg from '../BotonGrVg/BotonGrVg';
import Genres from '../Generos/Genres';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar'
import Videogames from '../Videogames/Videogames';
import style from './Home.module.css';

const Home = () => {
//----paginado----//
    const videoxpag = useSelector(state => state.videoxpag)

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(15)

    const indexOfLastPost = currentPage * postPerPage;//15
    const indexOfFirstPost = indexOfLastPost - postPerPage;//0

    const currentPost = videoxpag.slice(indexOfFirstPost, indexOfLastPost)//de 0 a 15
//----paginado----//

    const estado = useSelector(state => state.estado)


  
    return (
        <>
            <div className={style.contain}>

                <BotonGrVg />
                <SearchBar />
                
                <Paginado setCurrentPage={setCurrentPage} videoxpag={videoxpag.length} postPerPage={postPerPage} />

            {
                estado === "Videojuego" ?
                 
                <Videogames currentPost={currentPost} /> : <Genres />
            }

            </div>
        </>
    )

}

export default Home;