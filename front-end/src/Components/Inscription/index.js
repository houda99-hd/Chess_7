import React from 'react'
//import data from '../../db.json';
import Fade from 'react-reveal/Fade';
import '../../styles.css';
import Header from '../Header'

export default class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email :'',
          mdp: '',
          nom: '',
          prenom: '',
          adresse: '',
          droit: 0,
          profilPic : '',
          error: null,
          isLoaded: false,
          utilisateurs: []
        };
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMdpChange = this.handleMdpChange.bind(this);
        this.handleNomChange = this.handleNomChange.bind(this);
        this.handlePrenomChange = this.handlePrenomChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        this.handleAdresseChange = this.handleAdresseChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      makeField(id, name, handleChange, oblig) {
        const value = this.state[id] || '';
        var invalid = !!(value.length % 2);
        var sentence = '';
        switch (id) {
          case 'email':
             invalid = !(value.includes('@'));
             if (invalid) {
              sentence = 'Email\'form should be xyz@gmail.com';
             }
            break;

            case 'mdp':
              invalid = !!(value.length <4 );
              if (invalid) {
               sentence = 'Password should be minimum 5 characters ';
              }
             break;

             case 'nom':
              invalid = !(value === value.toLowerCase());
              if (invalid) {
                sentence = 'example last name : dupont';
              }
             break;

             case 'prenom':
              invalid = !(value === value.toLowerCase());
              if (invalid) {
                sentence = 'example first name : martial';
              }
             break;

             case 'adresse':
              invalid = !/\d/.test(value);
              if (invalid) {
               sentence = 'Adress\'form should be 42 hollywood street';
              }
             break;

             case 'profilPic':
              invalid = false;
              if (invalid) {
               sentence = 'Image introuvable';
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
      

      handleEmailChange(event) {
        this.setState({email: event.target.value });
      }
    
      handleMdpChange(event) {
        this.setState({mdp: event.target.value});
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
    
     /* handleSubmit(event) {
        alert('L identifiant a été soumis : ' + this.state.id);
        event.preventDefault();
      }*/

      handlePictureChange(event) {
       /* this.setState({profilPic: event.target.files[0].name});
        const data = new FormData();
        data.append('file', event.target.files[0]);
        console.log(data);  */
       // console.log(event.target.files[0].name); 
       this.setState({profilPic: event.target.value});     
      }

    
      handleSubmit(event) {
        event.preventDefault();
        
        fetch ("http://localhost:8080/Chess7/chessGestion/verifemail/"+ this.state.email,{
          method: "get",
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            fetch("http://localhost:8080/Chess7/chessGestion/compte",{
            method: "post",
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.state.email,
              mdp:this.state.mdp,
              proprietaire : {
                /* email: this.state.email,
                 mdp:this.state.mdp,*/
                 nom: this.state.nom,
                 prenom: this.state.prenom,
                 adresse: this.state.adresse,
                 droit:this.state.droit,
                 profilPic : this.state.profilPic
               }
            })
          })
          alert('Votre inscription a bien été effectuée.');
          this.props.history.push({pathname:"/identification"});
          } else {
            alert('L\'email est déjà utilisé');
          }
          })/*.then(
            fetch("http://localhost:8080/Chess7/chessGestion/utilisateur",{
          method: "post",
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           /* email: this.state.email,
            mdp:this.state.mdp,
            nom: this.state.nom,
            prenom: this.state.prenom,
            adresse: this.state.adresse,
            droit:this.state.droit
          })
        })*//*.then(
          fetch("http://localhost:8080/Chess7/chessGestion/listeutilisateur",{
            method: "get",
            headers: {
              'Accept' : 'applicationU/json',
              'Content-Type': 'applicationU/json'
            }})        
        .then( (response) =>
        response.json() ).then( (data) => console.log(data))
        )*/
       /* .then(
          fetch('http://localhost:8080/Chess7/chessGestion/idcompte/'+this.state.email,{
            method: "get",
            headers: {
              'Accept' : 'applicationUI/json',
              'Content-Type': 'applicationUI/json'
            }
          }
            )        
        .then( (response) =>
        response.json() ).then( (data) => console.log(data))
        )*/
        
          //)
      }
    
      render() {
        /*const handleRoute = () =>{ 
          history.push("../../");
        }*/
        
        return (
            <div className="centrage"> <form onSubmit={this.handleSubmit}>
              <Header />
            <label>
              {this.makeField('email','Email ',this.handleEmailChange,'(*)')}
            </label>
            <br />
            <label>
              {this.makeField('mdp','Mot de passe ',this.handleMdpChange, '(*)')}
            </label>
            <br />
            <label>
              {this.makeField('nom','Nom ',this.handleNomChange, '(*)')}
            </label>
            <br />
            <label>
              {this.makeField('prenom','Prenom ',this.handlePrenomChange, '(*)')}
            </label>
            <br /> 
            <label>
              {this.makeField('adresse','Adresse: ',this.handleAdresseChange, '')}
            </label>
            <br /> 
            <label>
            {this.makeField('profilPic','Image: ',this.handlePictureChange, '')}
            </label>
            <br />
            <div class="wrap" >
              <input class="button" type="submit" value="S'inscrire" />
            </div>
          </form>
          </div>
        ); 
        }
    }<br />