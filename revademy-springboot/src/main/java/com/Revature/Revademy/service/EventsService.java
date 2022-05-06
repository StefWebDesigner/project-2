package com.Revature.Revademy.service;

import com.Revature.Revademy.entities.Events;
import com.Revature.Revademy.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventsService {


    private final EventRepository eventRepository;

    @Autowired
    public EventsService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }


    public Events createEvent(Events events) {
        return eventRepository.save(events);
//      save / findById / FindAll
    }

    public String deleteEvent(Integer eventId) {
        Optional <Events> events = eventRepository.findById(eventId);
            if(events.isPresent()) {
                eventRepository.deleteById(eventId);
                return "It has successful deleted";
            }
            return "Not successful";
    }

    public Events getByEventId(Integer eventId) {
        Optional <Events> event = eventRepository.findById(eventId);
        if(event.isPresent()){
            eventRepository.findById(eventId);
        }
        return null;
    }

    public List<Events> getAllEvents() {
        return eventRepository.findAll();
    }


}
