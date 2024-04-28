import { Link } from "react-router-dom";
import user from "../../assets/shared/header/user.png";
import ButtonHoverPromptModal from "../../components/shared/ButtonAsideHoverPromptModal/ButtonHoverPromptModal";

type HeaderMainTypes = {
  headerColor: string;
};

export default function HeaderMain({ headerColor }: HeaderMainTypes) {
  return (
    <header
      className={`${headerColor} w-full p-[1rem] rounded-lg shadow-sm shadow-gray-400 flex items-center`}
    >
      <div className="flex ml-auto outline-none relative border-none">
        <ButtonHoverPromptModal
          contentName="Profile"
          positionByAbscissa="right"
          className={`w-[3rem] h-[3rem] hover:scale-[1.05] active:scale-[.95] transition-all`}
        >
          <Link to="/detective/profile">
            <img src={user} alt="Profile" className="w-full h-full" />
          </Link>
        </ButtonHoverPromptModal>
      </div>
    </header>
  );
}
