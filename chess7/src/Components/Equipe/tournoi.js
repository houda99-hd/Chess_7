import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'
import equipeP from '../../Images/echecs2.jpg'

export default class Equipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      render() {
        
        return (
            <div>
                <div class= "banner-container">
                        <nav className="navbar">
                            <ul>
                                <li>
                                    <div>
                                        <Link class="accueil-bouton" to= "/">Chess7 </Link>
                                    </div>
                                </li>
                                <li class="accueil-bouton">
                                    <div>
                                        <Link class="accueil-bouton" to='/' >Se déconnecter</Link>
                                    </div>
                                </li>
                                </ul> 
                        </nav>
                        <img src={equipeP} width="400px" height = "400px" alt="" />
                        </div>
          </div>
        ); 
        }
    }<br />