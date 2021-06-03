package pack;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Compte implements Serializable {
	
	@Id
	private String email;
	
	private String mdp;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	Utilisateur proprietaire;
	
	/**** Getters and Setters ****/
	
	private static final long serialVersionUID = 1L;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMdp() {
		return mdp;
	}
	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	public Utilisateur getProprietaire() {
		return proprietaire;
	}
	public void setProprietaire(Utilisateur proprietaire) {
		this.proprietaire = proprietaire;
	}
	
}
