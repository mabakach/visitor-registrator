package ch.mabaka.visitorregistrator.service.event;

import java.util.Collection;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import ch.mabaka.visitorregistrator.persistence.event.Event;

@RequestScoped
@Transactional
public class EventService {

	@Inject
	EntityManager em;

	public Event addEvent(Event event) {
		em.persist(event);
		return event;
	}

	@SuppressWarnings("unchecked")
	public Collection<Event> readAllEvents() {
		Query query = em.createQuery("SELECT e FROM Event e");
		return (Collection<Event>) query.getResultList();
	}

}
