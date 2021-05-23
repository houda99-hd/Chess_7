package pack;

import java.util.Collection;

import javax.ejb.LocalBean;
import javax.ejb.Singleton;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 * Session Bean implementation class Facade
 */
@Singleton
@Path("/")
public class Facade {

    @PersistenceContext
	private EntityManager em;
    
    @GET
    @Path("/utilisateur")
    @Produces({"application/json"})
    public Collection<Utilisateur> listeUtilisateur() {
		TypedQuery<Utilisateur> req = em.createQuery("select p from Utilisateur p", Utilisateur.class) ;
		Collection<Utilisateur> lp = req.getResultList();
		return lp;
	};

	@POST
    @Path("/utilisateur")
    @Consumes({"application/json"})
    public void setUtilisateur(Utilisateur u) {
		em.persist(u);
	};
	
	/*@POST
    @Path("/droit")
    @Consumes({"application/json"})
    public void setDroit(Droit u) {
		em.persist(u);
	};
	
    @GET
    @Path("/droit")
    @Produces({"application/json"})
    public Collection<Droit> listeDroit() {
		TypedQuery<Droit> req = em.createQuery("select p from Droit p", Droit.class) ;
		Collection<Droit> lp = req.getResultList();
		return lp;
	};*/
}
