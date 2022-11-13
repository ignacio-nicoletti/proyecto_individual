import React from 'react';
import styles from '../LandingPage/Landing.module.css'
import fondo from '../../assets/Fondo.jpg'


import { Link } from 'react-router-dom';
const LandingPage = () => {

    return (

        <div>
            <img src={fondo} alt="fondo de pantalla" className={styles.fondo} />
            <div>

                <Link to="/home">
                    <button className={styles.button}>Play</button>
                </Link >
            </div>
        </div >

    )
}

export default LandingPage;