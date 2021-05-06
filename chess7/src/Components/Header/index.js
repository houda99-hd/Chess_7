import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.jpg';

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
    <img src={logo} className="App-logo" alt="logo" />
    </div>
    </header>
        )
}
export default Header