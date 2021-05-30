import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo1.png'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import '../../styles.css';

const Header = () => {

    return (
    <header>
        <div class= "banner-container">
    <nav className="navbar">
        <ul>
            <li>
                <div>
                    <Link class="accueil-bouton" to= "/">Chess7</Link>
                </div>
            </li>
            <li class="accueil-bouton">
                <div>
                    <Link class="accueil-bouton" to= "/identification">S'identifier</Link>
                </div>
            </li>
            <li class="accueil-bouton">
                <div>
                    <Link class="accueil-bouton" to= "/inscription">S'inscrire</Link>
                </div>
            </li>
            </ul> 
    </nav>
    <Zoom className="test">
    <div >
            <img src={logo} alt="logo"/>
    </div>
    </Zoom>
    </div>
    </header>
        )
}
export default Header