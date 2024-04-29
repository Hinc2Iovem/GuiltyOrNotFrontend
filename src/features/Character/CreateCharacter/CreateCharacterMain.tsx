import { useState } from "react";
import next from "../../../assets/detective/character/next.png";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CreateCharacterLeft from "./CreateCharacterLeft";
import CreateCharacterQuestions from "./CreateCharacterQuestions";
import CreateCharacterRight from "./CreateCharacterRight";
import { CharaterBodyTypes } from "../CharacterTypes";
import axios from "axios";

export type CreateCharacterTypes = {
  characterShowPlus: boolean;
  setCharacterShowPlus: React.Dispatch<React.SetStateAction<boolean>>;
  characterName: string;
  setCharacterName: React.Dispatch<React.SetStateAction<string>>;
  characterAge: number;
  setCharacterAge: React.Dispatch<React.SetStateAction<number>>;
  characterGender: string;
  setCharacterGender: React.Dispatch<React.SetStateAction<string>>;
  characterDescription: string;
  setCharacterDescription: React.Dispatch<React.SetStateAction<string>>;
  characterFeature: string;
  setCharacterFeature: React.Dispatch<React.SetStateAction<string>>;
  characterHairColor: string;
  setCharacterHairColor: React.Dispatch<React.SetStateAction<string>>;
  setImgs: React.Dispatch<React.SetStateAction<ImgFileTypes>>;
};

type ImgFileTypes = {
  firstImg: File | null;
  secondImg: File | null;
};

export default function CreateCharacterMain() {
  const [currentPage, setCurrentPage] = useState("characters");

  const [levelOfDifficulty, setLevelOfDifficulty] = useState<number>(1);

  const [characterShowPlus, setCharacterShowPlus] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [characterAge, setCharacterAge] = useState<number>();
  const [characterGender, setCharacterGender] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  const [characterFeature, setCharacterFeature] = useState("");
  const [characterHairColor, setCharacterHairColor] = useState("");

  const [guiltyShowPlus, setGuiltyShowPlus] = useState(false);
  const [guiltyName, setGuiltyName] = useState("");
  const [guiltyAge, setGuiltyAge] = useState<number>(0);
  const [guiltyGender, setGuiltyGender] = useState("");
  const [guiltyDescription, setGuiltyDescription] = useState("");
  const [guiltyFeature, setGuiltyFeature] = useState("");
  const [guiltyHairColor, setGuiltyHairColor] = useState("");

  const [characterQuestion, setCharacterQuestion] = useState("");
  const [characterAnswer, setCharacterAnswer] = useState("");

  const [guiltyQuestion, setGuiltyQuestion] = useState("");
  const [guiltyAnswer, setGuiltyAnswer] = useState("");

  const [imgs, setImgs] = useState<ImgFileTypes>({
    firstImg: null,
    secondImg: null,
  });

  const [userId] = useLocalStorage("userId", localStorage.getItem("userId"));

  const [imgUrl, setImgUrl] = useState("");
  const [imgUrlGuilty, setImgUrlGuilty] = useState("");

  async function handleOnSubmitToCloud(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!imgs.firstImg || !imgs.secondImg) return;

    try {
      const formData = new FormData();
      formData.append("file", imgs.firstImg);
      formData.append("upload_preset", "guiltyornot");
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

      const results = await fetch(
        "https://api.cloudinary.com/v1_1/dfj0kwoli/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      setImgUrl(results.secure_url);

      const formDataGuilty = new FormData();
      formDataGuilty.append("file", imgs.secondImg);
      formDataGuilty.append("upload_preset", "guiltyornot");
      formDataGuilty.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

      const resultsGuilty = await fetch(
        "https://api.cloudinary.com/v1_1/dfj0kwoli/image/upload",
        {
          method: "POST",
          body: formDataGuilty,
        }
      ).then((r) => r.json());
      setImgUrlGuilty(resultsGuilty.secure_url);

      const characterResult = await axios
        .post<CharaterBodyTypes>(
          `http://localhost:8080/api/v1/characters/detectives/${userId}`,
          {
            description,
          }
        )
        .then((r) => r.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex gap-[2rem] w-full">
      <form onSubmit={handleOnSubmitToCloud} className="w-full">
        <div
          className={`${
            currentPage === "characters" ? "" : "hidden"
          }  flex md:flex-row flex-col justify-between transition-all w-full gap-[2rem] relative`}
        >
          <CreateCharacterLeft
            characterAge={characterAge as number}
            characterDescription={characterDescription}
            characterFeature={characterFeature}
            characterGender={characterGender}
            characterHairColor={characterHairColor}
            characterName={characterName}
            characterShowPlus={characterShowPlus}
            setCharacterAge={
              setCharacterAge as React.Dispatch<React.SetStateAction<number>>
            }
            setCharacterDescription={setCharacterDescription}
            setCharacterFeature={setCharacterFeature}
            setCharacterGender={setCharacterGender}
            setCharacterHairColor={setCharacterHairColor}
            setCharacterName={setCharacterName}
            setCharacterShowPlus={setCharacterShowPlus}
            setImgs={setImgs}
          />
          <CreateCharacterRight
            characterAge={guiltyAge as number}
            characterDescription={guiltyDescription}
            characterFeature={guiltyFeature}
            characterGender={guiltyGender}
            characterHairColor={guiltyHairColor}
            characterName={guiltyName}
            characterShowPlus={guiltyShowPlus}
            setCharacterAge={
              setGuiltyAge as React.Dispatch<React.SetStateAction<number>>
            }
            setCharacterDescription={setGuiltyDescription}
            setCharacterFeature={setGuiltyFeature}
            setCharacterGender={setGuiltyGender}
            setCharacterHairColor={setGuiltyHairColor}
            setCharacterName={setGuiltyName}
            setCharacterShowPlus={setGuiltyShowPlus}
            setImgs={setImgs}
          />
          <button
            type="button"
            onClick={() => {
              setCurrentPage("questions");
            }}
            className="absolute w-[3rem] h-[3rem] top-[-5rem] hover:scale-[1.03] right-[0rem]"
          >
            <img src={next} alt="Next" className="w-full h-full" />
          </button>
        </div>

        <CreateCharacterQuestions
          characterAnswer={characterAnswer}
          characterQuestion={characterQuestion}
          currentPage={currentPage}
          guiltyAnswer={guiltyAnswer}
          guiltyQuestion={guiltyQuestion}
          setCharacterAnswer={setCharacterAnswer}
          setCharacterQuestion={setCharacterQuestion}
          setCurrentPage={setCurrentPage}
          setGuiltyAnswer={setGuiltyAnswer}
          setGuiltyQuestion={setGuiltyQuestion}
          levelOfDifficulty={levelOfDifficulty}
          setLevelOfDifficulty={setLevelOfDifficulty}
        />
      </form>
    </main>
  );
}
