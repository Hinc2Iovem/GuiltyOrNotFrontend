import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Auth from "./features/Auth/Auth";
import NotFound from "./pages/NotFound";
import Detective from "./features/Detective/Detective";
import Guilty from "./features/Guilty/Guilty";
import ProtectedRoutes from "./features/Auth/Protected/ProtectedRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="auth/:type">
            <Route index element={<Auth />} />
          </Route>

          <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<Detective />} path="detective" />
            <Route element={<Guilty />} path="guilty" />
          </Route>

          <Route path="404" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
