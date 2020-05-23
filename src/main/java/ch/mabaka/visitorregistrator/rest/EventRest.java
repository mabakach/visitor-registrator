package ch.mabaka.visitorregistrator.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ch.mabaka.visitorregistrator.persistence.event.Event;
import ch.mabaka.visitorregistrator.service.event.EventService;

@Path("/event")
public class EventRest {
	
	@Inject
	EventService eventService;
	

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllJournals() {
        return Response.ok(eventService.readAllEvents()).build();
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addEvent(Event newEvent) {
    	try {
    		eventService.addEvent(newEvent);
    		return Response.ok().build();	
    	} catch (Exception e) {
    		return Response.serverError().build();
    	}
    	
    }

}
