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

@Entity
public class Sponsor implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private String nomS;
	
	private String image;
	
	private String Description;
	
	private int contribution;
	
	@ManyToMany(mappedBy="sponsors", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private Collection<Tournoi> tournois;
	
	public String getNomS() {
		return nomS;
	}
	public void setNomS(String nomS) {
		this.nomS = nomS;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public int getContribution() {
		return contribution;
	}
	public void setContribution(int contribution) {
		this.contribution = contribution;
	}
	
	
}
