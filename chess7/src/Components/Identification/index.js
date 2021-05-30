import React from 'react'
//import { Link } from 'react-router-dom'

//import data from '../../db.json';
//import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { bake_cookie } from 'sfcookies';
import Header from '../Header'

export default class Identification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id :'',
          mdp: '',
          error: null,
          isLoaded: false,
          utilisateurs: []
        };
    
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleMdpChange = this.handleMdpChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
      }
      

      handleIdChange(event) {
        this.setState({id: event.target.value });
      }
    
      handleMdpChange(event) {
        this.setState({mdp: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        fetch ("http://localhost:8080/Chess7/chessGestion/verifemail/"+ this.state.id,{
          method: "get",
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }}
        )
        .then((res) => res.json())
        .then((data) => {
          if (!data) {
            fetch ("http://localhost:8080/Chess7/chessGestion/verifmdp/"+ this.state.id+ "/"+ this.state.mdp,{
              method: "get",
              headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
              }}
            )
            .then((res) => res.json())
            .then((data1) => {
              if (data1) {
                axios.get(" http://localhost:8080/Chess7/chessGestion/idcompte/"+ this.state.id)
                  .then(resu => bake_cookie('utilisateur', resu.data));
                  this.props.history.push({pathname:"/profil"}); 
              } else {
                alert('Mot de passe incorrect');
              }
            })
            } else {
              alert('Email introuvable.');
            }
          })
      //axios.get(" http://localhost:8080/Chess7/chessGestion/idcompte/"+ this.state.id)
      /*  {method : 'get',
      headers : {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      }})//.then( (res) => res.text())*/
      //  .then(resu => bake_cookie('utilisateur', resu.data));
       //console.log(res);
        //delete_cookie('utilisateur');
      //  this.props.history.push({pathname:"/profil"}); //,
       /* search: '?mdp=' + this.state.mdp,
        state: {id_user : this.state.id}});*/
       // })
        /*.then( (res) => console.log(res))
        .then((res) =>/* <Link to= '/profil?id_user='></Link>)
        */
        //<Link to= {url}></Link>
      }
      

      componentDidMount() {
       /*let request = new XMLHttpRequest();
        let requestURL = '../../db.json';
        request.open('GET', requestURL);
        request.utilisateur = ''+ this.state.id; // now we're getting a string!
        request.send(); */
        
      /*  fetch(" http://localhost:8080/Chess7/chessGestion/idcompte/"+ this.state.email)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                utilisateurs: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ).then( (response) =>
          response.json() ).then( (data) => console.log(data))
          */
      }
    
      render() {
        return (
            <div class="centrage"> <form onSubmit={this.handleSubmit}>
              <Header />
              <h1>Bon retour</h1>
            <label>
              Identifiant :
              <input type="identifiant" id={this.state.id} onChange={this.handleIdChange} />
            </label>
            <br />
            <label>
              Mot de passe :
              <input type="password" name = "mdp" value={this.state.value} onChange={this.handleMdpChange} />
            </label>
            <br />
            
            <div class="wrap" >
              <input class="button" type="submit" value="S'identifier" />
              </div>
          </form>
          </div>
        ); 
        /*const { error, isLoaded, utilisateurs } = this.state;
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <ul>
                {utilisateurs.map(utilisateur => (
                  <li key={utilisateur.id}>
                    <br />
                    {utilisateur.identifiant} {utilisateur.mdp} <br />
                    <br />
                  </li>
                ))}
              </ul> 
            );
          } */
        }
    }