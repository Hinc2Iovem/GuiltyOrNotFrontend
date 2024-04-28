import prev from "../../../assets/detective/character/previous.png";
import submitIcon from "../../../assets/detective/character/signaling.png";

type CreateCharacterQuestionsTypes = {
  currentPage: string;
  characterQuestion: string;
  setCharacterQuestion: React.Dispatch<React.SetStateAction<string>>;
  characterAnswer: string;
  setCharacterAnswer: React.Dispatch<React.SetStateAction<string>>;
  guiltyQuestion: string;
  setGuiltyQuestion: React.Dispatch<React.SetStateAction<string>>;
  guiltyAnswer: string;
  setGuiltyAnswer: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  setLevelOfDifficulty: React.Dispatch<React.SetStateAction<number>>;
  levelOfDifficulty: number;
};

export default function CreateCharacterQuestions({
  currentPage,
  characterQuestion,
  setCharacterQuestion,
  characterAnswer,
  setCharacterAnswer,
  guiltyQuestion,
  setGuiltyQuestion,
  guiltyAnswer,
  setGuiltyAnswer,
  setCurrentPage,
  levelOfDifficulty,
  setLevelOfDifficulty,
}: CreateCharacterQuestionsTypes) {
  return (
    <div
      className={`${
        currentPage === "questions" ? "" : "hidden"
      } flex flex-col transition-all w-full gap-[2rem] relative`}
    >
      <div className="flex md:flex-row flex-col justify-between gap-[2rem] relative">
        <div className="bg-white h-full w-full rounded-md flex flex-col gap-[1.5rem] p-[1.5rem] relative shadow-black shadow-sm">
          <h3 className="absolute top-[-2rem] left-[1rem] text-[1.3rem] text-gray font-medium">
            Character
          </h3>
          <div className="flex items-center gap-[.3rem] relative md:w-full">
            <label
              className={`absolute ${
                characterQuestion
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
              htmlFor="question"
            >
              Question
            </label>
            <input
              className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
              type="text"
              name="Question"
              id="question"
              value={characterQuestion}
              onChange={(e) => setCharacterQuestion(e.target.value)}
              placeholder="Question"
              autoComplete="off"
            />
          </div>

          <div className="flex items-center gap-[.3rem] relative md:w-full">
            <label
              className={`absolute ${
                characterAnswer
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
              htmlFor="answer"
            >
              Answer
            </label>
            <input
              className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
              type="text"
              name="Answer"
              id="answer"
              value={characterAnswer}
              onChange={(e) => setCharacterAnswer(e.target.value)}
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="bg-white h-full w-full rounded-md flex flex-col gap-[1.5rem] p-[1.5rem] relative shadow-black shadow-sm">
          <h3 className="absolute top-[-2rem] left-[1rem] text-[1.3rem] text-gray font-medium">
            Guilty
          </h3>

          <div className="flex items-center gap-[.3rem] relative md:w-full">
            <label
              className={`absolute ${
                guiltyQuestion
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
              htmlFor="guiltyquestion"
            >
              Question
            </label>
            <input
              className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
              type="text"
              name="guiltyQuestion"
              id="guiltyquestion"
              value={guiltyQuestion}
              onChange={(e) => setGuiltyQuestion(e.target.value)}
              placeholder="Question"
              autoComplete="off"
            />
          </div>

          <div className="flex items-center gap-[.3rem] relative md:w-full">
            <label
              className={`absolute ${
                guiltyAnswer
                  ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
                  : "opacity-0 left-[1.2rem] top-[.8rem]"
              } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
              htmlFor="guiltyanswer"
            >
              Answer
            </label>
            <input
              className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
              type="text"
              name="guiltyAnswer"
              id="guiltyanswer"
              value={guiltyAnswer}
              onChange={(e) => setGuiltyAnswer(e.target.value)}
              placeholder="Answer"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-[1rem] bg-white rounded-md w-fit p-[1.5rem] shadow-sm shadow-black border-[3px] border-double">
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
        <button className="relative w-[10rem] h-[3rem] rounded-md hover:scale-[1.03] mt-[-2rem] shrink-0">
          <p className="text-white font-medium text-[1.5rem] absolute top-[2.7rem] left-[25%] z-[10] ">
            Submit
          </p>
          <p className="text-white font-medium text-[1.5rem] absolute top-[5rem] left-[25%] z-[10]">
            Form
          </p>
          <img src={submitIcon} alt="Submit" className="absolute w-full" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => setCurrentPage("characters")}
        className="absolute w-[3rem] h-[3rem] top-[-5rem] hover:scale-[1.03] left-[0rem]"
      >
        <img src={prev} alt="Prev" className="w-full h-full" />
      </button>
    </div>
  );
}
