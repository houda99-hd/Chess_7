import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default class ParticipantsTournoi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : '',
            equipes: []
        };
    }

    componentDidMount() {
        fetch ("http://localhost:8080/Chess7/chessGestion/listeEquipes/",{
            method: "get",
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
        }}).then(res => res.json())
        .then(
        (result) => {
            this.setState({
                equipes: result
        });
        console.log(JSON.stringify(result));
        })
    }
    
    render() {
        const elements = [];
        for (const[index, value] of this.state.equipes.entries()) {
            elements.push(
                <li>
                    <Link to="../Equipe" params={{nom : value.nom}}>{value.nom}</Link>
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
                <Link class="navbar_link" to="../Tournois_pres" >Présentation</Link>
                <Link class="navbar_link" to="../Participants" >Participants</Link>
                <Link class="navbar_link" to="../Schedule" >Planning</Link>
                <Link class="navbar_link" to="../Ranking" >Classement</Link>
            </div>
            <ul>
            {elements}
            </ul>
        </div>
        );
        }
    }