import { useState } from "react";
import { ROLES } from "../../../consts/Roles";
import DivBgColor from "../../../components/DivBgColor";
import { MATCHMEDIA } from "../../../consts/MatchMedia";
import useMatchMedia from "../../../hooks/useMatchMedia";
import LoginDekstop from "./LoginDekstop";
import LoginMobile from "./LoginMobile";
import LoginTablet from "./LoginTablet";

export type LoginTypes = {
  role: ROLES;
  setRole: React.Dispatch<React.SetStateAction<ROLES>>;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [role, setRole] = useState<ROLES>(ROLES.Detective);
  const isMobile = useMatchMedia(MATCHMEDIA.Mobile);
  console.log("mobile: ", isMobile);
  const isTablet = useMatchMedia(MATCHMEDIA.Tablet);
  console.log("table: ", isTablet);

  return (
    <>
      <DivBgColor bgColor="bg-cyan-100" />
      {isMobile ? (
        <LoginMobile
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
        <LoginTablet
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
        <LoginDekstop
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
  );
}
