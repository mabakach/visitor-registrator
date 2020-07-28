package ch.mabaka.visitorregistrator.persistence.event;

import java.util.Date;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import ch.mabaka.visitorregistrator.persistence.AbstractEntity;

@Entity
public class Event extends AbstractEntity {
	
	@NotNull
	private String name;
	
	@NotNull
	@JsonbDateFormat(value = ISO_INSTANT)
	private Date startDateTime;
	
	private int numberOfSeats;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStartDateTime() {
		return startDateTime;
	}

	public void setStartDateTime(Date startDateTime) {
		this.startDateTime = startDateTime;
	}

	public int getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(int numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}
}
