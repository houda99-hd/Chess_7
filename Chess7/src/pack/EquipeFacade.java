package pack;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

import javax.ejb.Remote;
import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.annotation.PostConstruct;

/**
 * Session Bean implementation class Facade
 */
@Singleton
@Remote
@Path("/")
public class EquipeFacade {

    @PersistenceContext
	private EntityManager em;
    
    @POST
    @Path("/equipe")
    @Consumes({"application/json"})
    public void setEquipe(Equipe e) {
        //int id_utilisateur = e.getCreateurEquipe().getId();
        //Utilisateur u = em.find(Utilisateur.class, id_utilisateur);
        //e.setCreateurEquipe(u);
        //e.addMembre(u);
        em.persist(e);
    };
    
    @GET
    @Path("/setCreateur/{id_equipe}/{id_utilisateur}")
    @Produces({"application/json"})
    public boolean setCreateur(@PathParam("id_equipe") String id_equipe, @PathParam("id_utilisateur") String id_utilisateur) {
        Equipe e = em.find(Equipe.class, id_equipe);
        Utilisateur u = em.find(Utilisateur.class, Integer.parseInt(id_utilisateur));
        e.setCreateurEquipe(u);
       // e.addMembre(u);
        Set<Equipe> listeEquipes = u.getListEquipe();
        listeEquipes.add(e);
        u.setListEquipe(listeEquipes);
        em.merge(e);
        em.merge(u);
        return true;
    };
    
    @GET
    @Path("/verifequipe/{id_equipe}")
    @Produces({"application/json"})
    public boolean verifEquipe(@PathParam("id_equipe") String id_equipe) {
		Equipe e = em.find(Equipe.class, id_equipe);
		if (e==null) {
			return true;
		} else {
			return false;
		}
	};
	
    @GET
    @Path("/addMembre/{id_equipe}/{id_utilisateur}")
    @Produces({"application/json"})
    public boolean addMembre(@PathParam("id_equipe") String id_equipe, @PathParam("id_utilisateur") String id_utilisateur) {
        Equipe e = em.find(Equipe.class, id_equipe);
        Utilisateur u = em.find(Utilisateur.class, Integer.parseInt(id_utilisateur));
        Set<Equipe> listeEquipes = u.getListEquipe();
        listeEquipes.add(e);
        u.setListEquipe(listeEquipes);
        em.merge(e);
        em.merge(u);
        return true;
	};
	
    @GET
    @Path("/listeEquipes/{id_utilisateur}")
    @Produces({"application/json"})
    public Collection<Equipe> listeComptes(@PathParam("id_utilisateur") String id_utilisateur) {
    	Utilisateur u = em.find(Utilisateur.class, Integer.parseInt(id_utilisateur));
		return u.getListEquipe();
	};
}