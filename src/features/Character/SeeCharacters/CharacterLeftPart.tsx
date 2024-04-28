import { useState } from "react";

export default function CharacterLeftPart() {
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<string>();
  const [hairColor, setHairColor] = useState<string>();

  return (
    <div className="flex flex-col bg-white rounded-md p-[1rem] shadow-sm shadow-gray-700 h-fit">
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="flex flex-col gap-[2rem]"
      >
        <input
          className="px-[1rem] py-[.5rem] text-gray-700 font-medium border-none outline-none shadow-inner shadow-gray-700 rounded-md text-[1.5rem]"
          type="text"
          name="FindCharacters"
          id="findCharacters"
          placeholder="Find by id or title"
        />
        <div className="flex flex-col gap-[1rem]">
          <label id="age" className="text-[1.2rem] font-medium text-gray-400">
            Search by age
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(+e.target.value)}
            className="w-fit px-[1rem] py-[.5rem] text-gray-700 font-medium border-none outline-none shadow-sm shadow-gray-700 rounded-md text-[1rem]"
            placeholder="23"
          />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <label
            id="gender"
            className="text-[1.2rem] font-medium text-gray-400"
          >
            Search by gender
          </label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-fit px-[1rem] py-[.5rem] text-gray-700 font-medium border-none outline-none shadow-sm shadow-gray-700 rounded-md text-[1rem]"
            placeholder="Male"
          />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <label
            id="hairColor"
            className="text-[1.2rem] font-medium text-gray-400"
          >
            Search by hair color
          </label>
          <input
            type="text"
            value={hairColor}
            onChange={(e) => setHairColor(e.target.value)}
            className="w-fit px-[1rem] py-[.5rem] text-gray-700 font-medium border-none outline-none shadow-sm shadow-gray-700 rounded-md text-[1rem]"
            placeholder="Blonde"
          />
        </div>
      </form>
    </div>
  );
}
