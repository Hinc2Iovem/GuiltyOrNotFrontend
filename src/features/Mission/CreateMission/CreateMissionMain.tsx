import { useRef, useState } from "react";
import useOutOfModalTwoRefs from "../../../hooks/useOutOfModalTwoRefs";
import CreateMissionPageTransitionBtns from "./CreateMissionPageTransitionBtns";
import AddingCharactersModal from "./FirsPageModal/AddingCharactersModal";
import AddingCharacterFirstPage from "./FirstPage/AddingCharacterFirstPage";
import AddingCharacterSecondPage from "./SecondPage/AddingCharacterSecondPage";

export default function CreateMissionMain() {
  const [currentPage, setCurrentPage] = useState(1);

  const [withVictim, setWithVictim] = useState(false);
  const [levelOfDifficulty, setLevelOfDifficulty] = useState(1);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const [showModal, setShowModal] = useState(false);

  const secondModalRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOutOfModalTwoRefs({ setShowModal, showModal, modalRef, secondModalRef });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      localStorage.setItem("missionDescription", "");
      localStorage.setItem("missionTitle", "");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="w-full h-full">
        <form className="w-full flex-col gap-[3rem] relative">
          <CreateMissionPageTransitionBtns
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {currentPage == 1 ? (
            <AddingCharacterFirstPage
              levelOfDifficulty={levelOfDifficulty}
              setLevelOfDifficulty={setLevelOfDifficulty}
              setWithVictim={setWithVictim}
              withVictim={withVictim}
              setShowModal={setShowModal}
              ref={modalRef}
            />
          ) : currentPage == 2 ? (
            <AddingCharacterSecondPage
              description={description}
              setDescription={setDescription}
              setTitle={setTitle}
              title={title}
              levelOfDifficulty={levelOfDifficulty}
            />
          ) : (
            ""
          )}
        </form>

        <AddingCharactersModal
          showModal={showModal}
          ref={secondModalRef}
          setShowModal={setShowModal}
        />
      </main>
      <div
        className={`${
          showModal ? "" : "hidden"
        } fixed top-0 bottom-0 right-0 left-0 bg-black z-[1] opacity-30`}
      ></div>
    </>
  );
}
