import { useEffect, useState } from "react";
import { getOutingTypes } from "../services/outingService";

export const CreateOutingForm = () => {
  const [outingTypes, setOutingTypes] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [newOuting, setNewOuting] = useState({});

  useEffect(() => {
    getOutingTypes().then((typesArray) => {
      setOutingTypes(typesArray);
      console.log("types set");
    });
  }, []); //don't forget to add this to prevent infinite loop
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);

  //   const handleSave()
  return (
    <form>
      <h2>Create New Outing</h2>
      <fieldset>
        <label>
          <strong>Title</strong>
        </label>
        <input
          className="form-group"
          type="tex"
          placeholder="Outing Name"
          onChange={(event) => {
            const outingCopy = { ...newOuting };
            outingCopy.description = event.target.value;
            setNewOuting(outingCopy);
          }}
        ></input>
        <select className="form-group">
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
        <input className="form-group" min={currentDate} type="date"></input>
        <label>
          <strong>End Date:</strong>
        </label>
        <input className="form-group" min={currentDate} type="date"></input>
      </fieldset>
      <fieldset>
        <input type="Text" placeholder="enter weather to avoid"></input>
      </fieldset>
      <fieldset>
        <input type="text" placeholder="Enter Location"></input>
      </fieldset>
      <fieldset>
        <input type="text" placeholder="enter links"></input>
      </fieldset>
      <fieldset className="form-btn btn-info"> Create Form</fieldset>
    </form>
  );
};
