import { useState } from "react";
import { ROLES } from "../../consts/Roles";
import { MATCHMEDIA } from "../../consts/MatchMedia";
import useMatchMedia from "../../hooks/useMatchMedia";
import AuthDekstopDetective from "./detective/AuthDekstopDetective";
import AuthMobileDetective from "./detective/AuthMobileDetective";
import AuthTabletDetective from "./detective/AuthTabletDetective";
import { Navigate, useParams } from "react-router-dom";
import DivBgColor from "../../components/DivBgColor";

export type AuthTypes = {
  role: ROLES;
  setRole: React.Dispatch<React.SetStateAction<ROLES>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isConfirmPasswordVisible: boolean;
  setIsConfirmPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  type: string;
};

export default function Auth() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [role, setRole] = useState<ROLES>(ROLES.Detective);
  const isMobile = useMatchMedia(MATCHMEDIA.Mobile);
  console.log("mobile: ", isMobile);
  const isTablet = useMatchMedia(MATCHMEDIA.Tablet);
  console.log("table: ", isTablet);

  const { type } = useParams();

  if (!type?.trim()) {
    return <h2>Something went wrong</h2>;
  }

  return role === "Detective" ? (
    <>
      <DivBgColor bgColor="bg-cyan-100" />
      {isMobile ? (
        <AuthMobileDetective
          role={role}
          setRole={setRole}
          username={username}
          setUsername={setUsername}
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
          password={password}
          setPassword={setPassword}
          isConfirmPasswordVisible={isConfirmPasswordVisible}
          setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          type={type}
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
          isConfirmPasswordVisible={isConfirmPasswordVisible}
          setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          type={type}
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
          isConfirmPasswordVisible={isConfirmPasswordVisible}
          setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          type={type}
        />
      )}
    </>
  ) : role === "Guilty" ? (
    <>
      <DivBgColor bgColor="bg-cyan-100" />
    </>
  ) : (
    <Navigate to="/404" replace />
  );
}
