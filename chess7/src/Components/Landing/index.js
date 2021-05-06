import React from 'react'
import article from '../../Images/logo_article1.png';
import '../../styles.css';
import '../../App.css';

const Landing = () => (
    <div>
    <div id="navbar">
                <a class="navbar_link" href="acceuil.html">Accueil</a>
                <a class="navbar_link" href="tournois.html">Tournois</a>
                <a class="navbar_link" href="sponsors.html">Sponsors</a>
    </div>
    <h2 class="homepage_article_title"> Présentation de Chess7 </h2>
        <p>Hello, here is some text without a meaning.  This text should show what 
            a printed text will look like at this place.  If you read this text, 
            you will get no information.  Really?  Is there no information?  Is there 
            a difference between this text and some nonsense like not at all!  A 
            blind text like this gives you information about the selected font, how 
            the letters are written and an impression of the look.  This text should
            contain all letters of the alphabet and it should be written in of the
            original language.There is no need for special content, but the length of
            words should match the language.</p>
        <h2 class="homepage_article_title"> Articles </h2>
            <div class="col-12 col-md-8">
                <p class="flotte">
                    <img src={article} className="App-logo" alt="article1"/>
                </p>
                <p>
                    Hello, here is some text without a meaning.  This text should show what 
                    a printed text will look like at this place.  If you read this text, 
                    you will get no information.  Really?  Is there no information?  Is there 
                    a difference between this text and some nonsense like not at all!  A 
                    blind text like this gives you information about the selected font, how 
                    the letters are written and an impression of the look.  This text should
                    contain all letters of the alphabet and it should be written in of the
                    original language.
                </p>
            </div>
                <div class="col-12 col-md-8">
                <p class="flotte">
                    <img src={article} className="App-logo" alt="article2"/>
                </p>
                <p>
                    Hello, here is some text without a meaning.  This text should show what 
                    a printed text will look like at this place.  If you read this text, 
                    you will get no information.  Really?  Is there no information?  Is there 
                    a difference between this text and some nonsense like not at all!  A 
                    blind text like this gives you information about the selected font, how 
                    the letters are written and an impression of the look.  This text should
                    contain all letters of the alphabet and it should be written in of the
                    original language.
                </p>
                </div>
    </div>
)
export default Landing