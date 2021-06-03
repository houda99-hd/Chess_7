package pack;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.ejb.Remote;
import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Singleton
@Remote
@Path("/")
public class TournoiFacade {
	
	@PersistenceContext
	private EntityManager em;
	
	@POST
    @Path("/Tournoi")
    @Consumes({"application/json"})
    public void setTournoi(Tournoi T) {
        em.persist(T);
    };
    
    @PUT
    @Path("/setCreateurT/{nom_tournoi}/{id_utilisateur}")
    @Produces({"application/json"})
    public boolean setCreateur(@PathParam("nom_tournoi") String nom_tournoi, @PathParam("id_utilisateur") String id_utilisateur) {
    	Tournoi t = em.find(Tournoi.class, nom_tournoi);
		Utilisateur u = em.find(Utilisateur.class, Integer.parseInt(id_utilisateur));
		t.setCreateur(u);
		em.merge(t);
		return true;
	};
    
    @GET
    @Path("/verifTournoi/{nom_tournoi}")
    @Produces({"application/json"})
    public boolean verifTournoi(@PathParam("nom_tournoi") String nom_tournoi) {
		Tournoi t = em.find(Tournoi.class, nom_tournoi);
		if (t==null) {
			return true;
		} else {
			return false;
		}
	};
    
    @GET
    @Path("/getListeTournoi")
    @Consumes({"application/json"})
    public Collection<Tournoi> getListeTournoi() {
    	TypedQuery<Tournoi> req = em.createQuery("SELECT t FROM Tournoi t", Tournoi.class) ;
		Collection<Tournoi> lt = req.getResultList();
		Collection<Tournoi> newListe = new ArrayList<Tournoi>();
		for (Tournoi t : lt) {
			Tournoi tn = new Tournoi();
			tn.setNomT(t.getNomT());
			tn.setLogo(t.getLogo());
			tn.setDescription(t.getDescription());
			newListe.add(tn);
		}
		return newListe;
    };
    
    @GET
    @Path("/Tournoi/{nom_tournoi}")
    @Produces({"application/json"})
    public Tournoi getTournoi(@PathParam("nom_tournoi") String nom_tournoi) {
        Tournoi t = em.find(Tournoi.class, nom_tournoi);
        Tournoi nt = new Tournoi();
        nt.setNomT(t.getNomT());
        nt.setLogo(t.getLogo());
        nt.setDescription(t.getDescription());
        return nt;
    };
    
    @GET
    @Path("/getListeTournoiU/{id_utilisateur}")
    @Consumes({"application/json"})
    public Collection<Tournoi> getListeTournoiU(@PathParam("id_utilisateur") String id_utilisateur) {
        Utilisateur u = em.find(Utilisateur.class, Integer.parseInt(id_utilisateur));
        Collection<Tournoi> lt = u.getTournoiCree();
        Collection<Tournoi> newListe = new ArrayList<Tournoi>();
        for (Tournoi t : lt) {
            Tournoi tn = new Tournoi();
            tn.setNomT(t.getNomT());
            tn.setLogo(t.getLogo());
            newListe.add(tn);
        }
        return newListe;
    };
    
    @GET
    @Path("/Tournoi/getParticipants/{nom_tournoi}")
    public Collection <SousEquipe> getParticipants(@PathParam("nom_tournoi")String nom_tournoi)
    {
    	Tournoi t = em.find(Tournoi.class, nom_tournoi);
    	return t.getSousEquipes();
    }
    
    @GET
    @Path("/TournoiInscription/{nom_tournoi}/{nom_equipe}/{id_utilisateur}")
    @Produces({"application/json"})
    public int inscription(@PathParam("nom_tournoi") String nom_tournoi,@PathParam("nom_equipe") String nom_equipe,
                            @PathParam("id_utilisateur") String id_utilisateur) {
        try {
        	TypedQuery<SousEquipe> req = em.createQuery("SELECT se FROM SousEquipe se WHERE se.tournoi.nomT=:nom_tournoi"+
                    " AND se.nom=:nom_equipe", SousEquipe.class) ;
			req.setParameter("nom_tournoi", nom_tournoi);
			req.setParameter("nom_equipe", nom_equipe);
            SousEquipe se = req.getSingleResult();
            Collection<Utilisateur> listJ = se.getListeJoueurs();
            Tournoi t = em.find(Tournoi.class, nom_tournoi);
            if (listJ.size()<t.getNbMaxJoueurs()) { //INSCRIPTION
                Utilisateur u = em.find(Utilisateur.class, Integer.parseInt(id_utilisateur));
                listJ.add(u);
                se.setListeJoueurs(listJ);
                se.setNbParticipants(se.getNbParticipants()+1);
                em.merge(se);
                return 0;
            } else { // NOMBRE JOUEURS MAX ATTEINT
                return 1;
            }
        	} catch (NoResultException e) { // NOUVELLE SOUS EQUIPE
            Tournoi t = em.find(Tournoi.class, nom_tournoi);
            Collection<SousEquipe> listSe = t.getSousEquipes();
            if (listSe.size()<t.getNbMaxEquipe()) { //INSCRIPTION
                SousEquipe se = new SousEquipe();
                se.setNom(nom_equipe);
                se.setTournoi(t);
                se.setNbParticipants(1);
                Collection<Utilisateur> listu = new ArrayList<Utilisateur>();
                Utilisateur u = em.find(Utilisateur.class, Integer.parseInt(id_utilisateur));
                listu.add(u);
                se.setListeJoueurs(listu);
                em.persist(se);
                return 0;
            } else { // NOMBRE EQUIPES MAX ATTEINT
                return 2;
            }
        }
    };
    
    
    @GET
    @Path("/getPoules/{nom_tournoi}")
    public  Map<Poule,Collection<SousEquipe>> getListPouleEquipe(@PathParam("nom_tournoi")String nom_tournoi){
    	
    	Tournoi t = em.find(Tournoi.class, nom_tournoi);
    	Collection<Poule> poules = t.getPoules();
    	
	    Map<Poule,Collection<SousEquipe>>map =new HashMap();
	
	    Collection<Poule> listePoules = new ArrayList<Poule>();
	    for (Poule p : poules) { 
	    	Collection<SousEquipe> sousEquipes = new ArrayList<SousEquipe>(p.getListeEquipe());
	    	Collections.sort((List<SousEquipe>) sousEquipes, 
                    (e1, e2) -> ((SousEquipe) e2).getNombreVictoire()-((SousEquipe) e1).getNombreVictoire());
	    	map.put(p,sousEquipes);
	    }
  
	    return map;
    }
    
    @GET
    @Path("/peutGenerer/{nom_tournoi}")
    @Produces({"application/json"})
    public int peutGenerer(@PathParam("nom_tournoi") String nom_tournoi) {
        Tournoi t = em.find(Tournoi.class, nom_tournoi);
        if (t.getSousEquipes().size()<2) {return 1;}
        if(t.isGenerated()) {
            return 2;
        } else {
            return 0;
        }
    };
    
    @PUT
    @Path("/genererTournoi/{nom_tournoi}")
    @Consumes({"application/json"})
    public boolean genererTournoi(@PathParam("nom_tournoi") String nom_tournoi) {
        Tournoi t = em.find(Tournoi.class, nom_tournoi);
        Collection<SousEquipe> listeSe = t.getSousEquipes();
        //CREER POULE (UNE SEULE POUR LE MOMENT)
        Poule p = new Poule();
        p.setListeEquipe(listeSe);
        p.setTournoi(t);
        em.merge(p);
        t.setGenerated(true);
        em.merge(t);
        return true;
    };

}
