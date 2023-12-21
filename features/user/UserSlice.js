import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: [],
  isAuthenticated: false,
  user_id: ""
};

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (user_id) => {
    try {
      const response = await axios.get(
        `https://baobabpad-334a8864da0e.herokuapp.com/village/profile_data/${user_id}/`
      );
      console.log("User data fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data: ", error);
      throw error;
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

    resetUser: () => initialState,

    setUserId: (state, action) => {
      state.user_id = action.payload;
      console.log('This is my users id', action.payload)
    },
  }, 


  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
      console.log('This is my userData fetched from redux toolkit', action.payload);
    })
  }
  
});

export const { setUserData, resetUser, setUserId } = userSlice.actions;
export default userSlice.reducer;
