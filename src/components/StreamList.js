import React, { useState } from "react";
import "../styles/streamlist.css"; // Import StreamList styles

function StreamList() {
  const [events, setEvents] = useState([]); // State to hold events
  const [newEvent, setNewEvent] = useState(""); // State for new event input
  const [editIndex, setEditIndex] = useState(null); // State to track which event is being edited
  const [editEvent, setEditEvent] = useState(""); // State for edited event input

  const handleAddEvent = () => {
    if (newEvent) {
      setEvents([...events, newEvent]);
      setNewEvent(""); // Clear input after adding event
    }
  };

  const handleEditEvent = (index) => {
    setEditIndex(index); // Set the event that is being edited
    setEditEvent(events[index]); // Set the value of that event in the input field
  };

  const handleSaveEdit = () => {
    if (editEvent) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = editEvent; // Update the event at the specified index
      setEvents(updatedEvents); // Set the updated events list
      setEditIndex(null); // Reset the editIndex after saving
      setEditEvent(""); // Clear the edit input
    }
  };

  const handleDeleteEvent = (eventToDelete) => {
    setEvents(events.filter((event) => event !== eventToDelete)); // Filter out the deleted event
  };

  return (
    <div className="streamlist">
      <h1>StreamList</h1>
      <input
        type="text"
        value={newEvent}
        onChange={(e) => setNewEvent(e.target.value)}
        placeholder="Add new event"
      />
      <button onClick={handleAddEvent}>Add Event</button>
      {editIndex !== null && (
        <div>
          <input
            type="text"
            value={editEvent}
            onChange={(e) => setEditEvent(e.target.value)}
            placeholder="Edit event"
          />
          <button onClick={handleSaveEdit}>Save Edit</button>
        </div>
      )}
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event}{" "}
            <button onClick={() => handleEditEvent(index)}>Edit</button>
            <button onClick={() => handleDeleteEvent(event)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
