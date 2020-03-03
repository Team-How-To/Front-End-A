import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://how-too.herokuapp.com/api/users/login"
  });
};
