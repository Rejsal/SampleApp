import axios from "axios";

/// create axios instances
export const api = () => {
  let opts = {
    /// it is better to add base urls in .env file.
    /// make use of react-native-config library
    baseURL: "https://jsonplaceholder.typicode.com",
  };
  return axios.create(opts);
};

export const catchHandler = (e) => {
  let res =
    e.response && e.response.data
      ? e.response.data
      : { message: "Server error" };
  throw res;
};
