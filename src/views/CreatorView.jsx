import { Outlet, Route, Routes } from "react-router-dom";
import { CreatorNavBar } from "../navBars/CreatorNavBar";
import { Welcome } from "../welcome/welcome";
import { UpcomingOutings } from "../outings/OutingList";
import { CreateOutingForm } from "../outings/CreateOutingForm";

export const CreatorViews = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CreatorNavBar />
            <Outlet />
          </>
        }
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
      </Route>
      <Route
        path="createOuting"
        element={<CreateOutingForm currentUser={currentUser} />}
      ></Route>
      <Route path="profile" />
    </Routes>
  );
};
