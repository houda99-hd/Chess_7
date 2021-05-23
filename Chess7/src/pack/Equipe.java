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

@Entity
public class Equipe implements Serializable  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String nom;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Utilisateur createurEquipe;
	private String description;
	private String logo;
	@ManyToMany(mappedBy="listEquipe",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Collection<Utilisateur> ownerEquipe;
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public Utilisateur getCréateurEquipe() {
		return createurEquipe;
	}
	public void setCréateurEquipe(Utilisateur créateurEquipe) {
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
	public Collection<Utilisateur> getOwnerEquipe() {
		return ownerEquipe;
	}
	public void setOwnerEquipe(Collection<Utilisateur> ownerEquipe) {
		this.ownerEquipe = ownerEquipe;
	}
}
