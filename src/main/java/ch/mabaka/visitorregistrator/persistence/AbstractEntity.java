package ch.mabaka.visitorregistrator.persistence;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
public abstract class AbstractEntity {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	protected Long sysid;
	
	@CreationTimestamp
	protected Date sysinsertts;
	
	@UpdateTimestamp
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
