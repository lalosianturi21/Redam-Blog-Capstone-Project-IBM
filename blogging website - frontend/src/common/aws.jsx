import axios from "axios";

export const uploadImage = async (img) => {
  let imgUrl = null;

  await axios
    .get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url")
    .then(async ({ data: { uploadURL } }) => {
      await axios
        .put(uploadURL, img, {
          headers: { "Content-Type": "image/jpeg" }, // ✅ penting!
        })
        .then(() => {
          imgUrl = uploadURL.split("?")[0];
        });
    });

  return imgUrl;
};
