package pack;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import java.util.Collection;
import java.util.Date;
import java.util.Properties;

import javax.annotation.PostConstruct;
import javax.ejb.LocalBean;
import javax.ejb.Remote;
import javax.ejb.Singleton;
import javax.ejb.Stateful;
import javax.ejb.Stateless;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
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
    public void setCompte(Compte c) throws AddressException, MessagingException {
		em.persist(c);
		Properties properties = new Properties();
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
 
        // creates a new session with an authenticator
        Authenticator auth = new Authenticator() {
            public PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("chess7.inp@gmail.com", "Houda1234");
            }
        };
 
        Session session = Session.getInstance(properties, auth);
 
        // creates a new e-mail message
        Message msg = new MimeMessage(session);
 
        msg.setFrom(new InternetAddress("chess7.inp@gmail.com"));
        InternetAddress[] toAddresses = { new InternetAddress(c.getEmail()) };
        msg.setRecipients(Message.RecipientType.TO, toAddresses);
        msg.setSubject("Mail de confirmation");
        msg.setSentDate(new Date());
        msg.setText("Bienvenue chez Chess7 ! \n \n \n "
                + "Votre inscription est bien prise en compte. \n "
                + "A bientôt,\n "
                + "L'équipe Chess7");

        // sends the e-mail
        Transport.send(msg);
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
    @Produces({"application/json"})
    public Utilisateur compteId(@PathParam("id_email") String id_email) {
        Compte c = em.find(Compte.class, id_email);
        Utilisateur u = new Utilisateur();
        u.setId(c.getProprietaire().getId());
        u.setNom(c.getProprietaire().getNom());
        u.setPrenom(c.getProprietaire().getPrenom());
        u.setAdresse(c.getProprietaire().getAdresse());
        u.setNiveau(c.getProprietaire().getNiveau());
        u.setDroit(c.getProprietaire().getDroit());
        u.setProfilPic(c.getProprietaire().getProfilPic());
        return u;
    };
	@POST
    @Path("/utilisateur")
    @Consumes({"application/json"})
    public void setUtilisateur(Utilisateur u) {
		em.persist(u);
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

	
    @GET
    @Path("/modifMdp/{id_utilisateur}/{old_mdp}/{new_mdp}")
    @Produces({"application/json"})
    public boolean modifMdp(@PathParam("id_utilisateur") String id_utilisateur, @PathParam("old_mdp") String old_mdp, @PathParam("new_mdp") String new_mdp) {
        Utilisateur u = em.find(Utilisateur.class,Integer.parseInt(id_utilisateur));
        Compte c = u.getCompte();
        if (c.getMdp().equals(old_mdp)) {
            c.setMdp(new_mdp);
            em.merge(c);
            return true;
        } else {
            return false;
        }
    };
    // IL FAUT UPDATE COOKIE

    @POST
    @Path("/modifProfil/")
    @Consumes({"application/json"})
    public void modifProfil(Utilisateur u) {
        Utilisateur ut = em.find(Utilisateur.class, u.getId());
        ut.setNom(u.getNom());
        ut.setPrenom(u.getPrenom());
        ut.setAdresse(u.getAdresse());
        u.setProfilPic(u.getProfilPic());
        em.merge(ut);
    };
}