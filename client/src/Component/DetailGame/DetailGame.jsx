import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_game, get_detail, get_videogames } from "../../Redux/Actions/action";
import style from './DetailGame.module.css'
import { Link, useParams } from 'react-router-dom';

const DetailGame = (props) => {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(get_detail(id));
    }, [dispatch, id])


    const detail = useSelector(state => state.detail)


    const handleDelete = () => {
        dispatch(delete_game(id))
    }


    const handleClick = () => {
        dispatch(get_videogames());

    }


    return (
        <>
            <div className={style.contain}>

                <img src={detail.imageUrl} alt="portada" className={style.portada} />

                <div>

                    <h1>{detail.name}</h1>
                    <h3>Released: {detail.releaseDate}</h3>
                    <h3>Rating: {detail.rating}★</h3>
                    <h3>Genres: {detail.genres}</h3>
                    <h3>Platforms: {detail.platforms}</h3>
                    <h3>Description:</h3><span>{detail.description}</span>

                    {<Link to="/home/">
                        <button className={style.button} onClick={handleClick}>Home</button>
                    </Link>}

                    {
                        detail.createdInDb
                            ? <button onClick={handleDelete}>delete</button> : ""

                    }
                </div>
            </div>
        </>
    )

}

export default DetailGame;