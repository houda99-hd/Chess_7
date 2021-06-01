import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'
import equipeP from '../../Images/echecs2.jpg'

import Fade from 'react-reveal/Fade';

import { read_cookie } from 'sfcookies';

export default class CreationTournoi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom_tournoi :'',
            description : '',
            logo : '',
            nb_max_equipes : 1,
            nb_joueurs : 1
        };
    
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleLogoChange = this.handleLogoChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleNbMaxChange = this.handleNbMaxChange.bind(this);
        this.handleNbJoueursChange = this.handleNbJoueursChange.bind(this);
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
                case 'nb_max_equipes':
                    invalid = !!(Number.isInteger(value));
                    if (invalid) {
                        sentence = 'Vous devez entrer un entier ';
                    }
                default:
                    invalid = true;
                    sentence = '';
                break;
            }
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

        makeSelector(id, name, handleChange, oblig) {
            const value = this.state[id] || '';
            return(
                <div>
                    <label>{name + oblig}</label>
                    <select value={this.state.nb_joueurs} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            );
        }

    handleNomChange(event) {
        this.setState({nom_tournoi: event.target.value });
    }

    handleLogoChange(event) {
        this.setState({logo: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleNbMaxChange(event) {
        this.setState({nb_max_equipes : event.target.value});
    }

    handleNbJoueursChange(event) {
        this.setState({nb_joueurs : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch ("http://localhost:8080/Chess7/chessGestion/verifTournoi/"+ this.state.nom_tournoi,{
            method: "get",
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }}
        )
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                fetch("http://localhost:8080/Chess7/chessGestion/Tournoi",{
                    method: "post",
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nomT: this.state.nom_tournoi,
                        description:this.state.description,
                        logo:this.state.logo,
                        nbMaxEquipe : this.state.nb_max_equipes,
                        nbMaxJoueurs : this.state.nb_joueurs
                    })}
                )
            let createur = read_cookie('utilisateur');
            fetch("http://localhost:8080/Chess7/chessGestion/setCreateur/"+this.state.nom_tournoi +"/"+ createur.id  ,{
                method: "get",
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then ((creationEffectue) => {
                if (creationEffectue) {
                    alert('Votre tournoi a bien été créé.');
                    this.props.history.push({pathname:"/profil"});
                }
            })
            } else {
                alert('Le nom du tournoi est déjà existant');
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
                                        <Link class="accueil-bouton" to='/deconnexion' >Se déconnecter</Link>
                                    </div>
                                </li>
                                </ul> 
                        </nav>
                        <img src={equipeP} width="400px" height = "400px" alt="" />
                        </div>
            <label>
                {this.makeField('nom_tournoi','Nom du tournoi ',this.handleNomChange,'(*)')}
            </label>
            <br />
            <label>
                {this.makeField('logo','Lien vers le logo',this.handleLogoChange, '')}
            </label>
            <br />
            <label>
                {this.makeField('description','Description du tournoi',this.handleDescriptionChange, '')}
            </label>
            <br />
            <label>
                {this.makeField('nb_max_equipes','Nombre maximum d\'équipes',this.handleNbMaxChange, '')}
            </label>
            <br />
            <label>
                {this.makeSelector('nb_joueurs','Nombre de joueurs par équipe',this.handleNbJoueursChange, '')}
            </label>
            
            <div class="wrap" >
                <input class="button" type="submit" value="Créer" />
            </div>
            </form>
            </div>
        ); 
        }
    }<br />