import { forwardRef, useState } from "react";
import searchIcon from "../../../../assets/detective/mission/search.png";
import exitIcon from "../../../../assets/detective/mission/exit.png";

type AddingCharactersModalTypes = {
  showModal: boolean;
  ref: React.MutableRefObject<HTMLDivElement | null>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddingCharactersModal = forwardRef<
  HTMLDivElement,
  AddingCharactersModalTypes
>(({ showModal, setShowModal }, ref) => {
  const [search, setSearch] = useState("");

  return (
    <aside
      ref={ref}
      className={`${
        showModal ? "" : "hidden"
      } max-w-full md:max-w-[80rem] p-[2rem] top-0 left-[0rem] w-full h-full rounded-md z-[1000] absolute md:left-[calc(50%-39.5rem)]`}
    >
      <button
        onClick={() => setShowModal(false)}
        className="w-[3.5rem] h-[3.5rem] absolute right-[1rem] top-[1rem] md:hidden"
      >
        <img src={exitIcon} alt="Exit" className="object-contain w-full" />
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="w-full flex flex-col gap-[1rem] mt-[5rem]"
      >
        <div className="flex items-center justify-center h-[4rem] shadow-md shadow-gray-700 w-fit m-auto md:ml-[1rem] md:w-[50rem]">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="md:w-full w-[28rem] h-full rounded-bl-sm rounded-tl-sm px-[1rem] py-[.5rem] outline-none font-medium text-[1.2rem] bg-white"
            autoComplete="off"
            placeholder="Search by name or id"
          />
          <button
            type="button"
            className="w-[3.5rem] h-full bg-white rounded-br-sm rounded-tr-sm hover:scale-[1.01] active:scale-[0.99] transition-all outline-none"
          >
            <img
              src={searchIcon}
              alt="Search"
              className="w-full h-full object-contain"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] grid-cols-[repeat(auto-fit,28rem)] justify-center gap-[1rem] md:px-[1rem]">
          <div className="w-full md:h-[30rem] h-[28rem] bg-white shadow-md shadow-gray-700 rounded-md"></div>
          <div className="w-full md:h-[30rem] h-[28rem] bg-white shadow-md shadow-gray-700 rounded-md"></div>
          <div className="w-full md:h-[30rem] h-[28rem] bg-white shadow-md shadow-gray-700 rounded-md"></div>
        </div>
      </form>
    </aside>
  );
});

export default AddingCharactersModal;
