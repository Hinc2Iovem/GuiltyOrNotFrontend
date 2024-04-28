import next from "../../../assets/detective/character/next.png";
import prev from "../../../assets/detective/character/previous.png";

type CreateMissionPageTransitionBtnsTypes = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

export default function CreateMissionPageTransitionBtns({
  setCurrentPage,
  currentPage,
}: CreateMissionPageTransitionBtnsTypes) {
  return (
    <div className="absolute w-full flex justify-between top-[-4rem]">
      <button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          }
        }}
        type="button"
        className={`${
          currentPage > 1 ? "block" : "delay-100 hidden"
        } w-[3.5rem] h-[3.5rem] hover:shadow-md rounded-full transition-all active:scale-[0.98] hover:scale-[1.02] outline-none`}
      >
        <img src={prev} alt="Prev Page" className="w-full" />
      </button>

      <button
        onClick={() => {
          if (currentPage < 2) {
            setCurrentPage((prev) => prev + 1);
          }
        }}
        type="button"
        className={`${
          currentPage >= 1 && currentPage < 2 ? "block" : "delay-100 hidden"
        } ${
          currentPage == 1 ? "ml-auto" : ""
        } w-[3.5rem] h-[3.5rem] hover:shadow-md rounded-full transition-all active:scale-[0.98] hover:scale-[1.02] outline-none`}
      >
        <img src={next} alt="Next Page" className="w-full" />
      </button>
    </div>
  );
}
