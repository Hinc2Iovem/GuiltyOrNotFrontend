import testGuilty from "../../../assets/detective/character/8D.png";
import plus from "../../../assets/shared/profile/plus.png";
import { CreateCharacterTypes } from "./CreateCharacterMain";

export default function CreateCharacterRight({
  characterAge,
  characterDescription,
  characterFeature,
  characterGender,
  characterHairColor,
  characterName,
  characterShowPlus,
  setCharacterAge,
  setCharacterDescription,
  setCharacterFeature,
  setCharacterGender,
  setCharacterHairColor,
  setCharacterName,
  setCharacterShowPlus,
}: CreateCharacterTypes) {
  return (
    <div className="bg-white h-full w-full rounded-md flex flex-col gap-[1.5rem] p-[1rem] relative shadow-black shadow-sm">
      <h3 className="absolute top-[-2rem] left-[1rem] text-[1.3rem] text-gray font-medium">
        Guilty
      </h3>
      <div
        onMouseEnter={() => setCharacterShowPlus(true)}
        onMouseLeave={() => setCharacterShowPlus(false)}
        className="relative max-w-[30rem] min-w-[20rem] m-auto"
      >
        <img
          src={testGuilty}
          alt="Guilty"
          className="w-full h-full object-cover"
        />
        <div
          className={`${
            characterShowPlus ? "lg:block" : ""
          } hidden absolute left-[calc(50%-4rem)] w-[8rem] top-[calc(50%-6rem)] cursor-pointer hover:scale-[1.03]`}
        >
          <img src={plus} alt="Plus" />
        </div>
        <div className="lg:hidden absolute left-[calc(50%-4rem)] w-[8rem] top-[calc(50%-6rem)] cursor-pointer hover:scale-[1.03]">
          <img src={plus} alt="Plus" />
        </div>
      </div>
      <div className="flex items-center gap-[.3rem] relative md:w-full">
        <label
          className={`absolute ${
            characterName
              ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
              : "opacity-0 left-[1.2rem] top-[.8rem]"
          } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
          htmlFor="guiltyname"
        >
          Name
        </label>
        <input
          className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
          type="text"
          name="guiltyName"
          id="guiltyname"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Name"
          autoComplete="off"
        />
      </div>
      <div className="flex items-center gap-[1rem]">
        <div className="flex items-center gap-[.3rem] relative md:w-full">
          <label
            className={`absolute ${
              characterAge
                ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                : "opacity-0 left-[1.2rem] top-[.8rem]"
            } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
            htmlFor="guiltyage"
          >
            Age
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="number"
            name="guiltyAge"
            id="guiltyage"
            value={characterAge}
            onChange={(e) => setCharacterAge(+e.target.value)}
            placeholder="Age"
            autoComplete="off"
          />
        </div>
        <div className="flex items-center gap-[.3rem] relative md:w-full">
          <label
            className={`absolute ${
              characterGender
                ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                : "opacity-0 left-[1.2rem] top-[.8rem]"
            } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
            htmlFor="guiltygender"
          >
            Gender
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="text"
            name="guiltyGender"
            id="guiltygender"
            value={characterGender}
            onChange={(e) => setCharacterGender(e.target.value)}
            placeholder="Gender"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="flex items-center gap-[.3rem] relative md:w-full">
        <label
          className={`absolute ${
            characterDescription
              ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
              : "opacity-0 left-[1.2rem] top-[.8rem]"
          } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
          htmlFor="guiltydescription"
        >
          Description
        </label>
        <textarea
          className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
          id="guiltydescription"
          value={characterDescription}
          onChange={(e) => setCharacterDescription(e.target.value)}
          placeholder="Description"
          autoComplete="off"
          rows={10}
          cols={10}
        />
      </div>

      <div className="flex gap-[1rem]">
        <div className="flex items-center gap-[.3rem] relative md:w-full">
          <label
            className={`absolute ${
              characterFeature
                ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                : "opacity-0 left-[1.2rem] top-[.8rem]"
            } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
            htmlFor="guiltyfeature"
          >
            Feature
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="text"
            name="guiltyFeature"
            id="guiltyfeature"
            value={characterFeature}
            onChange={(e) => setCharacterFeature(e.target.value)}
            placeholder="Feature"
            autoComplete="off"
          />
        </div>

        <div className="flex items-center gap-[.3rem] relative md:w-full">
          <label
            className={`absolute ${
              characterHairColor
                ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                : "opacity-0 left-[1.2rem] top-[.8rem]"
            } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
            htmlFor="guiltyhairColor"
          >
            Hair color
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="text"
            name="guiltyHairColor"
            id="guiltyhairColor"
            value={characterHairColor}
            onChange={(e) => setCharacterHairColor(e.target.value)}
            placeholder="Hair color"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
