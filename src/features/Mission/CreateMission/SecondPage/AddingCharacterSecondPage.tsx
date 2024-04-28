import DetectiveMainStars from "../../../Detective/DetectiveMainStars";
import AddingMainDetails, { AddingMainDetailsTypes } from "./AddingMainDetails";
import useLocalStorage from "../../../../hooks/useLocalStorage";

type AddingCharacterSecondPageTypes = {
  levelOfDifficulty: number;
} & AddingMainDetailsTypes;

export default function AddingCharacterSecondPage({
  levelOfDifficulty,
  description,
  setDescription,
  setTitle,
  title,
}: AddingCharacterSecondPageTypes) {
  const [missionDescription, setMissionDescription] = useLocalStorage<string>(
    "missionDescription",
    ""
  );
  const [missionTitle, setMissionTitle] = useLocalStorage<string>(
    "missionTitle",
    ""
  );

  const handleImportingText = () => {
    if (description.length > 300) {
      setMissionDescription(description.substring(0, 300));
      setMissionDescription((prev) => prev + "...");
    }
    if (title.length > 50) {
      setMissionTitle(title.substring(0, 50));
      setMissionTitle((prev) => prev + "...");
    }
  };

  return (
    <div className="w-full flex md:flex-row flex-col-reverse gap-[3rem] justify-center">
      <AddingMainDetails
        description={description}
        setDescription={setDescription}
        setTitle={setTitle}
        title={title}
        handleImportingText={handleImportingText}
      />
      <div
        className={`flex flex-col gap-[2rem] bg-white p-[1rem] rounded-md shadow-sm shadow-gray-700 mt-[2rem] items-center justify-center sm:w-[45rem] w-[30rem] m-auto`}
      >
        <div className="bg-white h-full w-full shadow-sm shadow-black rounded-md p-[1rem] flex flex-col gap-[1rem]">
          <div>
            <img src="" alt="mission1" />
          </div>
          <div className="mt-auto flex flex-col gap-[.5rem]">
            <h4 className="text-[1.4rem]">
              {missionTitle ? missionTitle : "Text"}
            </h4>
            <p>
              {missionDescription
                ? missionDescription
                : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              itaque officiis dolor, dignissimos harum voluptatem delectus!
              Nostrum voluptate rerum debitis!`}
            </p>
            <div className="flex items-center justify-between">
              <DetectiveMainStars numberOfStars={levelOfDifficulty} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
