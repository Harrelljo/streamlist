import React, { useState } from "react";
import EventItem from "./EventItem";
import EditEventModal from "./EditEventModal";

const StreamList = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Watch Inception", isWatched: false },
    { id: 2, title: "Attend Coding Bootcamp", isWatched: false },
  ]);

  const [currentEvent, setCurrentEvent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (id) => {
    const event = events.find((event) => event.id === id);
    setCurrentEvent(event);
    setShowEditModal(true);
  };

  const handleSave = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? { ...event, ...updatedEvent } : event
      )
    );
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleToggleWatched = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, isWatched: !event.isWatched } : event
      )
    );
  };

  return (
    <div>
      <h1>StreamList Events</h1>
      <ul>
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleWatched={handleToggleWatched}
          />
        ))}
      </ul>
      {showEditModal && (
        <EditEventModal
          event={currentEvent}
          onSave={handleSave}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default StreamList;
