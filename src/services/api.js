import axios from "axios";

const api = (token = null) => {
  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASEURL,
    headers: { Athorization: `Bearer ${token}` || null },
  });
};

export default api;
