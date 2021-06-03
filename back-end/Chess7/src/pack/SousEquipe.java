package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class SousEquipe implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    private String nom;

    private int nbParticipants;

    @ManyToOne
    private Tournoi tournoi;

    @ManyToOne
    private Poule poule;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Collection<Utilisateur> listeJoueurs;

    private int nombreVictoire=0;

    public int getNbParticipants() {
        return nbParticipants;
    }
    public void setNbParticipants(int nbParticipants) {
        this.nbParticipants = nbParticipants;
    }
    public Poule getPoule() {
        return poule;
    }
    public void setPoule(Poule poule) {
        this.poule = poule;
    }
    public int getNombreVictoire() {
        return nombreVictoire;
    }
    public void setNombreVictoire(int nombreVictoire) {
        this.nombreVictoire = nombreVictoire;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public Tournoi getTournoi() {
        return tournoi;
    }
    public void setTournoi(Tournoi tournoi) {
        this.tournoi = tournoi;
    }
    public Collection<Utilisateur> getListeJoueurs() {
        return listeJoueurs;
    }
    public void setListeJoueurs(Collection<Utilisateur> listeJoueurs) {
        this.listeJoueurs = listeJoueurs;
    }

}