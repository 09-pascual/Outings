import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEventByOutingById, getOutingById } from "../services/outingService";
import "./Outing.css";

export const DetailedOutingView = () => {
  const { outingId } = useParams();
  const [outing, setOuting] = useState({});
  const [events, setEvents] = useState({});

  useEffect(() => {
    getOutingById(outingId).then((data) => {
      setOuting(data);
    });
  }, [outingId]);

  useEffect(() => {
    getEventByOutingById(outingId).then((data) => {
      const filteredEvents = data.filter(
        (event) => event.outingId === parseInt(outingId)
      );
      setEvents(filteredEvents);
    });
  }, [outingId]);

  const handleSave = () => {
    console.log("handle save has been pressed");
  };

  return (
    <div className="detailed-outing">
      <h2>{outing?.title}</h2>
      <div className="outing-details">
        <p>
          <strong>Start Date:</strong> {outing.startDate}
        </p>
        <p>
          <strong>End Date:</strong>
          {outing.endDate}
        </p>
        <p>
          <strong>Location:</strong> {outing?.location}
        </p>
      </div>
      <p>
        <strong>Weather:</strong> {outing?.weather}
      </p>
      <p>
        <strong>Links:</strong> {outing?.links}
      </p>
      <div>
        <h3>
          <strong>Events</strong>
        </h3>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="events">
              <p>
                <strong>Time:</strong> {event.time_Range}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Description:</strong> {event.description}
              </p>
            </div>
          ))
        ) : (
          <p>No Events added</p>
        )}
      </div>
      <div>
        <Link to={`/addEventForm/${outing.id}`}>
          <button className="form-btn btn-info" onClick={handleSave}>
            Add Event to trip
          </button>
        </Link>
      </div>
    </div>
  );
};
