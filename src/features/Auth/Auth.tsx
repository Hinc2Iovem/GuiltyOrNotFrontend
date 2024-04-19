import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DivBgColor from "../../components/DivBgColor";
import { MATCHMEDIA } from "../../consts/MatchMedia";
import { ROLES } from "../../consts/Roles";
import useMatchMedia from "../../hooks/useMatchMedia";
import RolesFooter from "./RolesFooter";
import AuthDekstopDetective from "./detective/AuthDekstopDetective";
import AuthMobileDetective from "./detective/AuthMobileDetective";
import AuthTabletDetective from "./detective/AuthTabletDetective";
import AuthDekstopGuilty from "./guilty/AuthDekstopGuilty";
import AuthMobileGuilty from "./guilty/AuthMobileGuilty";
import AuthTabletGuilty from "./guilty/AuthTabletGuilty";
import axios from "axios";

export type AuthTypes = {
  role?: ROLES;
  setRole?: React.Dispatch<React.SetStateAction<ROLES>>;
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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
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
  const isTablet = useMatchMedia(MATCHMEDIA.Tablet);

  const navigate = useNavigate();
  const { type } = useParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("What's happening");
    try {
      if (!username || !password) {
        console.log("Username and password are required");
        return;
      }
      if (type === "registration") {
        const data = await axios
          .post("http://localhost:8080/api/v1/auth/registration", {
            username,
            password,
            role,
          })
          .then((res) => res);
        console.log(data.data);
      } else if (type === "login") {
        const data = await axios
          .post("http://localhost:8080/api/v1/auth", {
            username,
            password,
          })
          .then((res) => res);
        console.log(data);
      }
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("role", JSON.stringify(role));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!type?.trim()) {
    return <h2>Something went wrong</h2>;
  }

  return role === "Detective" ? (
    <>
      <DivBgColor bgColor="bg-cyan-100" />
      {isMobile ? (
        <>
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
            handleSubmit={handleSubmit}
          />
          <RolesFooter role={role} setRole={setRole} visible isMobile />
        </>
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
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
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
            handleSubmit={handleSubmit}
          />
          <RolesFooter role={role} setRole={setRole} visible />
        </>
      )}
    </>
  ) : role === "Guilty" ? (
    <>
      <DivBgColor bgColor="bg-cyan-100" />
      {isMobile ? (
        <>
          <AuthMobileGuilty
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
            handleSubmit={handleSubmit}
          />
          <RolesFooter role={role} setRole={setRole} visible isMobile />
        </>
      ) : isTablet ? (
        <AuthTabletGuilty
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
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <AuthDekstopGuilty
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
            handleSubmit={handleSubmit}
          />
          <RolesFooter role={role} setRole={setRole} visible />
        </>
      )}
    </>
  ) : (
    <Navigate to="/404" replace />
  );
}
