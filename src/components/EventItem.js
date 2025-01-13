import React from "react";

const EventItem = ({ event, onEdit, onDelete, onToggleWatched }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: event.isWatched ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {event.title}
      </span>
      <button onClick={() => onToggleWatched(event.id)}>
        {event.isWatched ? "Unwatch" : "Watch"}
      </button>
      <button onClick={() => onEdit(event.id)}>Edit</button>
      <button onClick={() => onDelete(event.id)}>Delete</button>
    </li>
  );
};

export default EventItem;
