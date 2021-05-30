import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'

import { read_cookie } from 'sfcookies';

export default class Equipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilisateurs: []
        };
        this.handleUtilisateurEquipeChange = this.handleUtilisateurEquipeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUtilisateurEquipeChange(event) {
      this.setState({utilisateurs: event.target.value});
    }

  handleSubmit(event) {
    event.preventDefault();
    let createur = read_cookie('utilisateur');
    fetch ("http://localhost:8080/Chess7/chessGestion/listeEquipes/"+ createur.id,{
      method: "get",
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }}
    ).then(res => res.json())
    .then(
      (result) => {
        this.setState({
          utilisateurs: result
        });
      })
    } 
    
      render() {
        
          const { utilisateurs } = this.state;
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
                 </div>
              <ul>
                {console.log(utilisateurs)}
                {utilisateurs.map(utilisateur => (
                  <li key={utilisateur.nom}>
                    <br />
                    <img src={utilisateur.identifiant} alt="" /> {utilisateur.description} <br />
                    <br />
                  </li>
                ))}
              </ul> 
              </div>
            );
            }
    }