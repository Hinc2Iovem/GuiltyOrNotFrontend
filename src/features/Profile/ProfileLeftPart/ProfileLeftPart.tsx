import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";
import ProfileUserProgress from "./ProfileUserProgress";
import ProfileMoney from "./ProfileMoney";
import createCharacter from "../../../assets/shared/profile/createCharacter.png";
import createMission from "../../../assets/shared/profile/createMission.png";
import ButtonHoverPromptModal from "../../../components/shared/ButtonAsideHoverPromptModal/ButtonHoverPromptModal";

export default function ProfileLeftPart() {
  const [showUserProgress, setShowUserProgress] = useState(false);

  return (
    <div className="flex sticky flex-col gap-[2rem] items-center md:items-start shrink-0">
      <ProfileAvatar />
      <div className="overflow-hidden flex flex-col gap-[2rem]">
        <ProfileUserProgress
          showUserProgress={showUserProgress}
          setShowUserProgress={setShowUserProgress}
        />
      </div>
      <div
        className={`${
          showUserProgress ? "translate-y-[-1rem]" : "translate-y-[-8rem]"
        } transition-all`}
      >
        <ProfileMoney />
        <div className="w-[20rem] bg-white flex items-center justify-between px-[1rem] py-[.5rem]">
          <ButtonHoverPromptModal
            contentName="Create Character"
            positionByAbscissa="left"
            variant={"rectangleWithShadow"}
            hideModal={false}
            className="p-0"
          >
            <Link to="/detective/characters/new">
              <img
                src={createCharacter}
                alt="CreateCharacter"
                className="w-[3rem] h-[3rem]"
              />
            </Link>
          </ButtonHoverPromptModal>
          <ButtonHoverPromptModal
            contentName="Create Mission"
            positionByAbscissa="right"
            variant={"rectangleWithShadow"}
            hideModal={false}
            className="p-0"
          >
            <Link to="/detective/missions/new">
              <img
                src={createMission}
                alt="createMission"
                className="w-[3rem] h-[3rem]"
              />
            </Link>
          </ButtonHoverPromptModal>
        </div>
      </div>
    </div>
  );
}
