import Landing from '../Landing'
import Footer from '../Footer'
import Identification from '../Identification'
import Inscription from '../Inscription'
import Profil from '../Profil'
import Equipe from '../Equipe'
import Sponsor from '../Sponsors'
import Tournois from '../Tournois'
import Tournois_pres from '../Tournois_pres'

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../../App.css';

function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route exact path = "/" component= {Landing}></Route>
        <Route path = "/profil" component= {Profil} ></Route>
        <Route path = "/equipe" component= {Equipe}></Route>
        <Route path = "/identification" component= {Identification}></Route>
        <Route path = "/inscription" component= {Inscription}></Route>
        <Route path = "/sponsor" component= {Sponsor}></Route>
        <Route path = "/tournois" component= {Tournois}></Route>
        <Route path = "/tournois_pres" component= {Tournois_pres}></Route>
      </Switch>

      <Footer />
     </BrowserRouter> 
  );
}

export default App;
