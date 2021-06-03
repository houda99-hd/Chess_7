import React from 'react';
import '../../styles.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { read_cookie } from 'sfcookies';

export default class TournoiPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom : '',
            description : '',
            logo_url : '',
            nom_equipe: ''
        };
        this.handleNomEquipeChange = this.handleNomEquipeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/Chess7/chessGestion/Tournoi/"+ this.props.location.state.nom_tournoi)
            .then(res =>
            this.setState({nom: res.data.nomT,
                description : res.data.description,
                 logo_url : res.data.logo}));
    }

    handleNomEquipeChange(event) {
        this.setState({nom_equipe: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        //this.props.history.push({pathname:"/profil"});
       //this.props.history.push({pathname: '/tournoiPage', state:{nom_tournoi: i}});
       let donnee = read_cookie('utilisateur');
       if (!(typeof(donnee.nom) === 'undefined')) {
        fetch ("http://localhost:8080/Chess7/chessGestion/verifequipe/"+ this.state.nom_equipe,{
            method: "get",
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            }}
          )
          .then((res) => res.json())
          .then((data) => {
            if (!data) {
                fetch ("http://localhost:8080/Chess7/chessGestion/estMembre/"+ this.state.nom_equipe +"/"
                + donnee.id,{
                    method: "get",
                    headers: {
                      'Accept' : 'application/json',
                      'Content-Type': 'application/json'
                    }}
                  )
                  .then((res) => res.json())
                  .then((data) => {
                    if (!data) {
                        alert('Vous etes pas membre de l\'équipe. ')
                } else {
                    fetch ("http://localhost:8080/Chess7/chessGestion/TournoiInscription/"+ this.state.nom +
                    "/"+ this.state.nom_equipe + "/"+donnee.id,{
                        method: "get",
                        headers: {
                            'Accept' : 'application/json',
                            'Content-Type': 'application/json'
                    }}).then(res => res.json())
                    .then(
                    (result) => {
                        console.log(result)
                        switch (parseInt(result)) {
                            case 0:
                                alert('Inscription effectuée');
                                break;

                            case 1:
                                alert('Nombre joueur max de l\' équipe atteint.');
                                break;

                            case 2:
                                alert('Nombre équipe max du tournoi atteint');
                                    break;
                                    default:
                                        break;
                                }
                            })
                     }})
                } else {
                    alert('L \' équipe n\'existe pas.');
                } 
        })} else {
            alert('Veuillez vous connecter.');
    }
    
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
                                <Link class="accueil-bouton" to='/deconnexion' >Se déconnecter</Link>
                            </div>
                        </li>
                        </ul> 
                </nav>
                </div>
                <img class='logo_tournoi' src={this.state.logo_url}></img>
                <div id="navbar_tournoi">
                    <Link class="navbar_link" to="../tournoiPage" >Présentation</Link>
                    <Link class="navbar_link" to="../Participants" >Participants</Link>
                    <Link class="navbar_link" to="../Schedule" >Planning</Link>
                    <Link class="navbar_link" to="../Ranking" >Classement</Link>
                </div>
                <h1>
                {this.state.nom}
                </h1>
                <p>
                {this.state.description}
                </p>
                <div className="left"> <form onSubmit={this.handleSubmit}>
                    <label> Nom de l'équipe à inscrire: 
                    <input type="text" onChange={this.handleNomEquipeChange}/>
                    </label>
                    <div class="left" >
                    <input class="button" type="submit" value="S'inscrire dans le tournoi" />
                    </div>
                </form>
            </div>
            </div>
            );
        }
    }