import React, { useState } from 'react';
import '../styles/streamlist.css';

const StreamList = () => {
  const [events, setEvents] = useState(['Netflix', 'Hulu', 'Disney+']);
  const [search, setSearch] = useState('');
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    setSorted(!sorted);
    const sortedEvents = [...events].sort((a, b) =>
      sorted ? a.localeCompare(b) : b.localeCompare(a)
    );
    setEvents(sortedEvents);
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const filteredEvents = events.filter((event) =>
    event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>StreamList</h1>
      <div className="event-list">
        <div>
          <input
            type="text"
            placeholder="Search streaming services"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="material-symbols-outlined" onClick={handleSort}>
            sort_by_alpha
          </span>
        </div>
        <ul>
          {filteredEvents.map((event, index) => (
            <li key={index}>
              {event}
              <span
                className="material-symbols-outlined"
                onClick={() => deleteEvent(index)}
              >
                delete
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StreamList;
