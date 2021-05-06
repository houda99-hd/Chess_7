import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Identification from '../Identification'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../../App.css';

function App() {
  return (

    //<div className="App">
    <BrowserRouter>
      <Header />

      <Switch>
      <Route exact path = "/" component= {Landing}></Route>
      <Route path = "/identification" component= {Identification}></Route>
      </Switch>

      <Footer />
     </BrowserRouter> 
     //</div>
  );
}

export default App;
