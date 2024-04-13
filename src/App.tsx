import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Auth from "./features/Auth/Auth";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="auth/:role">
            <Route index element={<Auth />} />
          </Route>

          <Route path="404" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
