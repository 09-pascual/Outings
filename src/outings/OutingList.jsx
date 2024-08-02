import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllOutings } from "../services/outingService";
import "./Outing.css";

export const UpcomingOutings = ({ currentUser }) => {
  const [allOutings, setOutings] = useState([]);

  useEffect(() => {
    getAllOutings().then((outingsArray) => {
      setOutings(outingsArray);
    });
  }, []);

  return (
    <div className="outings-container">
      <h2>
        <strong>Upcoming Outings</strong>
      </h2>
      <article className="outings">
        {allOutings.map((outing) => (
          <section key={outing.id}>
            <Link to={`/detailedOutingView/${outing.id}`}>
              <button className="btn-outings">
                <strong>{outing.title}</strong>
              </button>
            </Link>
            <div className="outing-info">
              <div>
                <strong>Start Date:</strong> {outing.startDate}
              </div>
              <div>
                <strong>End Date:</strong> {outing.endDate}
              </div>
              <div>
                <strong>Location:</strong> {outing.location}
              </div>
              <div>
                <strong>Links:</strong> {outing.links}
              </div>
            </div>
          </section>
        ))}
      </article>
    </div>
  );
};
