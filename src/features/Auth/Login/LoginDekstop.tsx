import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginTypes } from "./Login";
import detectiveBg from "../../../assets/detectiveBg2.jpg";
import detective from "../../../assets/detective-black.svg";
import guilty from "../../../assets/mug-shot.svg";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { ROLES } from "../../../consts/Roles";
import { Link } from "react-router-dom";

export default function LoginDekstop({
  isPasswordVisible,
  password,
  role,
  setIsPasswordVisible,
  setPassword,
  setRole,
  setUsername,
  username,
}: LoginTypes) {
  return (
    <section className="flex max-w-[146rem] items-center h-screen w-screen m-auto gap-[2rem] justify-between">
      <form className="p-[1rem]  rounded-md flex flex-col gap-[1.5rem] w-full">
        <div className="flex flex-col gap-[1.5rem] bg-white p-[1rem]">
          <div className="flex items-center gap-[.3rem] relative">
            <label
              className={`absolute ${
                username
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } bg-white duration-500 text-[1.5rem] z-[2]`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="py-[.5rem] text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
              type="text"
              name="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="flex items-center gap-[.3rem] relative">
            <label
              className={`absolute ${
                password
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } bg-white duration-500 text-[1.5rem] z-[1]`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="py-[.5rem] text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
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
              } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-black  outline-none`}
              type="button"
              onClick={() => setIsPasswordVisible(false)}
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>

        <div className="bg-white p-[1rem]">
          <div className="flex items-center gap-[1.5rem] outline-none border-[4px] border-dotted border-gray-400 px-[1rem] py-[.5rem]">
            <h3 className="text-[2rem] font-medium text-gray-500">Roles:</h3>
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
        </div>

        <div className="bg-white p-[1rem] text-center w-full text-[1.5rem]">
          <Link
            className="text-gray-400 hover:text-gray-500 font-medium"
            to="/auth/registration"
          >
            Sign Up
          </Link>
        </div>
      </form>

      <div className="h-full w-full ">
        <img
          src={detectiveBg}
          alt="Detective"
          className="max-w-[144rem] object-cover fixed top-0 right-1/2 left-1/2 bottom-0 m-auto"
        />
      </div>
    </section>
  );
}
