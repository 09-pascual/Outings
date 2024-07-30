import { useEffect, useState } from "react";
import { getAllOutings } from "../services/outingService";
import "./Outing.css";

export const UpcomingOutings = ({ currentUser }) => {
  const [allOutings, setOutings] = useState([]);

  useEffect(() => {
    getAllOutings().then((outingsArray) => {
      setOutings(outingsArray);
    });
  }, []); // only runs on initial render

  return (
    <div className="outings-container">
      <h2>
        <strong>Upcoming Outings</strong>
      </h2>
      <article className="outings">
        {allOutings.map((outing) => (
          <section key={outing.id}>
            <button className="btn-outings">
              <strong>{outing.title}</strong>
            </button>
            <div className="outing-info">
              <div>
                <strong>Date(s):</strong> {outing.date_range}
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
