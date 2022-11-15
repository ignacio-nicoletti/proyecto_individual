// import React from "react";



// class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={}
//     }



//     render() {

//         return (<div>

//             <h1>Soy el home </h1>


//         </div>)
//     }

// }



// export default Home;

import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import Videogames from '../Videogames/Videogames';
import style from './Home.module.css';

const Home = () => {
    return (
        <div className={style.contain}>
            <SearchBar />
            <Videogames />
        </div>)
}

export default Home;