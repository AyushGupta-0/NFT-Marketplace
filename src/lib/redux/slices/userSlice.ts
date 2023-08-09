import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  value: UserType;
};

type UserType = {
  name: string;
  email: string;
  photoUrl: string;
  uid: string;
};

const initialState = {
  value: {
    name: "",
    email: "",
    photoUrl: "",
    uid: "",
  } as UserType,
} as InitialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserType>) => {
      const { name, email, photoUrl, uid } = action.payload;
    },
    logOut: (state) => {},
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
