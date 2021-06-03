import Landing from '../Landing'
import Footer from '../Footer'
import Identification from '../Identification'
import Inscription from '../Inscription'
import Profil from '../Profil/index'
import Equipe from '../Equipe/index'
import EquipeListes from '../Equipe/listeEquipes'
import EquipeInscription from '../Equipe/inscriptionEquipe'
import Sponsor from '../Sponsors/sponsors'
import ModifierProfil from '../Profil/modifierProfil'
import ModifierMdp from '../Profil/modifierMdp'
import TournoiPage from '../Tournois/index'
import CreationTournoi from '../Tournois/creationTournoi'
import ListesTournoi from '../Tournois/listesTournois'
import ParticipantsTournoi from '../Tournois/participantsTournoi'
import EquipeTournoi from '../Tournois/equipeTournoi'
import MesTournoisCrees from '../Tournois/mesTounois'
import Deconnexion from '../Deconnexion'

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../../App.css';

function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route exact path = "/" component= {Landing}></Route>
        <Route path = "/profil" component= {Profil} ></Route>
        <Route path = "/equipeCreation" component= {Equipe}></Route>
        <Route path = "/equipeListes" component= {EquipeListes}></Route>
        <Route path = "/equipeInscription" component= {EquipeInscription}></Route>
        <Route path = "/identification" component= {Identification}></Route>
        <Route path = "/inscription" component= {Inscription}></Route>
        <Route path = "/deconnexion" component= {Deconnexion}></Route>

        <Route path = "/tournoiPage" component= {TournoiPage}></Route>
        <Route path = "/creationTournoi" component= {CreationTournoi}></Route>
        <Route path = "/listesTournoi" component= {ListesTournoi}></Route>
        <Route path = "/participantsTournoi" component= {ParticipantsTournoi}></Route>
        <Route path = "/equipeTournoi" component= {EquipeTournoi}></Route>
        <Route path = "/listerMesTournois" component= {MesTournoisCrees}></Route>

        <Route path = "/sponsor" component= {Sponsor}></Route>
        <Route path = "/modifierProfil" component= {ModifierProfil}></Route>
        <Route path = "/modifierMdp" component= {ModifierMdp}></Route>
      </Switch>

      <Footer />
     </BrowserRouter> 
  );
}

export default App;
