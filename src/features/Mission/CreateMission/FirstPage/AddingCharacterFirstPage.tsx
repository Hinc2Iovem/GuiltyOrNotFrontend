import { forwardRef } from "react";
import AddingCharacterHeader from "./AddingCharacterHeader";
import AddingGuiltyVictim from "./AddingGuiltyVictim";
import AddingLevelOfDifficulty from "./AddingLevelOfDifficulty";

type AddingCharacterFirstPageTypes = {
  withVictim: boolean;
  setWithVictim: React.Dispatch<React.SetStateAction<boolean>>;
  levelOfDifficulty: number;
  setLevelOfDifficulty: React.Dispatch<React.SetStateAction<number>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.MutableRefObject<HTMLButtonElement | null>;
};

const AddingCharacterFirstPage = forwardRef<
  HTMLDivElement,
  AddingCharacterFirstPageTypes
>(
  (
    {
      withVictim,
      setWithVictim,
      levelOfDifficulty,
      setLevelOfDifficulty,
      setShowModal,
    },
    ref
  ) => {
    return (
      <>
        <div className="flex gap-[2rem] md:flex-row flex-col">
          <AddingCharacterHeader
            withVictim={withVictim}
            setWithVictim={setWithVictim}
            setShowModal={setShowModal}
            ref={ref}
          />

          <AddingLevelOfDifficulty
            levelOfDifficulty={levelOfDifficulty}
            setLevelOfDifficulty={setLevelOfDifficulty}
          />
        </div>

        <AddingGuiltyVictim withVictim={withVictim} />
      </>
    );
  }
);

export default AddingCharacterFirstPage;
