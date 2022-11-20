import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_detail } from "../../Redux/Actions/action";
import style from './DetailGame.module.css'
import { Link } from 'react-router-dom';

const DetailGame = (props) => {

    const dispatch = useDispatch();
    let id = props.match.params.id

    useEffect(() => {
        dispatch(get_detail(id));
    }, [dispatch, id])

    const detail = useSelector(state => state.detail)
console.log(detail);

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
                            <button className={style.button}>Home</button>
                        </Link>}

                    
                </div>
            </div>
        </>
    )

}

export default DetailGame;