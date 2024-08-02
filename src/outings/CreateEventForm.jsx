import { useEffect, useState } from "react";
import { createEventForDay, getOutingById } from "../services/outingService";
import { useNavigate, useParams } from "react-router-dom";

export const CreateEventForm = () => {
  const { outingId } = useParams();
  const [EventOuting, setEventOuting] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const [newEvent, setNewEvent] = useState({
    date: "",
    location: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    getOutingById(outingId).then((outingData) => {
      setEventOuting(outingData);
    });
  }, [outingId]);

  const handleSave = () => {
    if (newEvent.location && newEvent.description && newEvent.date) {
      const createdEvent = {
        outingId: parseInt(outingId),
        date: newEvent.date,
        location: newEvent.location,
        description: newEvent.description,
      };
      createEventForDay(createdEvent).then(() =>
        navigate(`/detailedOutingView/${outingId}`)
      );
    } else {
      window.alert("Please fill in all values");
    }
  };

  return (
    <form className="create-event-form">
      <h2>Create an Event for {EventOuting.title}</h2>
      <fieldset>
        <label>
          <strong>Date</strong>
        </label>
        <input
          className="form-group"
          min={currentDate}
          type="date"
          onChange={(event) => {
            const eventCopy = { ...newEvent };
            eventCopy.date = event.target.value;
            setNewEvent(eventCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <label>
          <strong>Location</strong>
        </label>
        <input
          className="form-group"
          placeholder="Enter location"
          onChange={(event) => {
            const eventCopy = { ...newEvent };
            eventCopy.location = event.target.value;
            setNewEvent(eventCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <label>
          <strong>Description</strong>
        </label>
        <input
          className="form-group"
          placeholder="Enter Event Description"
          onChange={(event) => {
            const eventCopy = { ...newEvent };
            eventCopy.description = event.target.value;
            setNewEvent(eventCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <button
          type="button"
          className="form-btn btn-info"
          onClick={handleSave}
        >
          Create Event
        </button>
      </fieldset>
    </form>
  );
};
