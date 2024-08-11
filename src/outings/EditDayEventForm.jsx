import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventByOutingById, updateEvent } from "../services/outingService";

export const EditDayEventForm = ({ currentUser }) => {
  const { outingId, eventId } = useParams();
  const [dayEvent, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getEventByOutingById(outingId).then((data) => {
      const eventToEdit = data.find((event) => event.id === parseInt(eventId));
      setEvent(eventToEdit);
    });
  }, [outingId, eventId]);

  const handleSave = (event) => {
    event.preventDefault();

    const editedEvent = {
      id: parseInt(eventId),
      outingId: parseInt(outingId),
      date: dayEvent.date,
      location: dayEvent.location,
      description: dayEvent.description,
    };
    updateEvent(editedEvent).then(() => {
      navigate(`/detailedOutingView/${outingId}`);
    });
  };

  return (
    <form className="edit-outing-form" onSubmit={handleSave}>
      <h2>Edit Event Form</h2>
      <fieldset>
        <label>date</label>
        <input
          type="date"
          id="date"
          value={dayEvent.date}
          onChange={(event) => {
            const copy = { ...dayEvent };
            copy.date = event.target.value;
            setEvent(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <label>Location</label>
        <input
          type="text"
          value={dayEvent.location}
          onChange={(event) => {
            const copy = { ...dayEvent };
            copy.location = event.target.value;
            setEvent(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <label>description</label>
        <input
          type="text"
          value={dayEvent.description}
          onChange={(event) => {
            const copy = { ...dayEvent };
            copy.description = event.target.value;
            setEvent(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <button
          type="submit"
          className="form-btn btn-info"
          onClick={handleSave}
        >
          Save Event Changes
        </button>
      </fieldset>
    </form>
  );
};
