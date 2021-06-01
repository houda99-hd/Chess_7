import React from 'react'
import '../../styles.css';
import logoChess from '../../Images/logo_chesscom.png'
import logoBlitz from '../../Images/logo_BLITZ.png'
import logoFide from '../../Images/logo_FIDE.png'
import logotheXpert from '../../Images/logo_theXpert.png'

import Header from '../Header'

const Sponsors = () => (
<div>
    <Header />
    <h1 class="sponsors_page_title"> Nos Sponsors </h1>

    <article class="sponsors_page_desc">
        Vous trouverez sur cette page la liste de nos sponsors ainsi qu'une présentation de chacun. En cliquant sur les logos vous pourrez accéder à leurs différents sites.<br></br>
        N'hésitez pas à y jeter un oeil, chacun d'eux peut vous intéresser !
    </article>

    <div class="container sponsor">
        <div className= "sponsor-page" >
            <div className="sponsor-image">
            <a href="http://txplace.com" target="_blank">
                    <img  src={logotheXpert} alt="sponsor1"></img>
                </a>
            </div>
            <div className="sponsor-texte" >
            Une recherche d'emploi ou de stage?<br></br>
                Soyez visible des recruteurs à l'aide de la plateforme de valorisation des compétences txplace.com.<br></br><br></br>
                <strong>TheXpert est une startup dont le but est de faciliter la prise de décision lors des processus de recrutement en mettant en avant les réelles compétences des candidats. Ainsi TheXpert met en place une plateforme interactive txplace.com qui permet aux candidats et aux entreprises de trouver le match parfait!</strong><br></br><br></br>
                Aujourd'hui plus que jamais faites la différence! Montrez vos compétences et permettez aux recruteurs de voir l’atout non négligeable que vous représentez. N'attendez plus et réalisez nos tests.<br></br><br></br>
                Soyez plus qu'un CV et rejoignez nous sur txplace.com<br></br><br></br>
                Note: pour ceux participant au tournoi d'échecs, cette compétence sera notifiée (s'ils le souhaitent) dans leur profil.<br></br>
                A bientôt, la team TheXpert.
            </div>
        </div>
        <div className= "sponsor-page" >
            <div className="sponsor-image" >
            <a href="https://www.chess.com" target="_blank">
                    <img src={logoChess} alt="Chess.com"></img>
                </a>
            </div>
            <div  className="sponsor-texte">
            Chess.com est le numéro 1 mondial des échecs en ligne avec plus de 30 millions de membres venant des 4 coins de la planète !<br></br>
                Jouez à la cadence qui vous convient, du bullet, aux parties par correspondance en passant évidemment par le blitz et le rapide, il y en a pour tous les goûts !<br></br>
                Testez des variantes amusantes comme le brouillard de guerre, le blitz à 4 ou même le Shaturanga, ancêtre indien du jeu des rois.<br></br>
                Progressez avec tous nos outils pédagogiques : leçons en français, vidéos de Grands Maîtres, exercices tactiques, sprints de problèmes, le ludique est notre priorité !<br></br>
                Suivez tous les grands événements avec les commentaires en direct et nos articles, toujours à la pointe de l'actualité échiquéenne !<br></br>
                Enfin, intégrez notre communauté pour représenter la France contre les autres nations, échangez sur nos forums et retrouvez chaque jours vos amis sur Chess.com !
            </div>
        </div>

        <div className= "sponsor-page">
            <div className="sponsor-image" >
            <a href="https://fide.com/" target="_blank">
                <img src={logoFide} alt="FIDE"></img>
            </a>
            </div>
    
            <div  className="sponsor-texte">
            La Fédération internationale des échecs (FIDE) est une organisation qui regroupe les fédérations nationales du jeu d'échecs et en gère les compétitions au niveau mondial.<br></br>
            La devise de la FIDE est Gens una sumus, « Nous sommes une seule famille ».
            </div>
        </div>
        </div>
</div>
)
export default Sponsors