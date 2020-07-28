package ch.mabaka.visitorregistrator.persistence;

import java.util.Date;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public abstract class AbstractEntity {
	
	protected static final String ISO_INSTANT = "yyyy-MM-dd'T'HH:mm:ss.SSSX";
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	protected Long sysid;
	
	@CreationTimestamp
	@JsonbDateFormat(value = ISO_INSTANT)
	protected Date sysinsertts;
	
	@UpdateTimestamp
	@JsonbDateFormat(value = ISO_INSTANT)
	protected Date sysupdatets;

	public Long getSysid() {
		return sysid;
	}

	public void setSysid(Long sysid) {
		this.sysid = sysid;
	}

	public Date getSysinsertts() {
		return sysinsertts;
	}

	public void setSysinsertts(Date sysinsertts) {
		this.sysinsertts = sysinsertts;
	}

	public Date getSysupdatets() {
		return sysupdatets;
	}

	public void setSysupdatets(Date sysupdatets) {
		this.sysupdatets = sysupdatets;
	}
	
	
	
	
}
