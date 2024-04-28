import plus from "../../../../assets/shared/profile/plus.png";

type AddingGuiltyVictimTypes = {
  withVictim: boolean;
};

export default function AddingGuiltyVictim({
  withVictim,
}: AddingGuiltyVictimTypes) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,30rem)] mt-[3.5rem] gap-[2rem] justify-center md:justify-start">
      <div className="bg-white shrink-0 rounded-md shadow-sm p-[1rem] w-full relative h-[30rem] cursor-pointer hover:scale-[1.03]">
        <img
          src={plus}
          alt="Add Guilty"
          className="w-[15rem] h-[15rem] top-1/4 left-1/4 absolute"
        />
        <h3 className="absolute top-[1rem] left-[1rem] text-[1.8rem] font-medium text-gray-700">
          Guilty
        </h3>
      </div>
      <div className="bg-white shrink-0 rounded-md shadow-sm p-[1rem] w-full relative h-[30rem] cursor-pointer hover:scale-[1.03]">
        <img
          src={plus}
          alt="Add Mission"
          className="w-[15rem] h-[15rem] top-1/4 left-1/4 absolute"
        />
        <h3 className="absolute top-[1rem] left-[1rem] text-[1.8rem] font-medium text-gray-700">
          Mission
        </h3>
      </div>
      <div
        className={`${
          withVictim ? "" : "hidden"
        } bg-white shrink-0 rounded-md shadow-sm p-[1rem] w-full relative h-[30rem] cursor-pointer hover:scale-[1.03]`}
      >
        <img
          src={plus}
          alt="Add Guilty"
          className="w-[15rem] h-[15rem] top-1/4 left-1/4 absolute"
        />
        <h3 className="absolute top-[1rem] left-[1rem] text-[1.8rem] font-medium text-gray-700">
          Victim
        </h3>
      </div>
    </div>
  );
}
