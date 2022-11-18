import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BotonGrVg from '../BotonGrVg/BotonGrVg';
import BotonOrder from '../BotonOrder/BotonOrder';
import BotonRating from '../BotonRating/BotonRating';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar'
import Videogames from '../Videogames/Videogames';
import style from './Home.module.css';

const Home = () => {

    //----paginado----//
    const videoxpag = useSelector(state => state.videoxpag)
    const videofilter = useSelector(state => state.videofiltrados)

    console.log("videopag", videoxpag);
    console.log("videofilter", videofilter);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(15)

    const indexOfLastPost = currentPage * postPerPage;//15
    const indexOfFirstPost = indexOfLastPost - postPerPage;//0


    const currentPost = videofilter.length ?
        videofilter.slice(indexOfFirstPost, indexOfLastPost)
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
                <SearchBar />
                <BotonRating setRating={setRating} rating={rating} />
                <BotonOrder setRender={setRender} render={render} />
                <Paginado setCurrentPage={setCurrentPage} videoxpag={videoxpag.length} postPerPage={postPerPage} />
                <Videogames currentPost={currentPost} />

            </div>
        </>
    )

}

export default Home;