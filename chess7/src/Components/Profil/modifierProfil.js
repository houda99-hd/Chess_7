import React from 'react'
import '../../styles.css';
import Header from '../Header'

import { read_cookie } from 'sfcookies';

export default class ModifierProfil extends React.Component {
    constructor(props) {
        super(props);
        let data = read_cookie('utilisateur');
        this.state = {
          id_user:''+data.id,
          nom: ''+data.nom,
          prenom: ''+data.prenom,
          adresse: ''+data.adresse,
          DefaultUserPic : ''+data.profilPic
        };
    
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handlePrenomChange = this.handlePrenomChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleAdresseChange = this.handleAdresseChange.bind(this);
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
    
    handleNomChange(event) {
        this.setState({nom: event.target.value});
    }

    handlePrenomChange(event) {
        this.setState({prenom: event.target.value});
    }

      handleAdresseChange(event) {
        this.setState({adresse: event.target.value});
      }

      handlePictureChange(event) {
       this.setState({profilPic: event.target.value});     
      }

    
      handleSubmit(event) {
        event.preventDefault();
        
        fetch ("http://localhost:8080/Chess7/chessGestion/modifProfil/",{
            method: "post",
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                 id : this.state.id_user,
                 nom : this.state.nom,
                 prenom : this.state.prenom, 
                 adresse: this.state.adresse,
                 profilPic : this.state.profilPic
               })
            })
          alert('Votre modification a bien été effectuée.');
          this.props.history.push({pathname:"/identification"});
      }
    
      render() {
        
        return (
            <div className="centrage"> <form onSubmit={this.handleSubmit}>
              <Header />
            <label>
              {this.makeField('nom','Nom ',this.handleNomChange, '',"",""+this.state.nom)}
            </label>
            <br />
            <label>
              {this.makeField('prenom','Prenom',this.handlePrenomChange, '',"",""+this.state.prenom)}
            </label>
            <br />
            <label>
              {this.makeField('adresse','Adresse: ',this.handleAdresseChange, '',"",""+this.state.adresse)}
            </label>
            <br /> 
            <label>
            {this.makeField('profilPic','Image: ',this.handlePictureChange, '',"","")}
            </label>
            <br />
            <div class="wrap" >
              <input class="button" type="submit" value="Soumettre" />
            </div>
          </form>
          </div>
        ); 
        }
    }<br />