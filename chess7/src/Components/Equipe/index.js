import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'
import equipeP from '../../Images/echecs2.jpg'

import Fade from 'react-reveal/Fade';

import { read_cookie } from 'sfcookies';

export default class Equipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nom_equipe :'',
          description: '',
          logo : ''
        };
    
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleLogoChange = this.handleLogoChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      makeField(id, name, handleChange, oblig) {
        const value = this.state[id] || '';
        var invalid = !!(value.length % 2);
        var sentence = '';
        switch (id) {

             case 'description':
                invalid = !(value.length > 6);
                if (invalid) {
                    sentence = 'La description doit contenir au minimum 5 caractères ';
                }
                break;
          default:
            invalid = true;
            sentence = '';
            break;
        }
       // var invalid = !(value.includes('@'));
        //!!(value.length % 2);
        //!!(re.test(String(value).toLowerCase()));
          const className = 'form-control' + (invalid?' is-invalid':'');

          return(
            <div>
              <label>{name + oblig}</label>
              <input
                type="text"
                className={className}
                data-id={id}
                placeholder={name}
                value={value}
                onChange={handleChange}
              />
              {/* The next line is where you specify that the
                  error message should be shown only
                  when the 'invalid' variable is true    */}
              <Fade bottom collapse when={invalid}>
                <div className="invalid-feedback"
                  //Boostrap 4 uses some CSS tricks to simplify
                  //error handling but we're doing it differently
                  //so the next line disables these tricks
                  style={{ display: 'block' }}
                >
                  <p className = "Message">{sentence} </p>
                </div>
              </Fade>
            </div>
          );
        }
      

    handleNomChange(event) {
        this.setState({nom_equipe: event.target.value });
      }

    handleLogoChange(event) {
        this.setState({logo: event.target.value});
      }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
        fetch ("http://localhost:8080/Chess7/chessGestion/verifequipe/"+ this.state.nom_equipe,{
          method: "get",
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            fetch("http://localhost:8080/Chess7/chessGestion/equipe",{
            method: "post",
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nom: this.state.nom_equipe,
              description:this.state.description,
              logo:this.state.logo
            })}
            )
          let createur = read_cookie('utilisateur');
          fetch("http://localhost:8080/Chess7/chessGestion/setCreateur/"+this.state.nom_equipe +"/"+ createur.id  ,{
            method: "get",
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            }
        }).then ((creationEffectue) => {
          if (creationEffectue) {
            alert('Votre équipe a bien été créé.');
            this.props.history.push({pathname:"/profil"});
          }
        })
          } else {
            alert('Le nom de l\'équipe est déjà existant');
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
            <label>
              {this.makeField('nom_equipe','Nom équipe ',this.handleNomChange,'(*)')}
            </label>
            <br />
            <label>
              {this.makeField('logo','Lien vers le logo',this.handleLogoChange, '')}
            </label>
            <br />
            <label>
              {this.makeField('description','Description de l\' équipe',this.handleDescriptionChange, '')}
            </label>
            
            <div class="wrap" >
              <input class="button" type="submit" value="Créer" />
            </div>
          </form>
          </div>
        ); 
        }
    }<br />