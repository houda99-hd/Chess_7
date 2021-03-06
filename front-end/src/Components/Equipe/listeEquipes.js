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
    }

    componentDidMount() {
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
          console.log(JSON.stringify(result));
        })
       /* axios.get("http://localhost:8080/Chess7/chessGestion/listeEquipes/"+ createur.id)
                  .then(resu => this.setState({
                    utilisateurs: resu
                  }));*/
      }
    
      render() {
          const elements = [];
          for (const[, value] of this.state.utilisateurs.entries()) {
              elements.push(
                  <div class="img-container-equipe">
                      <p class="flotte">
                          <div className = "img-container-equipe">
                              <img src={value.logo} className = "img-container-equipe" alt="article2"/>
                          </div>
                      </p>
                      <p>
                          <b>Nom de l'équipe :</b>  {value.nom}
                          <br/>
                          <b>Description :</b> {value.description}
                          <br/>
                          <b>Créateur Equipe :</b> {value.createurEquipe.nom}  {value.createurEquipe.prenom}
                          <br/>
                          <span className="créé" style={{color: 'green'}}> [ Créé ]</span>
                      </p>
                  </div>
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
                  {elements}
              </div>
            );
            }
    }