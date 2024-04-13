import { AuthTypes } from "../Auth";
import detectiveBg from "../../../assets/detectiveBg1.jpg";
import detective from "../../../assets/detective-black.svg";
import guilty from "../../../assets/mug-shot.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { ROLES } from "../../../consts/Roles";
import { Link } from "react-router-dom";

export default function AuthMobileDetective({
  isPasswordVisible,
  password,
  role,
  setIsPasswordVisible,
  setPassword,
  setRole,
  setUsername,
  username,
  type,
  confirmPassword,
  isConfirmPasswordVisible,
  setConfirmPassword,
  setIsConfirmPasswordVisible,
}: AuthTypes) {
  return (
    <section className="h-screen relative">
      <img
        src={detectiveBg}
        alt="Detective"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[calc(50%-17.5rem)] right-[calc(50%-15rem)] w-[30rem] h-[35rem] bg-white opacity-20 rounded-md shadow-md shadow-white"></div>
      <form className="absolute flex flex-col gap-[1.5rem] p-[1.5rem] top-[calc(50%-17.5rem)] right-[calc(50%-15rem)] w-[30rem] h-[35rem] text-white rounded-md shadow-sm shadow-black">
        <div className="flex items-center gap-[.3rem] relative md:w-full">
          <input
            className="py-[.5rem] bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="text"
            name="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="flex items-center gap-[.3rem] relative">
          <input
            className="py-[.5rem] bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type={isPasswordVisible ? "text" : "password"}
            name="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button
            className={`${
              isPasswordVisible ? "hidden" : "visible"
            } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-gray-400 hover:text-gray-500 outline-none`}
            type="button"
            onClick={() => setIsPasswordVisible(true)}
          >
            <FontAwesomeIcon icon={faEyeSlash} />
          </button>

          <button
            className={`${
              isPasswordVisible ? "visible" : "hidden"
            } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-white  outline-none`}
            type="button"
            onClick={() => setIsPasswordVisible(false)}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>

        <div
          className={`${
            type === "registration" ? "flex" : "hidden"
          }  items-center gap-[.3rem] relative`}
        >
          <input
            className="py-[.5rem] bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type={isConfirmPasswordVisible ? "text" : "password"}
            name="ConfirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="ConfirmPassword"
          />

          <button
            className={`${
              isConfirmPasswordVisible ? "hidden" : "visible"
            } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-gray-400 hover:text-gray-500 outline-none`}
            type="button"
            onClick={() => setIsConfirmPasswordVisible(true)}
          >
            <FontAwesomeIcon icon={faEyeSlash} />
          </button>

          <button
            className={`${
              isConfirmPasswordVisible ? "visible" : "hidden"
            } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-white  outline-none`}
            type="button"
            onClick={() => setIsConfirmPasswordVisible(false)}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>

        <div className="flex items-center gap-[1.5rem] outline-none border-[4px] border-dotted border-gray-400 px-[1rem] py-[.5rem] bg-white rounded-md">
          <h3 className="text-[2rem] font-medium text-black">Roles</h3>
          <div className="flex items-center gap-[1.5rem]">
            <button onClick={() => setRole(ROLES.Detective)} type="button">
              <img
                src={detective}
                className={`${
                  role === "Detective" ? "shadow-md shadow-black" : ""
                } transition-all w-[3rem] object-fill h-[3rem] rounded-full hover:scale-[1.05]`}
              />
            </button>
            <button onClick={() => setRole(ROLES.Guilty)} type="button">
              <img
                src={guilty}
                className={`${
                  role === "Guilty" ? "shadow-md shadow-black" : ""
                } transition-all w-[3rem] object-fill h-[3rem] rounded-full hover:scale-[1.05]`}
              />
            </button>
          </div>
        </div>

        <button className="w-fit mb-[2rem] text-white  self-end text-[1.5rem] py-[1rem] px-[3rem] font-medium shadow-sm shadow-white border-none hover:scale-[1.02]  rounded-md transition-all active:scale-[0.97]">
          {type === "registration" ? "Sign Up" : "Sign In"}
        </button>
        <div className="text-black self-end px-[1rem] py-[.5rem] rounded-md text-center w-fit text-[1.5rem] flex flex-col shadow-white shadow-sm relative">
          <div className="absolute bg-white opacity-40 top-0 bottom-0 left-0 right-0"></div>
          <p className="self-start z-[1] font-medium">
            {type === "registration"
              ? "Already have an accout?"
              : "Do not have an accout?"}{" "}
          </p>
          <Link
            className="z-[1] hover:text-gray-700 self-end"
            to={
              type === "registration"
                ? "/auth/login/detective"
                : "/auth/registration/detective"
            }
          >
            {type === "registration" ? "Sign In" : "Sign Up"}
          </Link>
        </div>
      </form>
    </section>
  );
}
