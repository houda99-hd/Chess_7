import React from 'react'


const Identification  = () => {
    return (
        <div class="centrage"><form name="formulaire_identification" action="page-envoi.html" method="get">
            <h1>Bon retour</h1>
            <p>
                <br />
                 <input type="text" id="identifiant" value="" placeholder="identifiant" />
            </p>
            <p>
                <br />
                <input type="text" id="mdp" value="" placeholder="mot de passe"/>
            </p>

            <p>
                <input type="submit" value="S'identifier" />
             </p>
            </form>
        </div>
    )
    }
export default Identification