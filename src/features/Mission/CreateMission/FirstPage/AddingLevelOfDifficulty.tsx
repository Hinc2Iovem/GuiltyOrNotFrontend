type AddingLevelOfDifficultyTypes = {
  setLevelOfDifficulty: React.Dispatch<React.SetStateAction<number>>;
  levelOfDifficulty: number;
};

export default function AddingLevelOfDifficulty({
  levelOfDifficulty,
  setLevelOfDifficulty,
}: AddingLevelOfDifficultyTypes) {
  return (
    <div className="flex flex-col gap-[1rem] max-w-[30rem] w-full rounded-md md:m-0 m-auto">
      <div className="bg-white w-full h-full shadow-md flex flex-col gap-[1rem] p-[1.5rem]">
        <label
          id="levelOfDifficulty"
          className="text-[1.2rem] font-medium text-gray-400"
        >
          Choose level of difficulty
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
    </div>
  );
}
