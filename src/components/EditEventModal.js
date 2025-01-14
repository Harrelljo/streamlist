import React, { useState } from "react";

const EditEventModal = ({ event, onSave, onClose }) => {
  const [title, setTitle] = useState(event.title);

  const handleSave = () => {
    onSave({ ...event, title });
  };

  return (
    <div className="modal">
      <h2>Edit Event</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditEventModal;
