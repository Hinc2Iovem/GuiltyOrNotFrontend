type useUploadImageTypes = {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: string;
  method: string;
  acceptedFiles: File[];
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
};

export default function useUploadImage({
  setShowModal,
  acceptedFiles,
  setImgUrl,
  endpoint,
  method,
}: useUploadImageTypes) {
  async function handleOnSubmitToCloud(e: React.SyntheticEvent) {
    e.preventDefault();
    if (setShowModal) {
      setShowModal(false);
    }
    if (typeof acceptedFiles[0] === "undefined") return;

    try {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
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

      const res = await fetch(endpoint, {
        method,
        body: results.secure_url,
      }).then((r) => r.json());
      console.log("res: ", res);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  }
  return handleOnSubmitToCloud;
}
