package pack;

import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Utilisateur implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private String nom;
	private String prenom;
	private String profilPic;
	private String niveau;
	private String adresse;
	private Droit droit;
	
	@OneToOne(mappedBy="proprietaire",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	Compte compte;
	
	@OneToMany(mappedBy="createurEquipe",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	Set<Equipe> EquipeCree; 
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	Set<Equipe> listEquipe;

	/**** Getters and Setters ****/
	
	private static final long serialVersionUID = 1L;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getProfilPic() {
		return profilPic;
	}
	public void setProfilPic(String profilPic) {
		this.profilPic = profilPic;
	}
	public String getNiveau() {
		return niveau;
	}
	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Droit getDroit() {
		return droit;
	}
	public void setDroit(Droit droit) {
		this.droit = droit;
	}
	public Compte getCompte() {
		return compte;
	}
	public void setCompte(Compte compte) {
		this.compte = compte;
	}
	public Set<Equipe> getEquipeCree() {
		return EquipeCree;
	}
	public void setEquipeCree(Set<Equipe> equipeCree) {
		EquipeCree = equipeCree;
	}
	public Set<Equipe> getListEquipe() {
		return listEquipe;
	}
	public void setListEquipe(Set<Equipe> listEquipe) {
		this.listEquipe = listEquipe;
	}
}
