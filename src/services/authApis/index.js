import api from "../api";

export const registerApi = (data) => {
  console.log({data})
  const response = api().post("/auth/register", {
    ...data,
  });

  return response;
};

export const loginApi = (data) => {
  const response = api().post("/auth/login", {
    ...data,
  });

  return response;
};

export const forgotPasswordApi = (data) => {
  const response = api().post("/auth/forget-password", {
    ...data,
  });

  return response;
};

export const resetPasswordApi = (data) => {
  const response = api().post("/auth/reset-password", {
    ...data,
  });

  return response;
};
