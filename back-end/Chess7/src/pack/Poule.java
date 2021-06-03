package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Poule implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@OneToMany(mappedBy="poule",fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	private Collection <SousEquipe> listeEquipe;
	
	@ManyToOne
	private Tournoi tournoi;
	
	@OneToMany(mappedBy="poule",cascade = CascadeType.ALL)
	private Collection <Match> matches;
	
	public Collection<SousEquipe> getListeEquipe() {
		return listeEquipe;
	}
	public void setListeEquipe(Collection<SousEquipe> listeEquipe) {
		this.listeEquipe = listeEquipe;
	}
	public Tournoi getTournoi() {
		return tournoi;
	}
	public void setTournoi(Tournoi tournoi) {
		this.tournoi = tournoi;
	}
	public Collection<Match> getMatches() {
		return matches;
	}
	public void setMatches(Collection<Match> matches) {
		this.matches = matches;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	

}
