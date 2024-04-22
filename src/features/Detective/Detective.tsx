import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DivBgColor from "../../components/DivBgColor";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import ButtonHoverPromptModal from "../../components/shared/ButtonAsideHoverPromptModal/ButtonHoverPromptModal";

export default function Detective() {
  return (
    <section className="p-[3rem]">
      <DivBgColor bgColor="bg-cyan-100" />
      <header className="bg-white w-full max-w-[146rem] p-[1rem] rounded-lg shadow-sm shadow-gray-400 flex items-center">
        <ButtonHoverPromptModal
          contentName="Profile"
          positionByAbscissa="right"
          className="ml-auto w-[3rem] h-[3rem] hover:scale-[1.05] active:scale-[.95] transition-all"
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            className="w-full h-full text-gray-700 hover:text-black transition-all"
          />
        </ButtonHoverPromptModal>
      </header>
    </section>
  );
}
