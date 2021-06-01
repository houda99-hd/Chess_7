import React from 'react'
import '../../styles.css';
import { Link } from 'react-router-dom'
import Header from '../Header'

export default class ListesTournoi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tournois: []
        };
    }

    componentDidMount() {
        fetch ("http://localhost:8080/Chess7/chessGestion/getListeTournoi",{
            method: "get",
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
        }}).then(res => res.json())
        .then(
        (result) => {
            this.setState({
                tournois: result
        });
        })
    }

    handleTournoi(event, i) {
        //this.props.history.push({pathname:"/profil"});
       this.props.history.push({pathname: '/tournoiPage', state:{nom_tournoi: i}});
    }
    
    render() {
        const elements = [];
        for (const[, value] of this.state.tournois.entries()) {
            elements.push(
                   <div class="img-container-equipe">
                      <p class="flotte">
                          <div className = "img-container-equipe">
                              <img src={value.logo} className = "img-container-equipe" alt="article2"/>
                          </div>
                      </p>
                      <p>
                          <b>Nom du tournoi :</b> 
                          <button type="button" onClick={(e) => this.handleTournoi(e, value.nomT)}>
                          {value.nomT}
                            </button>
                           
                          <br/>
                          <b>Description :</b> {value.description}
                          <br/>
                          <span className="créé" style={{color: 'green'}}> [ Créé ]</span>
                      </p>
                  </div>
                
            )
        }
        return (
            <div>
                 <Header />
                <div id="navbar">
                            <Link class="navbar_link" to="/" >Accueil</Link>
                            <Link class="navbar_link" to="/listesTournoi" >Tournois</Link>
                            <Link class="navbar_link" to="/sponsor" >Sponsors</Link>
                </div>
                {elements}
            </div>
            );
        }
    }