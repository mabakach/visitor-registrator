package ch.mabaka.visitorregistrator.persistence.event;

import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Long> {

}
