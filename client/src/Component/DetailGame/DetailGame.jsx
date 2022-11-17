import { useSelector } from "react-redux";
import style from './DetailGame.module.css'


const DetailGame = () => {
    
    
    const detail = useSelector(state => state.DetailGame)

    return (
        <>


            <div className={style.contain}>

                <h1>{detail.name}</h1>
                <img src={detail.imageUrl} className={style.image} />
                <h3>Released: {detail.releaseDate}</h3>
                <h3>Rating: {detail.rating}</h3>
                <h3>Genres: {detail.genres}</h3>
                <h3>Platforms: {detail.platforms}</h3>
                <h3>Description:</h3><span>{detail.description}</span>
            </div>


        </>

    )



}



export default DetailGame;