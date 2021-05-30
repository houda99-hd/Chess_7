import React from 'react'
//import { Link } from 'react-router-dom'
//import logo from '../../Images/logo.jpg';
import Header from '../Header'

import '../../styles.css';

class Equipe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {cpt: 0};
        this.incrementer = this.incrementer.bind(this);
    }


    incrementer() {
        const mycpt = this.state.cpt + 1;
        this.setState({cpt: mycpt });
    }



    render() {
        
        return(
            <div>
              <Header />
                <h2>{this.state.cpt}</h2>
                <button onClick={this.incrementer}>S'idetifier</button>
            </div>

        );
    }
}
export default Equipe;