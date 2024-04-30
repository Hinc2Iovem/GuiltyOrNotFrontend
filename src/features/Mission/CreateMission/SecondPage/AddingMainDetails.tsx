export type AddingMainDetailsTypes = {
  title: string;
  description: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handleImportingText?: () => void;
};

export default function AddingMainDetails({
  title,
  setTitle,
  description,
  setDescription,
  handleImportingText,
}: AddingMainDetailsTypes) {
  return (
    <div className="flex flex-col gap-[2rem] bg-white p-[1.5rem] rounded-md shadow-sm shadow-gray-700 mt-[2rem] items-center justify-center sm:w-[45rem] w-[30rem] m-auto">
      <div className="flex items-center gap-[.3rem] relative w-full">
        <label
          className={`absolute ${
            title
              ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
              : "opacity-0 left-[1.2rem] top-[.8rem]"
          } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
          type="text"
          name="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          autoComplete="off"
        />
      </div>
      <div className="flex items-center gap-[.3rem] relative w-full">
        <label
          className={`absolute ${
            description
              ? "opacity-100 top-[-1.1rem] left-[1.2rem]"
              : "opacity-0 left-[1.2rem] top-[.8rem]"
          } bg-white transparent duration-500 text-[1.5rem] z-[2]`}
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="py-[.5rem] text-black bg-transparent text-[1.5rem] font-medium w-full px-[1rem] outline-none border-[3px] border-double border-gray-400 focus:border-[4px]"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={20}
        />
      </div>
      <button
        className="w-full text-[1.3rem] bg-blue-100 text-gray-700 font-medium py-[.5rem] rounded-md hover:scale-[1.01] active:scale-[0.99]"
        onClick={handleImportingText}
        type="button"
      >
        Upload Description
      </button>
    </div>
  );
}
