import { useState } from "react";
import { ROLES } from "../../consts/Roles";
import { MATCHMEDIA } from "../../consts/MatchMedia";
import useMatchMedia from "../../hooks/useMatchMedia";
import AuthDekstopDetective from "./detective/AuthDekstopDetective";
import AuthMobileDetective from "./detective/AuthMobileDetective";
import AuthTabletDetective from "./detective/AuthTabletDetective";
import { Navigate, useLocation } from "react-router-dom";

export type AuthTypes = {
  role: ROLES;
  setRole: React.Dispatch<React.SetStateAction<ROLES>>;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

export default function Auth() {
  const { pathname } = useLocation();
  const detectiveOrGuilty = pathname.split("/")[2];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [role, setRole] = useState<ROLES>(ROLES.Detective);
  const isMobile = useMatchMedia(MATCHMEDIA.Mobile);
  console.log("mobile: ", isMobile);
  const isTablet = useMatchMedia(MATCHMEDIA.Tablet);
  console.log("table: ", isTablet);

  return detectiveOrGuilty === "detective" ? (
    <>
      {isMobile ? (
        <AuthMobileDetective
          role={role}
          setRole={setRole}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      ) : isTablet ? (
        <AuthTabletDetective
          role={role}
          setRole={setRole}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <AuthDekstopDetective
          role={role}
          setRole={setRole}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
    </>
  ) : detectiveOrGuilty === "guilty" ? (
    ""
  ) : (
    <Navigate to="/404" replace />
  );
}
