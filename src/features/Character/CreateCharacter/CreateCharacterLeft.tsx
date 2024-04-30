import { useCallback, useState } from "react";
import test from "../../../assets/detective/character/8.png";
import plus from "../../../assets/shared/profile/plus.png";
import { CreateCharacterTypes } from "./CreateCharacterMain";
import { useDropzone } from "react-dropzone";

export default function CreateCharacterLeft({
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
  setImgs,
}: CreateCharacterTypes) {
  const [imgOption, setImgOption] = useState("");
  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      const file = new FileReader();
      file.onload = function () {
        setImgOption(file.result as string);
      };
      file.readAsDataURL(acceptedFiles[0]);
      setImgs((prev) => ({
        ...prev,
        firstImg: acceptedFiles[0],
      }));
    },
    [setImgs]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className="bg-white h-full w-full rounded-md flex flex-col gap-[1.5rem] p-[1rem] relative shadow-black shadow-sm">
      <h3 className="absolute top-[-2rem] left-[1rem] text-[1.3rem] text-gray font-medium">
        Character
      </h3>
      <div
        onMouseEnter={() => setCharacterShowPlus(true)}
        onMouseLeave={() => setCharacterShowPlus(false)}
        className="relative max-w-[30rem] min-w-[20rem] m-auto"
      >
        <img
          src={imgOption ? imgOption : test}
          alt="Character"
          className="w-full h-full object-cover"
        />
        <div
          className={`${
            characterShowPlus ? "lg:block" : ""
          } hidden absolute left-[calc(50%-4rem)] w-[8rem] top-[calc(50%-6rem)] cursor-pointer hover:scale-[1.03]`}
          {...getRootProps()}
        >
          <input
            type="file"
            {...getInputProps()}
            className="absolute top-0 bottom-0 left-0 right-0 bg-white h-full w-full"
          />
          <img src={plus} alt="Plus" />
        </div>
        <div
          {...getRootProps()}
          className="lg:hidden absolute left-[calc(50%-4rem)] w-[8rem] top-[calc(50%-6rem)] cursor-pointer hover:scale-[1.03]"
        >
          <input
            type="file"
            {...getInputProps()}
            className="absolute top-0 bottom-0 left-0 right-0 bg-white h-full w-full"
          />
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
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
          type="text"
          name="Name"
          id="name"
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
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="number"
            name="Age"
            id="age"
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
            htmlFor="gender"
          >
            Gender
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="text"
            name="Gender"
            id="gender"
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
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
          id="description"
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
            htmlFor="feature"
          >
            Feature
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="text"
            name="Feature"
            id="feature"
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
            htmlFor="hairColor"
          >
            Hair color
          </label>
          <input
            className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
            type="text"
            name="HairColor"
            id="hairColor"
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
