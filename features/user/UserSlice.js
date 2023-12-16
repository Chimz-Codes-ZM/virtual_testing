import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: [],
  isAuthenticated: false,
};

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (user_id) => {
    try {
      const response = await axios.get(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${user_id}/`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },

    resetUser: () => initialState
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        console.log("This is my userData fetched from redux toolkit")
    })
  }
});

export const { setUserData, resetUser } = userSlice.actions;
export default userSlice.reducer;
