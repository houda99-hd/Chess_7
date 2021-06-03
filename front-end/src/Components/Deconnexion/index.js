import React from 'react';

import '../../styles.css';
import '../../App.css';
import {  delete_cookie } from 'sfcookies';
  
export default class Deconnexion extends React.Component {

      componentDidMount() {
            delete_cookie('utilisateur');
            this.props.history.push({pathname:"/"});
        }

       render() {
            return (
                <div>
                    {this.componentDidMount()}
                </div>
            )
       }
}