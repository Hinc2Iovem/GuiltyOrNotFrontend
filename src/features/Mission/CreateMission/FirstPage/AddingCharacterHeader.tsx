import ButtonHoverPromptModal from "../../../../components/shared/ButtonAsideHoverPromptModal/ButtonHoverPromptModal";
import addCharacter from "../../../../assets/detective/mission/addCharacter.png";
import { forwardRef } from "react";

export type AddingCharacterHeaderTypes = {
  withVictim: boolean;
  setWithVictim: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.ForwardedRef<HTMLButtonElement>;
};

const AddingCharacterHeader = forwardRef<
  HTMLDivElement,
  AddingCharacterHeaderTypes
>(({ withVictim, setWithVictim, setShowModal }, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-between gap-[2rem] bg-white p-[1rem] rounded-md shadow-sm shadow-gray-700"
    >
      <div className="flex gap-[2rem] items-center">
        <button
          className="px-[1rem] py-[.5rem] rounded-md shadow-md text-[1.5rem] hover:scale-[1.03] active:scale-[0.97]"
          type="submit"
        >
          Create Mission
        </button>
        <div className="flex flex-col">
          <label className="text-[1.4rem] text-gray-700">
            Does your mission have a victim?
          </label>
          <div className="flex gap-[.5rem]">
            <button
              type="button"
              onClick={() => setWithVictim(true)}
              className={`${
                withVictim
                  ? "bg-gray-700 text-white "
                  : "hover:bg-gray-700 hover:text-white"
              } py-[.5rem] px-[.6rem] text-[1.1rem] shadow-sm rounded-full transition-all`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setWithVictim(false)}
              className={`${
                withVictim
                  ? " hover:bg-gray-700 hover:text-white"
                  : "bg-gray-700 text-white"
              } py-[.5rem] px-[.65rem] text-[1.1rem] shadow-sm rounded-full transition-all`}
            >
              No
            </button>
          </div>
        </div>
      </div>

      <ButtonHoverPromptModal
        onClick={() => setShowModal(true)}
        contentName="Add Character"
        positionByAbscissa="right"
        className="w-[5rem] h-[5rem] p-[.5rem]"
        type="button"
      >
        <img
          src={addCharacter}
          alt="Add Character"
          className="w-full h-full translate-x-1"
        />
      </ButtonHoverPromptModal>
    </div>
  );
});

export default AddingCharacterHeader;
