import { removeToken } from "./localStorageToken";
import { BASE_ENDPOINT } from "../constants/baseEndPoin";
import { UserDetail } from "../types/userDetail";
import axios from "axios";
export const logOut = () => {
  removeToken();
};

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      `${BASE_ENDPOINT}/api/v1/auth/login`,
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getUserDetail = async (
  accessToken: string
): Promise<UserDetail> => {
  try {
    const response = await axios.get(`${BASE_ENDPOINT}/api/v1/user/getMyInfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
