import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Authorized } from "./views/Authorized";
import { CreatorViews } from "./views/CreatorView";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          <Authorized>
            <CreatorViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
