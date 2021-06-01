import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo1.png'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import '../../styles.css';

import { read_cookie } from 'sfcookies';

const Header = () => {

    let data = read_cookie('utilisateur');
    if ((typeof(data.nom) === 'undefined')) {
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
    } else {
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
                            <Link class="accueil-bouton" to= "/deconnexion">Se déconnecter</Link>
                        </div>
                    </li>
                    <li class="accueil-bouton">
                        <div>
                            <Link class="accueil-bouton" to= "/profil">Mon profil</Link>
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
}
export default Header