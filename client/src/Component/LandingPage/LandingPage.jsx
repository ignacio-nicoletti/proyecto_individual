import React from 'react';
import styles from '../LandingPage/Landing.module.css'
import fondo from '../../assets/landing.png'
import git from '../../assets/github.png'

import linked from '../../assets/linked.png'

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

            <div >
                <a href="https://github.com/ignacio-nicoletti"  target="_blank">
                    <img src={git} alt="github-icon" className={styles.button_git}  />
                </a>
                <a href="https://www.linkedin.com/in/ignacio-nicoletti"  target="_blank">

                    <img src={linked} alt="github-icon" className={styles.button_linked} />
                </a>

            </div>
        </div >

    )
}

export default LandingPage;