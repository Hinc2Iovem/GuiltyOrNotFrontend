import { useState } from "react";
import { useDropzone } from "react-dropzone";
import imgOptionOne from "../../../assets/shared/profile/imgOptionOne.jpg";
import imgOptionTwo from "../../../assets/shared/profile/imgOptionTwo.jpg";
import sherifStar from "../../../assets/shared/profile/sherifStar.png";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useShowImagePreview from "../../../hooks/useShowImagePreview";
import useUploadImage from "../../../hooks/useUploadImage";

export default function ProfileAvatar() {
  const [imgOption, setImgOption] = useLocalStorage<string | ArrayBuffer>(
    "imgOption",
    imgOptionOne
  );
  const [userId] = useLocalStorage("userId", localStorage.getItem("userId"));

  const [showModal, setShowModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const onDrop = useShowImagePreview({ setImgOption, setShowModal });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleOnSubmitToCloud = useUploadImage({
    acceptedFiles,
    endpoint: `http://localhost:8080/api/v1/detectives/${userId}`,
    method: "PATCH",
    setImgUrl,
    setShowModal,
  });

  return (
    <>
      <div className="relative w-[20rem] h-[25rem] border-white border-[3px] rounded-md">
        <img
          src={imgOption as string}
          alt="Detective"
          className="absolute w-full h-full object-cover rounded-md"
        />
        <button
          onClick={() => setImgOption(imgOptionOne)}
          className={`absolute ${
            imgOption === imgOptionOne
              ? "bg-white text-black border-none scale-[1.03]"
              : "bg-transparen opacity-50"
          } right-[.2rem] top-[.2rem] z-[10] hover:bg-white bg-white hover:opacity-100 hover:border-none hover:text-black transition-all shadow-sm shadow-black w-[1.8rem] h-[1.8rem] rounded-full`}
        >
          1
        </button>
        <button
          onClick={() => setImgOption(imgOptionTwo)}
          className={`absolute ${
            imgOption === imgOptionTwo
              ? "bg-white text-black border-none scale-[1.03]"
              : "bg-transparent opacity-50"
          } right-[.2rem] top-[2.2rem] z-[10] hover:bg-white bg-white hover:opacity-100 hover:border-none hover:text-black transition-all shadow-sm shadow-black w-[1.8rem] h-[1.8rem] rounded-full`}
        >
          2
        </button>
        <button
          className={`absolute right-[.2rem] z-[10] top-[4.2rem] hover:bg-white hover:border-none hover:text-black transition-all bg-green-400 text-white shadow-sm shadow-black w-[1.8rem] h-[1.8rem] rounded-full`}
          {...getRootProps()}
        >
          <input {...getInputProps()} />+
        </button>

        <img
          src={sherifStar}
          alt="Star"
          className="absolute w-[3rem] h-[3rem] bottom-[-1rem] right-[-1rem]"
        />
      </div>

      <aside
        className={`${
          showModal ? "" : "hidden"
        } absolute top-[-2rem] bg-white w-[20rem] hover:bg-green-300 outline-none hover:text-white transition-all active:scale-[0.98] shadow-black shadow-sm rounded-md`}
      >
        <form onSubmit={handleOnSubmitToCloud}>
          <button className="w-full self-center text-[1.3rem]">Save Img</button>
        </form>
      </aside>
    </>
  );
}
