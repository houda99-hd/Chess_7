import React from 'react';
import '../../styles.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default class EquipeTournoi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : ''+"chessInp",
            joueurs : [],
            logo_url : ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/Chess7/chessGestion/listeTournois/")
            .then(res =>
            this.setState({joueurs : res.data.description, logo_url : res.data.logo}));
    }
    
    render() {
        const elements = [];
        for (const[index, value] of this.state.joueurs.entries()) {
            elements.push(
                <li>
                    {value.nom}
                </li>
            )
        }
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
                                <Link class="accueil-bouton" to='/deconnexion' >Se déconnecter</Link>
                            </div>
                        </li>
                        </ul> 
                </nav>
                </div>
                <img class='logo_tournoi' src={this.state.logo_url}></img>
                <div id="navbar_tournoi">
                    <Link class="navbar_link" to="../Tournois_pres" params={{nom : this.state.nom}}>Présentation</Link>
                    <Link class="navbar_link" to="../Participants" params={{nom : this.state.nom}}>Participants</Link>
                    <Link class="navbar_link" to="../Schedule" params={{nom : this.state.nom}}>Planning</Link>
                    <Link class="navbar_link" to="../Ranking" params={{nom : this.state.nom}}>Classement</Link>
                </div>
                <div class="row">
                    <div class="col-12-md-8">
                        <img src={this.state.logo_url}></img>
                    </div>
                    <div class="col-12-md-4">
                        <ul>
                            {elements}
                        </ul>
                    </div>
                </div>
            </div>
            );
        }
    }