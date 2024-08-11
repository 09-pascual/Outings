import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOutingById, updateOuting } from "../services/outingService";

export const EditOutingForm = ({ currentUser }) => {
  const { outingId } = useParams();
  const [outing, setOuting] = useState({ links: [] });
  const [newLink, setNewLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getOutingById(outingId).then((data) => {
      console.log("Fetched data:", data);
      setOuting((prevOuting) => ({
        ...data,
        links: Array.isArray(data.links) ? data.links : [],
      }));
    });
  }, [outingId]);

  const handleAddLink = () => {
    if (newLink) {
      setOuting((prevOuting) => ({
        ...prevOuting,
        links: [...prevOuting.links, newLink],
      }));
      setNewLink("");
    }
  };

  const handleSave = (event) => {
    event.preventDefault();

    const editedOuting = {
      id: outingId,
      userId: currentUser.id,
      outingTypeId: outing.outingTypeId,
      title: outing.title,
      startDate: outing.startDate,
      endDate: outing.endDate,
      weather: outing.weather,
      location: outing.location,
      links: outing.links,
    };

    updateOuting(editedOuting).then(() => {
      navigate(`/detailedOutingView/${editedOuting.id}`);
    });
  };

  return (
    <form className="edit-outing-form" onSubmit={handleSave}>
      <h2>Edit Outing</h2>
      <fieldset>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={outing.title}
          onChange={(event) => {
            const copy = { ...outing };
            copy.title = event.target.value;
            setOuting(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={outing.startDate}
          onChange={(event) => {
            const copy = { ...outing };
            copy.startDate = event.target.value;
            setOuting(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="endDate">End Date:</label>
        <input
          required
          type="date"
          id="endDate"
          name="endDate"
          value={outing.endDate}
          onChange={(event) => {
            const copy = { ...outing };
            copy.endDate = event.target.value;
            setOuting(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="location">Location:</label>
        <input
          required
          type="text"
          id="location"
          name="location"
          value={outing.location}
          onChange={(event) => {
            const copy = { ...outing };
            copy.location = event.target.value;
            setOuting(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="weather">Weather:</label>
        <input
          type="text"
          id="weather"
          name="weather"
          value={outing.weather}
          onChange={(event) => {
            const copy = { ...outing };
            copy.weather = event.target.value;
            setOuting(copy);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="links">Links:</label>
        <ul>
          {Array.isArray(outing.links) &&
            outing.links.map((link, index) => <li key={index}>{link}</li>)}
        </ul>
        <input
          type="text"
          id="newLink"
          className="form-group"
          value={newLink}
          onChange={(event) => setNewLink(event.target.value)}
        />
        <button type="button" onClick={handleAddLink}>
          Add Link
        </button>
      </fieldset>
      <fieldset>
        <button
          type="submit"
          className="form-btn btn-info"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </fieldset>
    </form>
  );
};
