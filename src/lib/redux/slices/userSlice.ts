import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  entities: object;
};

const initialState = {
  entities: {},
} as InitialStateType;

export const getUserData = createAsyncThunk(
  "user/fetchUser",
  async (ThunkAPI) => {
    try {
      const res = await fetch("https://api.phoenixrp.io/v1/auth/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json());
      return res;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.entities = { ...state.entities, ...action.payload };
    });
  },
});

export default userSlice.reducer;
