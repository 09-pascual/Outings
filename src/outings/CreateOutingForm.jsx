import { useEffect, useState } from "react";
import { createOuting, getOutingTypes } from "../services/outingService";
import { useNavigate } from "react-router-dom";

export const CreateOutingForm = ({ currentUser }) => {
  const [outingTypes, setOutingTypes] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [newOuting, setNewOuting] = useState({ weather: "", links: "" });
  const navigate = useNavigate();

  useEffect(() => {
    getOutingTypes().then((typesArray) => {
      setOutingTypes(typesArray);
    });
  }, []);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  const handleSave = () => {
    if (
      newOuting.title &&
      newOuting.outingTypes &&
      newOuting.startDate &&
      newOuting.endDate &&
      newOuting.location
    ) {
      const createdOuting = {
        userId: currentUser.id,
        outingTypeId: newOuting.outingTypes,
        title: newOuting.title,
        startDate: newOuting.startDate,
        endDate: newOuting.endDate,
        weather: newOuting.weather,
        location: newOuting.location,
        links: newOuting.links,
      };
      createOuting(createdOuting).then(() => navigate("/outingDetails"));
    } else {
      window.alert(
        "Please fill out all required fields: Title, Outing Type, Start Date, End Date, and Location"
      );
    }
  };

  return (
    <form className="create-outing-form">
      <h2>Create New Outing</h2>
      <fieldset>
        <label>
          <strong>Title</strong>
        </label>
        <input
          className="form-group"
          type="text"
          placeholder="Outing Name"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.title = event.target.value;
            setNewOuting(outingCopy);
          }}
        ></input>
        <select
          className="form-group"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.outingTypes = event.target.value;
            setNewOuting(outingCopy);
          }}
        >
          <option value="">Select Outing Type</option>
          {outingTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.type}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <label>
          <strong>Start Date:</strong>
        </label>
        <input
          className="form-group"
          min={currentDate}
          type="date"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.startDate = event.target.value;
            setNewOuting(outingCopy);
          }}
        ></input>
        <label>
          <strong>End Date:</strong>
        </label>
        <input
          className="form-group"
          min={currentDate}
          type="date"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.endDate = event.target.value;
            setNewOuting(outingCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <input
          type="text"
          className="form-group"
          placeholder="Enter weather to avoid"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.weather = event.target.value;
            setNewOuting(outingCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <input
          type="text"
          className="form-group"
          placeholder="Enter Location"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.location = event.target.value;
            setNewOuting(outingCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <input
          type="text"
          className="form-group"
          placeholder="Enter links"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.links = event.target.value;
            setNewOuting(outingCopy);
          }}
        ></input>
      </fieldset>
      <fieldset>
        <button
          type="button"
          className="form-btn btn-info"
          onClick={handleSave}
        >
          Create Outing
        </button>
      </fieldset>
    </form>
  );
};
