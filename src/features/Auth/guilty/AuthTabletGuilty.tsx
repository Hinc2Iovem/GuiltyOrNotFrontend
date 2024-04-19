import { AuthTypes } from "../Auth";
import { Link } from "react-router-dom";
import { ROLES } from "../../../consts/Roles";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import guiltyBg from "../../../assets/guilty/guiltyBg3.jpg";
import detective from "../../../assets/shared/detective-black.svg";
import guilty from "../../../assets/shared/mug-shot.svg";

export default function AuthTabletGuilty({
  confirmPassword,
  isConfirmPasswordVisible,
  isPasswordVisible,
  password,
  role,
  setConfirmPassword,
  setIsConfirmPasswordVisible,
  setIsPasswordVisible,
  setPassword,
  setRole,
  setUsername,
  type,
  username,
  handleSubmit,
}: AuthTypes) {
  return (
    <section className="flex w-full h-screen">
      <div className="w-full relative overflow-hidden">
        <img
          src={guiltyBg}
          alt="Detective"
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute right-1/5 top-[17%] bg-black md:opacity-0 w-full h-[50rem] opacity-20"></div>
        <form
          onSubmit={handleSubmit}
          className="absolute md:right-[1rem] right-[calc(33.3%-3rem)] top-[calc(33.3%-3rem)] transition-all text-white font-medium text-[1.5rem] flex flex-col gap-[1.5rem] p-[2rem]"
        >
          <div className="flex items-center gap-[.3rem] relative md:w-full">
            <label
              className={`absolute ${
                username
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              }  transparent duration-500 text-[1.5rem] z-[2]`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="py-[.5rem] bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
              type="text"
              name="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <div className="flex items-center gap-[.3rem] relative">
            <label
              className={`absolute ${
                password
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } transparent duration-500 text-[1.5rem] z-[1]`}
              htmlFor="password"
            >
              Password
            </label>
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
            } items-center gap-[.3rem] relative`}
          >
            <label
              className={`absolute ${
                confirmPassword
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } transparent duration-500 text-[1.5rem] z-[1]`}
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="py-[.5rem] bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
              type={isConfirmPasswordVisible ? "text" : "password"}
              name="ConfirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
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
              <button
                onClick={() => {
                  setRole ? setRole(ROLES.Detective) : () => {};
                }}
                type="button"
              >
                <img
                  src={detective}
                  className={`${
                    role === "Detective" ? "shadow-md shadow-black" : ""
                  } transition-all w-[3rem] object-fill h-[3rem] rounded-full hover:scale-[1.05]`}
                />
              </button>
              <button
                onClick={() => {
                  setRole ? setRole(ROLES.Guilty) : () => {};
                }}
                type="button"
              >
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
                type === "registration" ? "/auth/login" : "/auth/registration"
              }
            >
              {type === "registration" ? "Sign In" : "Sign Up"}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
