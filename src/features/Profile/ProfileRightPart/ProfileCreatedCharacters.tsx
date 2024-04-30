import { Link } from "react-router-dom";
import questionMark from "../../../assets/shared/profile/questionMark.png";
import plus from "../../../assets/shared/profile/plus.png";
import ButtonHoverPromptModal from "../../../components/shared/ButtonAsideHoverPromptModal/ButtonHoverPromptModal";

export default function ProfileCreatedCharacters() {
  return (
    <div className="p-[.5rem] flex flex-col gap-[1rem] h-fit w-full">
      <form
        className="flex items-center gap-[1rem]"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <input
          className="bg-white text-[1.2rem] px-[1rem] font-medium py-[.5rem] rounded-md outline-none border-none w-[20rem]"
          type="text"
          placeholder="Search by title and id of a character"
        />
        <Link
          className="text-[1.2rem] font-medium text-gray-700 hover:text-black"
          to="/detective/characters"
        >
          See more
        </Link>
      </form>
      <div className="grid w-full gap-[1rem] grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]">
        <div className="w-full min-w-[20rem] relative flex bg-white p-[1rem] flex-col gap-[1rem]">
          <div className="bg-white rounded-md shadow-black shadow-sm ">
            <ButtonHoverPromptModal
              contentName="Create Character"
              positionByAbscissa="left"
              variant={"rectangle"}
              asideClasses="translate-y-[-5rem] translate-x-[8rem]"
            >
              <Link to="/detective/characters/new">
                <img src={plus} className="w-[5rem] h-[5rem] object-cover" />
              </Link>
            </ButtonHoverPromptModal>
          </div>
          <div className="relative bg-white rounded-md flex shadow-sm shadow-black">
            <img
              src={questionMark}
              className="w-[5rem] h-[5rem] object-cover"
            />
          </div>
        </div>
        <div className="w-full min-w-[20rem] relative flex bg-white p-[1rem] flex-col gap-[1rem]">
          <div className="bg-white rounded-md shadow-black shadow-sm ">
            <ButtonHoverPromptModal
              contentName="Create Character"
              positionByAbscissa="left"
              variant={"rectangle"}
              asideClasses="translate-y-[-5rem] translate-x-[8rem]"
            >
              <Link to="/detective/characters">
                <img src={plus} className="w-[5rem] h-[5rem] object-cover" />
              </Link>
            </ButtonHoverPromptModal>
          </div>
          <div className="relative bg-white rounded-md flex shadow-sm shadow-black">
            <img
              src={questionMark}
              className="w-[5rem] h-[5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
