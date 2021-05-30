import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';

//import {connect} from 'react-redux';
import DefaultUserPic from "../../Images/team-male.jpg";
//import { useHistory,useLocation } from 'react-router-dom';
//const axios = require('axios');
//import axios from 'axios';
import history from '../history';

import { Link } from 'react-router-dom'
import '../../styles.css';
import '../../App.css';
import { read_cookie , delete_cookie } from 'sfcookies';
  
export default class Profil extends React.Component {

   // const res = makeGetRequest(id_user);
    //console.log(res);

    //let [responseData, setResponseData] = React.useState('');
    //var user_email = '';

        
    /*fetch(" http://localhost:8080/Chess7/chessGestion/idcompte/"+ id_user)
        .then(res => res.json())
        .then( 
            (data) => //console.log(new Object(res))
                   //user_name=utilisateur.id
                   console.log(data)
            )*/
        
       /* axios.
        get(" http://localhost:8080/Chess7/chessGestion/idcompte/"+ id_user)
        .then(res=>{
            setResponseData(res.data);
          // console.log(res.data.nom);
            //this.setState({email:res.data.results[0].email});
           // u.push(res);
            console.log(res);
        })*/
       // {console.log(makeGetRequest(id_user,'nom'))}

       constructor(props) {
            super(props);
            //this.state = this.props.location.state // In the ||, set default state.
           // this.props.history.replace(this.props.location.state, this.state); // Update state of current entry in history stack.
           let data = read_cookie('utilisateur');
           this.state = {
                user_id : ''+data.id,
                nom : ''+data.nom,
                prenom : ''+data.prenom,
                adresse : ''+data.adresse,
                droit : ''+data.droit
            }
       }

       handleDeco(event) {
        delete_cookie('utilisateur');
        history.push({pathname:"/"});
      }

     /*  componentWillReceiveProps(nextProps) {
        var routeChanged = nextProps.location !== this.props.location
        this.setState({ user_id: routeChanged.state.id_user })
      }*/

       // makeGetRequest(value) {

        /*let res = axios.get('http://localhost:8080/Chess7/chessGestion/idcompte/'+ i);
      
        let data = res.data;
        return data;*/
       // axios.get(" http://localhost:8080/Chess7/chessGestion/idcompte/"+ this.state.user_id)
       // .then(res =>
            //this.setState({nom : res.data.nom});
            //this.setState({prenom : res.data.prenom})
            //console.log(res.data)
           /* {switch (value) {
                case 'nom':
                    return res.data.nom;
                    break;
            
                default:
                    break;
            }
            }
        );
      }*/

       render() {
        //{const res = this.makeGetRequest('nom');
       // {console.log(this.props.location.state)}
       //{this.props.history.go()}
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

                <Container>
                <Row>
                    
            <Col className="container-2">
            <img src={DefaultUserPic} alt="profils pic" />
            </Col>
                <Col>
                    <div className="container-2">
                                    <h2> Nom: {this.state.nom} </h2>
                                    <h2> Prenom: {this.state.prenom} </h2>
                                    <h2> Adresse: {this.state.adresse} </h2>
                                    <h2> Droit: {this.state.droit} </h2>
                    </div>
                </Col>

            </Row>
                </Container>
                <div className="bouton-container">
                <div class="wrap" >
                    <Link class="button" to= "/">Mes équipes</Link>
                </div>
                <div className="bouton-container">
                    <Link class="button" to= "/">Créer équipe</Link>
                </div>
                <div className="bouton-container">
                    <Link class="button" to= "/">S'inscrire dans une équipe</Link>
                </div>
                <div className="bouton-container">
                    <Link class="button" to= "/">Créer un tournoi</Link>
                </div>
            </div>
                </div>
            );}
}

/*const mapStatetoProps=(state)=>{
    return{
        user_id:state.user.userDetails.userid,
        username:state.user.userDetails.username,
       email:state.user.email,
       profileImage: state.user.profileImage,
       msg:state.user.msg
    }
   }*/
   
   
   //export default Profil
   //export default connect(mapStatetoProps)(Profil);