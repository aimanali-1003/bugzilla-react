import baesApi from "./baesApi";

export const BugList = (id) =>
  baesApi
    .get(`/${id}/bugs`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
