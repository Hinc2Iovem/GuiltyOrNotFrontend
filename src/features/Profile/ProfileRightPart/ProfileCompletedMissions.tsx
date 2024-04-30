import { Link } from "react-router-dom";
import questionMark from "../../../assets/shared/profile/questionMark.png";
import plus from "../../../assets/shared/profile/plus.png";
import ButtonHoverPromptModal from "../../../components/shared/ButtonAsideHoverPromptModal/ButtonHoverPromptModal";

export default function ProfileCompletedMissions() {
  return (
    <div className="flex overflow-hidden w-full gap-[1rem] p-[.5rem]">
      <div className="w-[20rem] shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
        <ButtonHoverPromptModal
          contentName="Complete Mission"
          positionByAbscissa="right"
          variant={"rectangle"}
        >
          <Link to="/detective">
            <img src={plus} className="w-[5rem] h-[5rem] object-cover" />
          </Link>
        </ButtonHoverPromptModal>
      </div>
      <div className="w-[20rem]  shrink-0 relative bg-white h-[20rem] rounded-md flex items-center justify-center shadow-sm shadow-black">
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
  );
}
