package pack;

import java.util.Collection;

import javax.ejb.LocalBean;
import javax.ejb.Remote;
import javax.ejb.Singleton;
import javax.ejb.Stateful;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 * Session Bean implementation class Facade
 */
@Singleton
@Remote
@Path("/")
public class LoginFacade {

    @PersistenceContext
	private EntityManager em;
    
    private Utilisateur utilisateur;
    
    @GET
    @Path("/compte")
    @Produces({"application/json"})
    public Collection<Compte> listeComptes() {
		TypedQuery<Compte> req = em.createQuery("SELECT p FROM Compte p", Compte.class) ;
		Collection<Compte> lc = req.getResultList();
		return lc;
	};

	@POST
    @Path("/compte")
    @Consumes({"application/json"})
    public void setCompte(Compte c) {
		em.persist(c);
		//c.setProprietaire(utilisateur);
		//em.flush();
		//em.getTransaction().commit();
	};
	
    @GET
    @Path("/listeutilisateur")
    @Produces({"application/json"})
    public Collection<Utilisateur> listeUtilisateur() {
		TypedQuery<Utilisateur> req = em.createQuery("SELECT p FROM Utilisateur p", Utilisateur.class) ;
		Collection<Utilisateur> lp = req.getResultList();
		return lp;
	};
	
    @GET
    @Path("/idcompte/{id_email}")
    //@Consumes({"applicationUI/json"})
    @Produces({"application/json"})
    public Utilisateur compteId(@PathParam("id_email") String id_email) {
		Compte c = em.find(Compte.class, id_email);
		return c.getProprietaire();
	};

	@POST
    @Path("/utilisateur")
    @Consumes({"application/json"})
    public void setUtilisateur(Utilisateur u) {
		utilisateur = u;
		em.persist(utilisateur);
	};
	
	@GET
    @Path("/verifemail/{id_email}")
    @Produces({"application/json"})
    public boolean verifEmail(@PathParam("id_email") String id_email) {
        Compte c = em.find(Compte.class, id_email);
        if (c==null) {
            return true;
        } else {
            return false;
        }
    };
    
    @GET
    @Path("/verifmdp/{id_email}/{mdp}")
    @Produces({"application/json"})
    public boolean verifMdp(@PathParam("id_email") String id_email, @PathParam("mdp") String mdp) {
      Compte c = em.find(Compte.class, id_email);
      if (c.getMdp().equals(mdp)) {
        return true;
      } else {
        return false;
      }
    };
    
    @POST
    @Path("/verifmdp/{id_email}/{mdp}")
    @Produces({"application/json"})
    public void modifMdp(@PathParam("id_email") String id_email, @PathParam("mdp") String mdp) {
      Compte c = em.find(Compte.class, id_email);
      c.setMdp(mdp);
      em.persist(c);
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