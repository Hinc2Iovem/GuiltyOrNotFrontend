import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import detectiveBg from "../../../assets/detective/detectiveBg1.jpg";
import woodenSign from "../../../assets/detective/sign2.png";
import { AuthTypes } from "../Auth";

export default function AuthMobileDetective({
  isPasswordVisible,
  password,
  setIsPasswordVisible,
  setPassword,
  setUsername,
  username,
  type,
  confirmPassword,
  isConfirmPasswordVisible,
  setConfirmPassword,
  setIsConfirmPasswordVisible,
}: AuthTypes) {
  return (
    <section className="h-screen relative w-full">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src={detectiveBg}
          alt="Detective"
          className="w-full object-cover fixed top-0 right-0 left-0 bottom-0 h-screen"
        />
        <div className="relative max-w-[43rem] w-full max-h-[55rem] h-full top-[calc(50%-27.5rem)] right-[calc(50%-20.5rem)] left-0">
          <img
            src={woodenSign}
            alt="woodenSign"
            className="absolute object-contain w-full h-full min-h-[40rem]"
          />
          <form className="absolute max-w-[43rem] max-h-[55rem] flex flex-col gap-[1rem] translate-y-5 top-[37%] left-[25.5%] w-[53%] p-[1.2rem] h-full text-white">
            <input
              className="py-[.5rem] placeholder:text-black placeholder:opacity-70 bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none rounded-md shadow-inner shadow-black"
              type="text"
              name="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <div className="flex items-center gap-[.3rem] relative">
              <input
                className="py-[.5rem] placeholder:text-black placeholder:opacity-70 bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none rounded-md shadow-inner shadow-black"
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
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-gray-700 hover:text-gray-500 outline-none`}
                type="button"
                onClick={() => setIsPasswordVisible(true)}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </button>

              <button
                className={`${
                  isPasswordVisible ? "visible" : "hidden"
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-black  outline-none`}
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
                className="py-[.5rem] placeholder:text-black placeholder:opacity-70 bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none rounded-md shadow-inner shadow-black"
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
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-gray-700 hover:text-gray-500 outline-none`}
                type="button"
                onClick={() => setIsConfirmPasswordVisible(true)}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </button>

              <button
                className={`${
                  isConfirmPasswordVisible ? "visible" : "hidden"
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-black  outline-none`}
                type="button"
                onClick={() => setIsConfirmPasswordVisible(false)}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>

            <button
              className={`w-fit hover:scale-[1.03] whitespace-nowrap mb-[2rem] text-black self-end text-[1.5rem] py-[.5rem] px-[2rem] font-medium shadow-sm shadow-black border-none rounded-md transition-all active:scale-[0.97]`}
            >
              {type === "registration" ? "Sign Up" : "Sign In"}
            </button>

            <div className="text-black whitespace-nowrap self-end px-[1rem] py-[.5rem] rounded-md text-center w-fit text-[1.5rem] flex flex-col shadow-white shadow-sm relative">
              <div className="absolute bg-white opacity-30 top-0 bottom-0 left-0 right-0"></div>
              <p className="self-start z-[2] font-medium text-blacks">
                {type === "registration"
                  ? "Already have an accout?"
                  : "Do not have an accout?"}{" "}
              </p>
              <Link
                className="z-[1] hover:text-gray-700 font-medium self-end active:text-gray-700"
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
        </div>
      </div>
    </section>
  );
}
