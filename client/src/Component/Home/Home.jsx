import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BotonGrVg from '../BotonGrVg/BotonGrVg';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar'
import Videogames from '../Videogames/Videogames';
import style from './Home.module.css';

const Home = () => {

    const videoxpag = useSelector(state => state.videoxpag)

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(15)

    const indexOfLastPost = currentPage * postPerPage;//15
    const indexOfFirstPost = indexOfLastPost - postPerPage;//0
    
    const currentPost = videoxpag.slice(indexOfFirstPost, indexOfLastPost)//de 0 a 15

    return (

        <div className={style.contain}>
            <SearchBar />

            <BotonGrVg/>
            <Paginado setCurrentPage={setCurrentPage} videoxpag={videoxpag.length} postPerPage={postPerPage} />

            <Videogames currentPost={currentPost}/>
        </div>)
}

export default Home;