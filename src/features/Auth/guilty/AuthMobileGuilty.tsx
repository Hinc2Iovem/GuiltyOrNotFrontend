import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import buttonBg from "../../../assets/guilty/buttonBg.png";
import guiltyBg from "../../../assets/guilty/guiltyBg6.jpg";
import mobileBg from "../../../assets/guilty/mobileBg.png";
import { AuthTypes } from "../Auth";

export default function AuthMobileGuilty({
  confirmPassword,
  isConfirmPasswordVisible,
  isPasswordVisible,
  password,
  setConfirmPassword,
  setIsConfirmPasswordVisible,
  setIsPasswordVisible,
  setPassword,
  setUsername,
  type,
  username,
  handleSubmit,
}: AuthTypes) {
  return (
    <section className="flex w-full h-screen">
      <div className="w-full relative overflow-hidden h-full flex flex-col justify-center">
        <img
          src={guiltyBg}
          alt="Detective"
          className="absolute object-cover w-full h-full"
        />
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black md:opacity-0 w-full opacity-40"></div>

        <form
          onSubmit={handleSubmit}
          action="/submit"
          id="mobileGuilty"
          className="relative font-medium w-fit h-fit flex flex-col items-center mx-auto justify-center gap-[1rem]"
        >
          <img
            src={mobileBg}
            alt="woodenSign"
            className="w-[30rem] h-[30rem] "
          />
          <div className="absolute top-1/4 w-[90%] flex flex-col items-center m-auto justify-center gap-[1rem] p-[1rem] shadow-lg shadow-black rounded-md">
            <input
              className="bg-transparent shadow-inner shadow-black py-[.5rem] px-[1rem] text-[1.5rem] w-[17.2rem] outline-none placeholder:text-black text-white"
              type="text"
              name="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoComplete="off"
            />

            <div className="flex items-center gap-[.3rem] relative">
              <input
                className=" bg-transparent shadow-inner shadow-black py-[.5rem] px-[1rem] text-[1.5rem] w-[17.2rem] placeholder:text-black text-white outline-none "
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
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-black hover:text-gray-500 outline-none`}
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
              <input
                className=" bg-transparent shadow-inner shadow-black py-[.5rem] px-[1rem] text-[1.5rem] w-[17.2rem] placeholder:text-black text-white outline-none "
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
                } transition-colors absolute right-[1rem] hover:scale-[1.1] text-[1.5rem] text-black hover:text-gray-500 outline-none`}
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
          </div>
        </form>

        <button
          form="mobileGuilty"
          type="submit"
          className="relative outline-none left-1/2 w-[14rem] h-[4.5rem] rounded-md hover:scale-[1.02]"
        >
          <img
            src={buttonBg}
            alt="Submit"
            className="absolute top-0 w-full h-full object-cover rounded-md outline-none"
          />
          <p className="absolute left-[4rem] bottom-[1rem] text-[2rem] text-white ">
            Submit
          </p>
        </button>

        <div className="absolute text-[1.2rem] bottom-[calc(25%-4rem)] text-right right-[calc(25%-3rem)] flex flex-col gap-[.5rem] z-[10] text-white">
          <p>
            {type === "registration"
              ? "Already have an accout?"
              : "Don't have an accout yet?"}
          </p>
          <Link
            className="hover:opacity-80"
            to={type === "registration" ? "/auth/login" : "/auth/registration"}
          >
            {type === "registration" ? "Sign In" : "Sign Up"}
          </Link>
        </div>
      </div>
    </section>
  );
}
