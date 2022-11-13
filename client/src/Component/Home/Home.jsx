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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_videogames } from '../../Redux/Actions/action';
import Videogames from "../Videogames/Videogames"

const Home = () => {

    const dispatch = useDispatch()

    const videogames = useSelector(state => state.videogames)

    useEffect(() => {
        dispatch(get_videogames())
    }, [])


    if (videogames.length) {

        return (

            <>
                {videogames.map(videogame => <Videogames key={videogame.id} videogame={videogame} />)}

            </>

        )

    }
    else {
        return (
            <>
                <h1>loading...</h1>
            </>

        )
    }
}

export default Home;