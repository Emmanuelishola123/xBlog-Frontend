import api from "../api";

export const userDetailsApi = (id) => {
  const response = api().get(`/user/${id}`);

  return response;
};


  