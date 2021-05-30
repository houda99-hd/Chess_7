import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'
import equipeP from '../../Images/echecs2.jpg'


import { read_cookie } from 'sfcookies';

export default class Equipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nomEquipeSouhaite :''
        };
    this.handleNomEquipeChange = this.handleNomEquipeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNomEquipeChange(event) {
        this.setState({nomEquipeSouhaite: event.target.value});
      }

    handleSubmit(event) {
      event.preventDefault();
      fetch ("http://localhost:8080/Chess7/chessGestion/verifequipe/"+ this.state.nomEquipeSouhaite,{
        method: "get",
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }}
      )
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
        let createur = read_cookie('utilisateur');
        fetch("http://localhost:8080/Chess7/chessGestion/addMembre/"+this.state.nomEquipeSouhaite +"/"+ createur.id  ,{
          method: "get",
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }
      }).then ((creationEffectue) => {
        if (creationEffectue) {
          alert('Votre inscription a bien été effectuée.');
          this.props.history.push({pathname:"/profil"});
        }
      })
        } else {
          alert('Le nom de l\'équipe n\'existe pas.');
        }
      })
        } 
    
      render() {
        
        return (
            <div className="centrage"> <form onSubmit={this.handleSubmit}>
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
            <label> Nom de l'équipe souhaitée: 
              <input type="text" onChange={this.handleNomEquipeChange}/>
            </label>
            <br />
            
            <div class="wrap" >
              <input class="button" type="submit" value="S'inscrire dans l'équipe" />
            </div>
          </form>
          </div>
        ); 
        }
    }<br />