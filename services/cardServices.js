import { POST_CARD } from "./CONSTANTS";
import axios from "axios";

export const postCardQuery = (formData) => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .post(POST_CARD(), formData)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject("Error in postTask axios!");
      });
    } catch (error) {
      reject("SYSTEM ERROR");
    }
  });
}
