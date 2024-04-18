import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import arrowLeft from "../../../assets/guilty/arrowLeft.png";
import arrowRight from "../../../assets/guilty/arrowRight.png";
import guiltyBg from "../../../assets/guilty/guiltyBg.jpg";
import listOfOldPaper from "../../../assets/guilty/listOfOldPaper.png";
import submitButton from "../../../assets/guilty/submitButton.png";
import wantedPoster from "../../../assets/guilty/wantedPoster.png";
import { AuthTypes } from "../Auth";
import "./dekstopWanted.css";
import { Link } from "react-router-dom";

type SetCurrentOldPageTypes = "username" | "password" | "confirmPassword";

export default function AuthDekstopGuilty({
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
}: AuthTypes) {
  const [isFillingStarted, setIsFillingStarted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [oldPaperOutAndBack, setOldPaperOutAndBack] = useState(false);
  const [currentOldPaper, setCurrentOldPage] =
    useState<SetCurrentOldPageTypes>("username");

  const handleClickShaking = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 1000);
  };

  useEffect(() => {
    if (isShaking) {
      setOldPaperOutAndBack(true);
    }
  }, [isShaking]);

  return (
    <section className="flex w-full h-screen">
      <div className="w-full relative overflow-hidden">
        <img
          src={guiltyBg}
          alt="Detective"
          className="absolute object-contain w-full h-full scale-x-[2.09] scale-y-[1.8]"
        />
        <div className="bg-black w-full h-full absolute opacity-20"></div>
        <div className="relative max-w-[100rem] h-[65rem] m-auto ">
          <div className="relative h-full w-full">
            <img
              src={wantedPoster}
              className={`${
                isShaking ? "shake" : ""
              } absolute h-full object-contain w-full`}
            />
            <div
              className={`${
                isShaking ? "shakeGlass right-[30.3rem] top-[7.1rem]" : ""
              } absolute m-auto max-w-[39rem] max-h-[50.3rem] translate-y-[7.1rem] right-[30.3rem] w-full h-full bg-white opacity-20`}
            ></div>
            <button
              onClick={() => {
                setIsFillingStarted(true);
                handleClickShaking();
              }}
              className={`${
                isFillingStarted
                  ? "opacity-0 transition-all cursor-default"
                  : "opacity-50 cursor-pointer"
              } absolute bottom-[8rem] duration-700 ease-in-out right-[calc(50%-19rem)] text-[2.5rem] text-gray-800 z-[10] bg-white  px-[3rem] py-[.5rem] rounded-sm  active:scale-[.97]  transition-all hover:scale-[1.03]`}
            >
              Start
            </button>
          </div>

          <div
            className={`${
              oldPaperOutAndBack && isShaking === false
                ? "oldPaperOutAndBack z-[3]"
                : ""
            } absolute w-full h-full max-w-[38.7rem] z-[-1] max-h-[80.3rem] top-0 left-[65rem] `}
          >
            <form
              className={`${
                oldPaperOutAndBack && isShaking === false ? "visible" : "hidden"
              } gap-[1.5rem]  translate-x-[.1rem] m-auto w-full h-full translate-y-[6.5rem] p-[1rem] rounded-lg relative`}
            >
              <ThirdListOfOldPaper
                isPasswordVisible={isConfirmPasswordVisible}
                setIsPasswordVisible={setIsConfirmPasswordVisible}
                setValue={setConfirmPassword}
                value={confirmPassword}
                currentOldPage={currentOldPaper}
                setCurrentOldPage={setCurrentOldPage}
              />
              <SecondListOfOldPaper
                isPasswordVisible={isPasswordVisible}
                setIsPasswordVisible={setIsPasswordVisible}
                setValue={setPassword}
                value={password}
                currentOldPage={currentOldPaper}
                setCurrentOldPage={setCurrentOldPage}
              />
              <FirstListOfOldPaper
                setValue={setUsername}
                value={username}
                currentOldPage={currentOldPaper}
                setCurrentOldPage={setCurrentOldPage}
              />
              <img
                src={listOfOldPaper}
                alt="listOfOldPaper3"
                className="absolute md:h-[80%] object-cover md:w-[90%]  translate-x-[-10%] z-[1]"
              />
            </form>
          </div>

          <div className="absolute text-[1.2rem] text-right right-[30%] flex flex-col gap-[.5rem] z-[10] text-white">
            <p>
              {type === "registration"
                ? "Already have an accout?"
                : "Don't have an accout yet?"}
            </p>
            <Link
              className="hover:opacity-80"
              to={
                type === "registration" ? "/auth/login" : "/auth/registration"
              }
            >
              {type === "registration" ? "Sign In" : "Sign Up"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type ListsOfOldPaperTypes = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentOldPage: React.Dispatch<
    React.SetStateAction<SetCurrentOldPageTypes>
  >;
  currentOldPage: SetCurrentOldPageTypes;
};

function FirstListOfOldPaper({
  value,
  setValue,
  currentOldPage,
  setCurrentOldPage,
}: ListsOfOldPaperTypes) {
  return (
    <>
      <div
        className={`absolute ${
          currentOldPage === "username" ? "z-[3]" : "z-[1]"
        } h-full w-full`}
      >
        <img
          src={listOfOldPaper}
          alt="listOfOldPaper1"
          className="absolute md:h-[80%] object-cover md:w-[85%] "
        />
        <p
          className={`absolute max-w-[70%] top-[7rem] font-medium text-[1.3rem] left-[3.6rem]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum,
          sed sequi culpa nobis provident fuga animi maiores impedit voluptatem
          eius commodi dignissimos placeat vel velit iusto odit odio harum
          porro! Suscipit ex tempora tenetur delectus reiciendis perspiciatis,
          ratione, placeat cumque rerum pariatur vero eius? Amet aperiam
          asperiores pariatur beatae maiores non. Ex magni laborum eligendi.
          Aspernatur ipsam enim, delectus error expedita voluptatum minima
          doloribus non aliquam quaerat dicta, libero neque? Quam id placeat
          laudantium consectetur quo delectus, deserunt blanditiis
          exercitationem ad rem fugit ullam, eligendi sunt molestias mollitia
          facere pariatur vero eius? Amet aperiam asperiores pariatur.
        </p>
        <input
          className="py-[.2rem] absolute top-[calc(50%+10rem)] max-w-[23rem] left-[3rem] bg-transparent text-[2.1rem] text-black w-full px-[1rem] outline-none rounded-sm placeholder:text-black"
          type="text"
          name="Username"
          id="username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Username"
        />
        <button
          onClick={() => setCurrentOldPage("password")}
          className="absolute top-[calc(50%+10rem)] right-[9rem] hover:scale-[1.01] active:scale-[.97]"
          type="button"
        >
          <img src={arrowRight} className="w-[4rem] h-[4rem] -hue-rotate-15 " />
        </button>
      </div>
    </>
  );
}

type SecondAndThirdListOfOldPaperTypes = {
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
} & ListsOfOldPaperTypes;

function SecondListOfOldPaper({
  value,
  setValue,
  isPasswordVisible,
  setIsPasswordVisible,
  currentOldPage,
  setCurrentOldPage,
}: SecondAndThirdListOfOldPaperTypes) {
  return (
    <>
      <div
        className={`absolute ${
          currentOldPage === "password" ? "z-[3]" : "z-[1]"
        } h-full w-full`}
      >
        <img
          src={listOfOldPaper}
          alt="listOfOldPaper2"
          className="absolute md:h-[80%] object-cover md:w-[90%]  "
        />
        <p
          className={`absolute max-w-[70%] top-[7.5rem] font-medium text-[1.3rem] left-[5.3rem]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum,
          sed sequi culpa nobis provident fuga animi maiores impedit voluptatem
          eius commodi dignissimos placeat vel velit iusto odit odio harum
          porro! Suscipit ex tempora tenetur delectus reiciendis perspiciatis,
          ratione, placeat cumque rerum pariatur vero eius? Amet aperiam
          asperiores pariatur beatae maiores non. Ex magni laborum eligendi.
          Aspernatur ipsam enim, delectus error expedita voluptatum minima
          doloribus non aliquam quaerat dicta, libero neque? Quam id placeat
          laudantium consectetur quo delectus, deserunt blanditiis
          exercitationem ad rem fugit ullam, eligendi sunt molestias mollitia
          facere pariatur vero eius? Amet aperiam asperiores pariatur.
        </p>
        <input
          className={`py-[.2rem] top-[calc(50%+10rem)] placeholder:text-[2rem] max-w-[19rem] left-[7rem] absolute bg-transparent text-[2.1rem] text-black  px-[1rem] outline-none rounded-sm placeholder:text-black`}
          type={isPasswordVisible ? "text" : "password"}
          name="Password"
          id="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Password"
        />

        <button
          className={`${
            isPasswordVisible ? "hidden" : "visible"
          } transition-colors absolute top-[calc(50%+10.7rem)] right-[13rem] hover:scale-[1.1] text-[2rem] text-black outline-none`}
          type="button"
          onClick={() => setIsPasswordVisible(true)}
        >
          <FontAwesomeIcon icon={faEyeSlash} />
        </button>

        <button
          className={`${
            isPasswordVisible ? "visible" : "hidden"
          } transition-colors absolute top-[calc(50%+10.7rem)] right-[13rem] hover:scale-[1.1] text-[2rem] text-black  outline-none`}
          type="button"
          onClick={() => setIsPasswordVisible(false)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>

        <button
          onClick={() => setCurrentOldPage("username")}
          className="absolute top-[calc(50%+10rem)] left-[3.6rem] hover:scale-[1.01] active:scale-[.97]"
          type="button"
        >
          <img src={arrowLeft} className="w-[4rem] h-[4rem] -hue-rotate-15 " />
        </button>
        <button
          onClick={() => setCurrentOldPage("confirmPassword")}
          className="absolute top-[calc(50%+10rem)] right-[7rem] hover:scale-[1.01] active:scale-[.97]"
          type="button"
        >
          <img src={arrowRight} className="w-[4rem] h-[4rem] -hue-rotate-15 " />
        </button>
      </div>
    </>
  );
}

function ThirdListOfOldPaper({
  value,
  setValue,
  isPasswordVisible,
  setIsPasswordVisible,
  currentOldPage,
  setCurrentOldPage,
}: SecondAndThirdListOfOldPaperTypes) {
  return (
    <>
      <div
        className={`absolute ${
          currentOldPage === "confirmPassword" ? "z-[3]" : "z-[1]"
        } h-full w-full`}
      >
        <img
          src={listOfOldPaper}
          alt="listOfOldPaper2"
          className="absolute md:h-[80%] object-cover md:w-[90%] "
        />
        <p
          className={`absolute max-w-[70%] top-[7.5rem] font-medium text-[1.3rem] left-[5.3rem]`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum,
          sed sequi culpa nobis provident fuga animi maiores impedit voluptatem
          eius commodi dignissimos placeat vel velit iusto odit odio harum
          porro! Suscipit ex tempora tenetur delectus reiciendis perspiciatis,
          ratione, placeat cumque rerum pariatur vero eius? Amet aperiam
          asperiores pariatur beatae maiores non. Ex magni laborum eligendi.
          Aspernatur ipsam enim, delectus error expedita voluptatum minima
          doloribus non aliquam quaerat dicta, libero neque? Quam id placeat
          laudantium consectetur quo delectus, deserunt blanditiis
          exercitationem ad rem fugit ullam, eligendi sunt molestias mollitia
          facere pariatur vero eius? Amet aperiam asperiores pariatur.
        </p>
        <input
          className={`py-[.2rem] top-[calc(50%+10rem)] placeholder:text-[2rem] max-w-[19rem] left-[6rem] absolute bg-transparent text-[2.1rem] text-black px-[1rem] outline-none rounded-sm placeholder:text-black`}
          type={isPasswordVisible ? "text" : "password"}
          name="ConfirmPassword"
          id="confirmpassword"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Confirm Password"
        />

        <button
          className={`${
            isPasswordVisible ? "hidden" : "visible"
          } transition-colors absolute top-[calc(50%+10.7rem)] right-[12rem] hover:scale-[1.1] text-[2rem] text-black outline-none`}
          type="button"
          onClick={() => setIsPasswordVisible(true)}
        >
          <FontAwesomeIcon icon={faEyeSlash} />
        </button>

        <button
          className={`${
            isPasswordVisible ? "visible" : "hidden"
          } transition-colors absolute top-[calc(50%+10.7rem)] right-[12rem] hover:scale-[1.1] text-[2rem] text-black  outline-none`}
          type="button"
          onClick={() => setIsPasswordVisible(false)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button
          onClick={() => setCurrentOldPage("password")}
          className="absolute top-[calc(50%+10rem)] left-[2.6rem] hover:scale-[1.01] active:scale-[.97]"
          type="button"
        >
          <img src={arrowLeft} className="w-[4rem] h-[4rem] -hue-rotate-15 " />
        </button>
        <button
          className="absolute top-[calc(50%+11.1rem)] right-[7.2rem] hover:scale-[1.01] active:scale-[.97]"
          type="submit"
        >
          <img
            src={submitButton}
            alt="Submit"
            className="w-[4rem] h-[4rem] object-cover"
          />
        </button>
      </div>
    </>
  );
}
