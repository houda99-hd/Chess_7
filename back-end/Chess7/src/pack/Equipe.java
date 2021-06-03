package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Equipe implements Serializable  {

	@Id
	private String nom;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Utilisateur createurEquipe;
	@Basic(fetch = FetchType.EAGER)
	private String description;
	@Basic(fetch = FetchType.EAGER)
	private String logo;
	@ManyToMany(mappedBy="listEquipe",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Collection<Utilisateur> listeMembres;
	
	/**** Getters and Setters ****/
	
	private static final long serialVersionUID = 1L;
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public Utilisateur getCreateurEquipe() {
		return createurEquipe;
	}
	public void setCreateurEquipe(Utilisateur créateurEquipe) {
		this.createurEquipe = créateurEquipe;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	public Collection<Utilisateur> getListeMembres() {
		return listeMembres;
	}
	public void setListeMembres(Collection<Utilisateur> listeMembres) {
		this.listeMembres = listeMembres;
	}
	public void addMembre(Utilisateur membre) {
		this.listeMembres.add(membre);
	}
}