import { useRef } from "react";
import useOutOfModalTwoRefs from "../../../hooks/useOutOfModalTwoRefs";

type ProfileUserProgressTypes = {
  setShowUserProgress: React.Dispatch<React.SetStateAction<boolean>>;
  showUserProgress: boolean;
};

export default function ProfileUserProgress({
  setShowUserProgress,
  showUserProgress,
}: ProfileUserProgressTypes) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalUserProgressRef = useRef<HTMLDivElement | null>(null);
  useOutOfModalTwoRefs({
    modalRef,
    showModal: showUserProgress,
    setShowModal: setShowUserProgress,
    secondModalRef: modalUserProgressRef,
  });
  return (
    <>
      <div
        ref={modalRef}
        onClick={() => setShowUserProgress(true)}
        className="w-[20rem] bg-white rounded-md p-[.5rem] relative cursor-pointer"
      >
        <p className="text-[1.4rem] font-medium text-gray-700">
          Detective - Hinc
        </p>
        <div
          className={`absolute right-1/2 left-0 bottom-0 h-[2px] bg-green-400`}
        ></div>
      </div>
      <div
        ref={modalUserProgressRef}
        className={` bg-white w-[20rem] h-[5rem] ${
          showUserProgress ? "left-[0]" : "md:left-[-25rem] left-[-50rem]"
        } transition-all relative top-[-1rem]`}
      ></div>
    </>
  );
}
