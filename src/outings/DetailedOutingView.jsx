import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteEvent,
  deleteOuting,
  getEventByOutingById,
  getOutingById,
} from "../services/outingService";
import "./Outing.css";

export const DetailedOutingView = ({ currentUser }) => {
  const { outingId } = useParams();
  const [outing, setOuting] = useState({});
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

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

  const handleDelete = () => {
    getEventByOutingById(outingId).then((events) => {
      const outingEvents = events.filter(
        (event) => event.outingId === parseInt(outingId)
      );
      const deleteEventPromises = outingEvents.map((event) =>
        deleteEvent(event.id)
      );

      Promise.all(deleteEventPromises)
        .then(() => deleteOuting(outingId))
        .then(() => navigate("/homepage"));
    });
  };

  return (
    <div className="detailed-outing">
      <h2>{outing?.title}</h2>
      <div className="outing-details">
        <p>
          <strong>Start Date:</strong> {outing.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {outing.endDate}
        </p>
        <p>
          <strong>Location:</strong> {outing?.location}
        </p>
      </div>
      <p>
        <strong>Weather:</strong> {outing?.weather}
      </p>
      <div>
        <strong>Links:</strong>
        <ul>
          {Array.isArray(outing.links) ? (
            outing.links.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))
          ) : (
            <li>
              <a href={outing.links} target="_blank" rel="noopener noreferrer">
                {outing.links}
              </a>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h3>
          <strong>Events</strong>
        </h3>
        {events.length > 0 ? (
          <div className="events-container">
            {events.map((event) => (
              <div key={event.id} className="events">
                <p>
                  <strong>Day:</strong> {event.date}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Description:</strong> {event.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No Events added</p>
        )}
      </div>
      <div>
        <Link to={`/addEventForm/${outing.id}`}>
          <button className="form-btn btn-info">Add Event to trip</button>
        </Link>
        {currentUser.id === parseInt(outing.userId) && (
          <>
            <Link to={`/editOutingDetails/${outing.id}`}>
              <button className="form-btn btn-edit">Edit Outing</button>
            </Link>
            <button className="form-btn btn-delete" onClick={handleDelete}>
              Delete Outing
            </button>
          </>
        )}
      </div>
    </div>
  );
};
