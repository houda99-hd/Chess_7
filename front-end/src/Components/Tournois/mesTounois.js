import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'
import { read_cookie } from 'sfcookies';

export default class MesTournoisCrees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilisateurs: []
        };
    }

    componentDidMount() {
      let createur = read_cookie('utilisateur'); 
      fetch ("http://localhost:8080/Chess7/chessGestion/getListeTournoiU/"+ createur.id,{
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

      handleTournoi(event, i) {
        //this.props.history.push({pathname:"/profil"});
       //this.props.history.push({pathname: '/tournoiPage', state:{nom_tournoi: i}});
       event.preventDefault();
        fetch ("http://localhost:8080/Chess7/chessGestion/peutGenerer/"+ i,{
            method: "get",
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }}
        )
        .then((res) => res.json())
        .then((data) => {
            switch (parseInt(data)) {
                case 0:
                    fetch ("http://localhost:8080/Chess7/chessGestion/genererTournoi/"+i,{
                            method: "put",
                            headers: {
                                'Accept' : 'application/json',
                                'Content-Type': 'application/json'
                            }}
                        )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data) {
                                alert('Votre tournoi a ??t?? bien g??n??r??.')
                            }})
                    break;
                case 1:
                    alert('Le nombre d\' ??quipes inscrites n\'est pas suffisant (<2).')
                    break;   
                case 2:
                    alert('Tournoi d??j?? g??ner??.')
                    break;         
                default:
                    break;
            }
        })
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
                          <b>Nom de l'??quipe :</b>  {value.nomT}
                          <br/>
                          <b>Description :</b> {value.description}
                          <br/>
                          <button type="button" onClick={(e) => this.handleTournoi(e, value.nomT)}>
                          G??nerer tournoi
                            </button>
                           
                          <br/>
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
                                 <Link class="accueil-bouton" to='/deconnexion' >Se d??connecter</Link>
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