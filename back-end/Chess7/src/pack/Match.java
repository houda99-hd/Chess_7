package pack;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Match implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@ManyToOne
	private Poule poule;
	
	private String NomEquipe1;
	
	private String NomEquipe2;
	
	@ManyToOne
	private Tournoi tournoi;
	
	public Match() {
		super();
	}
	public Poule getPoule() {
		return poule;
	}
	public void setPoule(Poule poule) {
		this.poule = poule;
	}
	public String getEquipe1() {
		return NomEquipe1;
	}
	public void setEquipe1 (String equipe1) {
		this.NomEquipe1 = equipe1;
	}
	public String getEquipe2() {
		return NomEquipe2;
	}
	public void setEquipe2(String equipe2) {
		this.NomEquipe2 = equipe2;
	}
	public Tournoi getTournoi() {
		return tournoi;
	}
	public void setTournoi(Tournoi tournoi) {
		this.tournoi = tournoi;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}