import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOutingById } from "../services/outingService";
import "./Outing.css";

export const DetailedOutingView = () => {
  const { outingId } = useParams();
  const [outing, setOuting] = useState({});

  useEffect(() => {
    getOutingById(outingId).then((data) => {
      setOuting(data);
    });
  }, [outingId]);

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
    </div>
  );
};
