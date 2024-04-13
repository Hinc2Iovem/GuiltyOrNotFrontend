import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Login from "./features/Auth/Login/Login";
import Registration from "./features/Auth/Registration/Registration";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="auth">
            <Route index element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
