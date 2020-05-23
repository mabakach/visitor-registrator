package ch.mabaka.visitorregistrator.persistence.event;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import ch.mabaka.visitorregistrator.persistence.AbstractEntity;

@Entity
public class Event extends AbstractEntity {
	
	@NotNull
	String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
