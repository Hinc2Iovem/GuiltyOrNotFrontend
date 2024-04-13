import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthTypes } from "../Auth";
import detectiveBg from "../../../assets/detectiveBg2.jpg";
import detective from "../../../assets/detective-black.svg";
import guilty from "../../../assets/mug-shot.svg";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { ROLES } from "../../../consts/Roles";
import { Link } from "react-router-dom";

export default function AuthDekstopDetective({
  isPasswordVisible,
  password,
  role,
  setIsPasswordVisible,
  setPassword,
  setRole,
  setUsername,
  username,
}: AuthTypes) {
  return (
    <section className="flex w-screen h-screen">
      <div className="h-full w-full relative">
        <img
          src={detectiveBg}
          alt="Detective"
          className=" w-full object-cover fixed top-0 right-0 left-0 bottom-0 m-auto"
        />
        <div className=" bg-white opacity-20 absolute max-w-[70rem] h-[50rem] justify-center top-[calc(50%-25rem)] left-[calc(50%-35rem)] shadow-sm shadow-white rounded-md w-full"></div>

        <form className="font-medium absolute p-[1rem] rounded-md flex flex-col w-full max-w-[70rem] h-[50rem] justify-center top-[calc(50%-25rem)] left-[calc(50%-35rem)] shadow-sm shadow-black">
          <div className="flex flex-col gap-[1.5rem] p-[1rem]">
            <div className="flex items-center gap-[.3rem] relative">
              <input
                className="py-[.5rem] bg-transparent shadow-inner shadow-black text-[3rem] text-black font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px] placeholder:text-black"
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
                className={`py-[.5rem] bg-transparent shadow-inner shadow-black text-[3rem] text-black font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px] placeholder:text-black`}
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
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[3rem] text-black outline-none`}
                type="button"
                onClick={() => setIsPasswordVisible(true)}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </button>

              <button
                className={`${
                  isPasswordVisible ? "visible" : "hidden"
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[3rem] text-white  outline-none`}
                type="button"
                onClick={() => setIsPasswordVisible(false)}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </div>
          </div>

          <div className="p-[1rem] ">
            <div className="flex items-center gap-[1.5rem] outline-none border-[2px] shadow-inner shadow-black border-gray-400 px-[1rem] py-[.5rem]">
              <h3 className="text-[4rem] font-medium text-black">Roles:</h3>
              <div className="flex items-center gap-[1.5rem]">
                <button onClick={() => setRole(ROLES.Detective)} type="button">
                  <img
                    src={detective}
                    className={`${
                      role === "Detective"
                        ? "shadow-md shadow-black scale-[1.05]"
                        : ""
                    } transition-all w-[5rem] object-fill h-[5rem] rounded-full hover:scale-[1.05]`}
                  />
                </button>
                <button onClick={() => setRole(ROLES.Guilty)} type="button">
                  <img
                    src={guilty}
                    className={`${
                      role === "Guilty"
                        ? "shadow-md shadow-black scale-[1.05]"
                        : ""
                    } transition-all w-[5rem] object-fill h-[5rem] rounded-full hover:scale-[1.05]`}
                  />
                </button>
              </div>
            </div>
          </div>

          <button className="w-fit mb-[2rem] text-gray-400 hover:text-black border-[1px] border-gray-400 rounded-md self-end text-[2rem] py-[1rem] px-[3rem] font-medium hover:shadow-sm hover:shadow-black hover:border-none hover:scale-[1.02] hover:rounded-md transition-all active:scale-[0.97] mr-[1rem]">
            Sign In
          </button>
          <div className=" self-end p-[1rem] text-center w-fit text-[1.8rem] flex flex-col">
            <p className="self-start text-white opacity-90 font-medium">
              Do not have an accout?
            </p>
            <Link
              className="text-white opacity-90 hover:text-black transition-colors self-end text-[2rem]"
              to="/auth/registration"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
