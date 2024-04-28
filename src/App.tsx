import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Auth from "./features/Auth/Auth";
import NotFound from "./pages/NotFound";
import Detective from "./features/Detective/Detective";
import Guilty from "./features/Guilty/Guilty";
import ProtectedRoutes from "./features/Auth/Protected/ProtectedRoutes";
import Profile from "./features/Profile/Profile";
import Mission from "./features/Mission/SeeMissions/Mission";
import Character from "./features/Character/SeeCharacters/Character";
import CreateCharacter from "./features/Character/CreateCharacter/CreateCharacter";
import CreateMission from "./features/Mission/CreateMission/CreateMission";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="auth/:type">
            <Route index element={<Auth />} />
          </Route>

          <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<Guilty />} path="guilty" />
            <Route path="detective">
              <Route element={<Detective />} index />
              <Route element={<Profile />} path="profile" />
              <Route path="missions">
                <Route element={<Mission />} index />
                <Route element={<CreateMission />} path="new" />
              </Route>
              <Route path="characters">
                <Route element={<Character />} index />
                <Route element={<CreateCharacter />} path="new" />
              </Route>
            </Route>
          </Route>

          <Route path="404" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
