import { useEffect, useState } from "react";
import { CreatorViews } from "./CreatorView";

export const ApplicationViews = () => {
  //state for the user, expect an object back so we set it as an empty object
  //user related data
  //now, bc of this, currentUser allows us to get all the data from the currentUser we want
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localOutingsUser = localStorage.getItem("Outings_user");
    const OutingsUserObject = JSON.parse(localOutingsUser);

    setCurrentUser(OutingsUserObject);
  }, []);

  return currentUser.creator ? (
    <CreatorViews currentUser={currentUser} />
  ) : (
    <>friend view</>
  );
};
