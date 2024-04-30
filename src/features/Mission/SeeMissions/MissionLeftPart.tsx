import { useState } from "react";

export default function MissionLeftPart() {
  const [levelOfDifficulty, setLevelOfDifficulty] = useState(1);

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
          name="FindMissions"
          id="findMissions"
          placeholder="Find by id or title"
        />
        <div className="flex flex-col gap-[1rem]">
          <label
            id="levelOfDifficulty"
            className="text-[1.2rem] font-medium text-gray-400"
          >
            Search by level of difficulty
          </label>
          <div className="flex gap-[.3rem]">
            <button
              onClick={() => setLevelOfDifficulty(1)}
              className={`text-[1.3rem] ${
                levelOfDifficulty === 1
                  ? "text-white bg-gray-700"
                  : "shadow-sm  shadow-black hover:bg-gray-700 hover:text-white"
              } transition-all scale-[1.03] py-[.5rem] px-[1.1rem] rounded-full`}
              type="button"
            >
              1
            </button>
            <button
              onClick={() => setLevelOfDifficulty(2)}
              className={`text-[1.3rem] ${
                levelOfDifficulty === 2
                  ? "text-white bg-gray-700"
                  : "shadow-sm  shadow-black hover:bg-gray-700 hover:text-white"
              } transition-all scale-[1.03] py-[.5rem] px-[1.1rem] rounded-full`}
              type="button"
            >
              2
            </button>
            <button
              onClick={() => setLevelOfDifficulty(3)}
              className={`text-[1.3rem] ${
                levelOfDifficulty === 3
                  ? "text-white bg-gray-700"
                  : "shadow-sm  shadow-black hover:bg-gray-700 hover:text-white"
              } transition-all scale-[1.03] py-[.5rem] px-[1.1rem] rounded-full`}
              type="button"
            >
              3
            </button>
            <button
              onClick={() => setLevelOfDifficulty(4)}
              className={`text-[1.3rem] ${
                levelOfDifficulty === 4
                  ? "text-white bg-gray-700"
                  : "shadow-sm  shadow-black hover:bg-gray-700 hover:text-white"
              } transition-all scale-[1.03] py-[.5rem] px-[1.1rem] rounded-full`}
              type="button"
            >
              4
            </button>
            <button
              onClick={() => setLevelOfDifficulty(5)}
              className={`text-[1.3rem] ${
                levelOfDifficulty === 5
                  ? "text-white bg-gray-700"
                  : "shadow-sm  shadow-black hover:bg-gray-700 hover:text-white"
              } transition-all scale-[1.03] py-[.5rem] px-[1.1rem] rounded-full`}
              type="button"
            >
              5
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
