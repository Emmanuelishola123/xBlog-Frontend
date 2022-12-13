export const validateName = (value) => {
  let error;
  if (!value) {
    error = "Name is required";
  } else if (value.length <= 2) {
    error = "Name must be 3 characters long";
  }
  return error;
};

export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "Invalid email address 😱";
  }
  return error;
};

export const validatePassword = (value) => {
  let error;
  if (value.length < 6) {
    error = "Password must be minimum of 6 characters";
  }
  return error;
};

