import React from 'react'
import '../../styles.css';
import Header from '../Header'

import { read_cookie } from 'sfcookies';

export default class ModifierMdp extends React.Component {
    constructor(props) {
        super(props);
        let data = read_cookie('utilisateur');
        this.state = {
          id_user:''+data.id,
          ancien_mdp : ''+data.mdp,
          nom: ''+data.nom,
          prenom: ''+data.prenom,
          mdp: ''
        };
    
        this.handleNMdpChange = this.handleNMdpChange.bind(this);
        this.handleAMdpChange = this.handleAMdpChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      makeField(id, name, handleChange, oblig,dis,textA) {
        const value = this.state[id] || '';
          return(
            <div>
              <label>{name + oblig}</label>
              <input
                type="text"
                data-id={id}
                placeholder={textA}
                value={value}
                disabled= {""+ dis}
                onChange={handleChange}
              />
            </div>
          );
        }
    
    handleNMdpChange(event) {
        this.setState({mdp: event.target.value});
    }

    handleAMdpChange(event) {
        this.setState({ancien_mdp: event.target.value});
    }

      handleSubmit(event) {
        event.preventDefault();
        
        fetch ("http://localhost:8080/Chess7/chessGestion/modifMdp/" + this.state.id_user + "/" +this.state.ancien_mdp + "/" + this.state.mdp ,{
            method: "get",
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert('Votre mot de passe est modifié.');
            this.props.history.push({pathname:"/identification"});
          } else {
            alert('La modification du mot de passe a échouée.');
          }
        })
      }
    
      render() {
        
        return (
            <div className="centrage"> <form onSubmit={this.handleSubmit}>
              <Header />
            <label>
              {this.makeField('nom','Nom ',this.handleNomChange, '(*)',"disabled",""+this.state.nom)}
            </label>
            <br />
            <label>
              {this.makeField('droit','Droit',this.handleNomChange, '(*)',"disabled",""+this.state.droit)}
            </label>
            <br />
            <label>
              {this.makeField('prenom','Prenom ',this.handlePrenomChange, '(*)',"disabled",""+this.state.prenom)}
            </label>
            <br /> 
            <label>
              {this.makeField('ancien_mdp','Ancien mot de passe: ',this.handleAMdpChange, '(*)',"","")}
            </label>
            <br /> 
            <label>
              {this.makeField('mdp','Nouveau mot de passe',this.handleNMdpChange, '',"","Modifier mot de passe")}
            </label>
            <br />
            <div class="wrap" >
              <input class="button" type="submit" value="Modifier" />
            </div>
          </form>
          </div>
        ); 
        }
    }<br />