import { createSlice } from "@reduxjs/toolkit";
import { UserDetail } from "../../types/userDetail";

const initialState: UserDetail | null  = {
  code: 0,
  result: {
    id: 0,
    name: "",
    gender: "",
    status: 0,
    address: "",
    urlAvatar: "",
    roleNames: [],
  },
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    setUserDetails: (state, action: { payload: UserDetail }) => {
      state.code = action.payload.code;
      state.result = action.payload.result;
    },
  },
});

export const { setUserDetails } = userDetailSlice.actions;
export default userDetailSlice.reducer;
