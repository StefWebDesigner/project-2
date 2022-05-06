package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.Events;
import com.Revature.Revademy.service.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sun.java2d.pipe.hw.AccelDeviceEventNotifier;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/events")
public class EventController {

    private final EventsService eventsService;

    @Autowired
    public EventController(EventsService eventsService) {
        this.eventsService = eventsService;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Events> createEvent(@RequestBody Events events) {
        return ResponseEntity.ok(eventsService.createEvent(events));
    }

    @RequestMapping(value = "/{delete}", method = RequestMethod.DELETE)
    public ResponseEntity<String> deleteEvent(@PathVariable Integer eventId) {
        return ResponseEntity.ok(eventsService.deleteEvent(eventId));
    }

    @RequestMapping(value = "/event", method = RequestMethod.GET)
    public ResponseEntity<Events> getByEventId(@RequestParam Integer eventId) {
        return ResponseEntity.ok(eventsService.getByEventId(eventId));
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Events>> getAllEvents() {
        return ResponseEntity.ok(eventsService.getAllEvents());
    }
    
}
