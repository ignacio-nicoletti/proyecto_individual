import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BotonBDApi from '../Boton-BDAPi/BotonBDApi';
import BotonGrVg from '../BotonGrVg/BotonGrVg';
import BotonOrder from '../BotonOrder/BotonOrder';
import BotonRating from '../BotonRating/BotonRating';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar'
import Videogames from '../Videogames/Videogames';
import style from './Home.module.css';

const Home = () => {

    //----paginado----//
    const videoxpag = useSelector(state => state.videoxpag)//todos
    const videofilter = useSelector(state => state.videofiltrados)//filtrados

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(15)

    const indexOfLastPost = currentPage * postPerPage;//15
    const indexOfFirstPost = indexOfLastPost - postPerPage;//0


    const currentPost = videofilter.length
        ? videofilter.slice(indexOfFirstPost, indexOfLastPost)
        : videoxpag.slice(indexOfFirstPost, indexOfLastPost)//de 0-15
    //----paginado----//

    //---order---//
    const [render, setRender] = useState(false)
    //---order---//

    //---rating---//
    const [rating, setRating] = useState(false)
    //---rating---/

    return (
        <>
            <div className={style.contain}>
                <BotonGrVg />
                <BotonRating setRating={setRating} rating={rating} />
                <BotonOrder setRender={setRender} render={render} />
                <BotonBDApi />
                <SearchBar />
                <Paginado setCurrentPage={setCurrentPage} videoxpag={videoxpag.length} postPerPage={postPerPage} />
                <Videogames currentPost={currentPost} />

            </div>
        </>
    )

}

export default Home;