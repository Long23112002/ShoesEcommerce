import {UserCreate} from "../types/userCreate.ts";

interface ValidateLoginResult {
  isValid: boolean;
  usernameError: string;
  passwordError: string;
}

export const validateFormLogin = (
  username: string,
  password: string
): ValidateLoginResult => {
  let isValid = true;
  let usernameError = "";
  let passwordError = "";

  if (!username.trim()) {
    usernameError = "Username is required";
    isValid = false;
  } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
    usernameError =
      "Username must be 3-20 characters and contain only letters, numbers, or underscores";
    isValid = false;
  }

  if (!password.trim()) {
    passwordError = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError = "Password must be at least 6 characters";
    isValid = false;
  }

  return { isValid, usernameError, passwordError };
};


export const validateForm = (userCreateData: UserCreate, confirmPassword: string) => {
  let valid = true;
  const newErrors = { fullName: '', username: '', password: '', confirmPassword: '', address: '' };

  if (!userCreateData.name.trim()) {
    newErrors.fullName = 'Full name is required';
    valid = false;
  } else if (userCreateData.name.length < 6) {
    newErrors.fullName = 'Full name must be at least 6 characters';
    valid = false;
  }

  if (!userCreateData.username.trim()) {
    newErrors.username = 'Username is required';
    valid = false;
  } else if (userCreateData.username.length < 6) {
    newErrors.username = 'Username must be at least 6 characters';
    valid = false;
  }

  if (!userCreateData.password.trim()) {
    newErrors.password = 'Password is required';
    valid = false;
  } else if (userCreateData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
    valid = false;
  }

  if (userCreateData.password !== confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
    valid = false;
  }

  if (!userCreateData.address.trim()) {
    newErrors.address = 'Address is required';
    valid = false;
  } else if (userCreateData.address.length < 6) {
    newErrors.address = 'Address must be at least 6 characters';
    valid = false;
  }

  return { valid, errors: newErrors };
};
