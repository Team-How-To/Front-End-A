import axios from "axios";
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://how-too.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
