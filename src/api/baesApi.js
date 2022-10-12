import axios from "axios";

const baseApi = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

export default baseApi();
