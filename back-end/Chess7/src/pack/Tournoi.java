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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Tournoi implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private String nomT;
	
	private int nbMaxEquipe;
	
	private String description;
	
	private boolean generated;
	
	private int nbMaxJoueurs; //par equipe
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Utilisateur createurTournoi;
	
	@OneToMany(mappedBy="tournoi")
	private Collection<SousEquipe> sousEquipes;
	
	@OneToMany(mappedBy="tournoi")
	private Collection<Poule> poules;
	
	@OneToMany(mappedBy="tournoi")
	private Collection<Match> matchs;
	
	@ManyToMany
	private Collection<Sponsor> sponsors;
	
	private String logo;
	
	public String getNomT() {
		return nomT;
	}
	public void setNomT(String nomT) {
		this.nomT = nomT;
	}
	public Collection<SousEquipe> getJoueurs() {
		return sousEquipes;
	}
	public void setSousEquipes(Collection<SousEquipe> sousEquipes) {
		this.sousEquipes = sousEquipes;
	}
	public Utilisateur getCreateur() {
		return createurTournoi;
	}
	public void setCreateur(Utilisateur createur) {
		this.createurTournoi = createur;
	}
	public Utilisateur getCreateurTournoi() {
		return createurTournoi;
	}
	public void setCreateurTournoi(Utilisateur createurTournoi) {
		this.createurTournoi = createurTournoi;
	}
	public Collection<Match> getMatchs() {
		return matchs;
	}
	public void setMatchs(Collection<Match> matchs) {
		this.matchs = matchs;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	public Collection<SousEquipe> getSousEquipes() {
		return sousEquipes;
	}
	public Collection<Poule> getPoules() {
		return poules;
	}
	public void setPoules(Collection<Poule> poules) {
		this.poules = poules;
	}
	public Collection<Sponsor> getSponsors() {
		return sponsors;
	}
	public void setSponsors(Collection<Sponsor> sponsors) {
		this.sponsors = sponsors;
	}
	public int getNbMaxEquipe() {
		return nbMaxEquipe;
	}
	public void setNbMaxEquipe(int nbMaxEquipe) {
		this.nbMaxEquipe = nbMaxEquipe;
	}
	public int getNbMaxJoueurs() {
		return nbMaxJoueurs;
	}
	public void setNbMaxJoueurs(int nbMaxJoueurs) {
		this.nbMaxJoueurs = nbMaxJoueurs;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isGenerated() {
		return generated;
	}
	public void setGenerated(boolean generated) {
		this.generated = generated;
	}
	
}