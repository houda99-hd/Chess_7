package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Utilisateur implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public Collection<Droit> getListdroit() {
		return listdroit;
	}
	public void setListdroit(Collection<Droit> listdroit) {
		this.listdroit = listdroit;
	}
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
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String nom;
	private String prenom;
	private String profilPic;
	private String niveau;
	
	@OneToMany(mappedBy="owner",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	Collection<Droit> listdroit;
	
	
}
