import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filtrarXVideogame, get_videogames } from '../../Redux/Actions/action'
import style from './searchBar.module.css'

const SearchBar = () => {

    const disptach = useDispatch()
    const [search, setSearch] = useState("")


    const handleInput = (e) => {

        setSearch(e.target.value)
    }

    const handleSubmit = () => {
        if (search) {
            disptach(filtrarXVideogame(search))
        }
    }


    const ambasF = () => {
        disptach(get_videogames());
        setSearch("")

    }

    return (
        <div className={style.contain}>


            <input type="text" className={style.input} value={search} onChange={(e) => handleInput(e)} />

            <button className='' onClick={(e) => handleSubmit(e)}> search </button >


            {
                search ?
                    <button onClick={() => ambasF()} className={style.button}>X</button> : ""

            }
        </div>

    );

}

export default SearchBar;