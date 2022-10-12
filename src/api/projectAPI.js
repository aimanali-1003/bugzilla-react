// import axios from "axios";
import baesApi from "./baesApi";

export const ProjectShow = (id) =>
  baesApi
    .get(`/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
