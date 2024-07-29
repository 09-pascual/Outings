import { Outlet, Route, Routes } from "react-router-dom";
import { CreatorNavBar } from "../navBars/CreatorNavBar";
import { Welcome } from "../welcome/welcome";
import { UpcomingOutings } from "../outings/OutingList";
import { CreateOutingForm } from "../outings/CreateOutingForm";

export const CreatorViews = () => {
  return (
    <Routes>
      <Route />
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
              <UpcomingOutings />
            </>
          }
        />
      </Route>
      <Route path="createOuting" element={<CreateOutingForm />}></Route>
    </Routes>
  );
};
