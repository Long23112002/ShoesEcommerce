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
  } else if (password.length < 3) {
    passwordError = "Password must be at least 6 characters";
    isValid = false;
  }

  return { isValid, usernameError, passwordError };
};
