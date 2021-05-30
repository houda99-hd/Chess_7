import React from 'react'
import article1 from '../../Images/article-1.jpg';
import article2 from '../../Images/article-2.jpg';
import '../../styles.css';
import '../../App.css';
import Fade from 'react-reveal/Fade';
import Header from '../Header'

import { Link } from 'react-router-dom'

const Landing = () => (
    //<div className="test">
    <div>
        <Header />
    <div id="navbar">
                <a class="navbar_link" href="acceuil.html">Accueil</a>
                <a class="navbar_link" href="tournois.html">Tournois</a>
                <a class="navbar_link" href="sponsors.html">Sponsors</a>
    </div>
    <h2 class="homepage_article_title"> Présentation de Chess7 </h2>
        <Fade left>
            <p>
            Jouer sur internet c’est bien pour acquérir un certain niveau de départ, mais il arrive un moment où la vraie confrontation s’impose pour progresser et se faire plaisir.
            Le club est ouvert presque tous les jours pour jouer des parties amicales et des tournois internes par niveaux se déroulent tout au long de l’année.
            Des tournois rapides ouverts à tous les licenciés sont aussi organisés chaque fin de mois le samedi après midi. Enfin, chaque premier vendredi du mois, un tournoi Blitz 
            (ouvert à tous, licenciés ou non) se déroule à partir de 20h dans les locaux du club.</p>
        </Fade>
        <h2 class="homepage_article_title"> Articles </h2>
            <div class="img-container">
                <p class="flotte">
                    <div className = "img-container">
                        <img src={article1} className = "img-container" alt="article1"/>
                    </div>
                </p>
                <Fade left>
                <p>
                <h1><Link to= "/">Grand Prix Féminin d'Échecs de Gibraltar</Link></h1>
                    Grand Prix FIDE féminin de Gibraltar — Ronde 3 — Kateryna Lagno l'emporte sur sa
                     compatriote Valentina Gunina et rejoint en tête Zhansaya Abdumalik qui a sauvé 
                     une partie compromise face à Gunay Mammadzada. Dinara Saduakassova ferme la 
                     marche avec 0 sur 3.
                </p>
                </Fade>
                
            </div>
                <div class="img-container">
                <p class="flotte">
                <div className = "img-container">
                    <img src={article2} className = "img-container" alt="article2"/>
                    </div>
                </p>
                <Fade left>
                <p>
                    <h1><Link to= "/">Champions Chess Tour — Crypto Cup</Link></h1>
                    La Crypto Cup, 6e étape du Meltwater Champions Chess Tour, 2e jour. Teimour Radjabov, 
                    Fabiano Caruana et Hikaru Nakamura mènent la danse avec 6,5 points devant Anish Giri 
                    et Wesley So. Maxime Vachier-Lagrave bien placé en 6e position, Magnus Carlsen 9e, 
                    Alireza Firouzja 13e.
                </p>
                </Fade>
                
                </div>
    </div>
)
export default Landing