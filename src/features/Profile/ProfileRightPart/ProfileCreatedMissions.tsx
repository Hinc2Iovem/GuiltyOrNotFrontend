import { Link } from "react-router-dom";
import questionMark from "../../../assets/shared/profile/questionMark.png";
import plus from "../../../assets/shared/profile/plus.png";
import ButtonHoverPromptModal from "../../../components/shared/ButtonAsideHoverPromptModal/ButtonHoverPromptModal";

export default function ProfileCreatedMissions() {
  return (
    <div className="p-[.5rem] flex flex-col gap-[1rem] overflow-hidden">
      <form
        className="flex items-center gap-[1rem]"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <input
          className="bg-white text-[1.2rem] px-[1rem] font-medium py-[.5rem] rounded-md outline-none border-none w-[20rem]"
          type="text"
          placeholder="Search by title and id of a mission"
        />
        <Link
          className="text-[1.2rem] font-medium text-gray-700 hover:text-black"
          to="/detective/missions"
        >
          See more
        </Link>
      </form>
      <div className="flex w-full gap-[1rem] ">
        <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
          <ButtonHoverPromptModal
            contentName="Create Mission"
            positionByAbscissa="right"
            variant={"rectangle"}
          >
            <Link to="/detective/missions/new">
              <img src={plus} className="w-[5rem] h-[5rem] object-cover" />
            </Link>
          </ButtonHoverPromptModal>
        </div>
        <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
          <img src={questionMark} className="w-[5rem] h-[5rem] object-cover" />
        </div>
        <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
          <img src={questionMark} className="w-[5rem] h-[5rem] object-cover" />
        </div>
        <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
          <img src={questionMark} className="w-[5rem] h-[5rem] object-cover" />
        </div>
        <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
          <img src={questionMark} className="w-[5rem] h-[5rem] object-cover" />
        </div>
        <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
          <img src={questionMark} className="w-[5rem] h-[5rem] object-cover" />
        </div>
        <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
          <img src={questionMark} className="w-[5rem] h-[5rem] object-cover" />
        </div>
      </div>
    </div>
  );
}
