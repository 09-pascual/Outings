import { Outlet, Route, Routes } from "react-router-dom";
import { CreatorNavBar } from "../navBars/CreatorNavBar";
import { Welcome } from "../welcome/welcome";
import { UpcomingOutings } from "../outings/OutingList";
import { CreateOutingForm } from "../outings/CreateOutingForm";
import { CreatorProfile } from "../outingCreator/creatorProfile";
import { DetailedOutingView } from "../outings/DetailedOutingView";
import { CreateEventForm } from "../outings/CreateEventForm";
import { EditOutingForm } from "../outings/EditOutingForm";
import { EditDayEventForm } from "../outings/EditDayEventForm";
// import { EditOutingForm } from "../outings/EditOutingForm";

export const CreatorViews = ({ currentUser }) => {
  return (
    <>
      <CreatorNavBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            path="homepage"
            element={
              <>
                <Welcome />
                <UpcomingOutings currentUser={currentUser} />
              </>
            }
          />
          <Route
            path="createOuting"
            element={<CreateOutingForm currentUser={currentUser} />}
          />
          <Route
            path="profile"
            element={<CreatorProfile currentUser={currentUser} />}
          />
          <Route
            path="detailedOutingView/:outingId"
            element={<DetailedOutingView currentUser={currentUser} />}
          />
          <Route path="addEventForm/:outingId" element={<CreateEventForm />} />
          <Route
            path="editOutingDetails/:outingId"
            element={<EditOutingForm currentUser={currentUser} />}
          />
          <Route
            path="/editEventDetails/:outingId/:eventId"
            element={<EditDayEventForm currentUser={currentUser} />}
          />
        </Route>
      </Routes>
    </>
  );
};
