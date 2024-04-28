import { useCallback } from "react";

type useShowImagePreviewTypes = {
  setImgOption: React.Dispatch<React.SetStateAction<string | ArrayBuffer>>;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function useShowImagePreview({
  setImgOption,
  setShowModal,
}: useShowImagePreviewTypes) {
  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      const file = new FileReader();
      file.onload = function () {
        setImgOption(file.result as string);
        if (setShowModal) {
          setShowModal(true);
        }
      };

      file.readAsDataURL(acceptedFiles[0]);
    },
    [setImgOption, setShowModal]
  );
  return onDrop;
}
