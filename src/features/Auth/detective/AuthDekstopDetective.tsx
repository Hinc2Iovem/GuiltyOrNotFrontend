import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import detectiveBg from "../../../assets/detective/detectiveBg2.jpg";
import woodenSign from "../../../assets/detective/sign1.png";
import { AuthTypes } from "../Auth";

export default function AuthDekstopDetective({
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
    <section className="flex w-screen h-screen">
      <div className="h-full w-full relative overflow-hidden">
        <img
          src={detectiveBg}
          alt="Detective"
          className="w-full object-cover fixed top-0 right-0 left-0 bottom-0 m-auto"
        />
        <div className="relative max-w-[100rem] h-[80rem] m-auto">
          <img
            src={woodenSign}
            className="absolute h-full object-contain top-[-10%] w-full"
          />
          <form
            className={`font-medium ${
              type === "registration" ? "-translate-y-12" : "-translate-y-20"
            }  translate-x-4 p-[1rem] rounded-md flex flex-col w-[52.3rem] h-full justify-center m-auto`}
          >
            <div
              className={`${
                type === "registration" ? "gap-[1rem] pb-0" : "gap-[2rem]"
              } flex flex-col gap-[1rem] p-[1rem]`}
            >
              <div className="flex items-center relative gap-[1rem]">
                <input
                  className="py-[.5rem] bg-transparent  text-[3rem] text-black font-medium w-full px-[1rem] outline-none shadow-inner shadow-black rounded-sm placeholder:text-gray-700"
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
                  className={`py-[.5rem] bg-transparent  text-[3rem] text-black font-medium w-full px-[1rem] outline-none shadow-inner shadow-black rounded-sm placeholder:text-gray-700`}
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
                  } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[3rem] text-gray-700 outline-none`}
                  type="button"
                  onClick={() => setIsPasswordVisible(true)}
                >
                  <FontAwesomeIcon icon={faEyeSlash} />
                </button>

                <button
                  className={`${
                    isPasswordVisible ? "visible" : "hidden"
                  } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[3rem] text-black  outline-none`}
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
                  className={`py-[.5rem] bg-transparent  text-[3rem] text-black font-medium w-full px-[1rem] outline-none shadow-inner shadow-black rounded-sm placeholder:text-gray-700`}
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
                  } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[3rem] text-gray-700 outline-none`}
                  type="button"
                  onClick={() => setIsConfirmPasswordVisible(true)}
                >
                  <FontAwesomeIcon icon={faEyeSlash} />
                </button>

                <button
                  className={`${
                    isConfirmPasswordVisible ? "visible" : "hidden"
                  } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[3rem] text-black  outline-none`}
                  type="button"
                  onClick={() => setIsConfirmPasswordVisible(false)}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </div>
            </div>
            <button className="w-fit text-black rounded-md self-end text-[2.2rem] py-[1.3rem] px-[3rem] font-medium shadow-sm shadow-black hover:scale-[1.02] transition-all active:scale-[0.97] mr-[1rem] ">
              {type === "registration" ? "Sign Up" : "Sign In"}
            </button>
            <div
              className={`${
                type === "registration" ? "text-white" : "text-black"
              } self-end p-[1rem] text-center w-fit text-[1.8rem] flex flex-col`}
            >
              <p className="self-start  opacity-90 font-medium">
                {type === "registration"
                  ? "Already have an accout?"
                  : "Do not have an accout?"}{" "}
              </p>
              <Link
                className=" hover:opacity-70 opacity-90 transition-colors self-end text-[2rem]"
                to={
                  type === "registration" ? "/auth/login" : "/auth/registration"
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
