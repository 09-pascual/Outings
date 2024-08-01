import { Outlet, Route, Routes } from "react-router-dom";
import { CreatorNavBar } from "../navBars/CreatorNavBar";
import { Welcome } from "../welcome/welcome";
import { UpcomingOutings } from "../outings/OutingList";
import { CreateOutingForm } from "../outings/CreateOutingForm";
import { CreatorProfile } from "../outingCreator/creatorProfile";
import { DetailedOutingView } from "../outings/DetailedOutingView";

export const CreatorViews = ({ currentUser }) => {
  return (
    <>
      <CreatorNavBar />
      <Routes>
        <Route
          path="/"
          element={<Outlet />} // This Outlet component will be used for nested routes
        >
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
            element={<DetailedOutingView />}
          />
        </Route>
      </Routes>
    </>
  );
};
