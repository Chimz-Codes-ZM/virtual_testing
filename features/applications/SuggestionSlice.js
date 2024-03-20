import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: null,
  usersId: null
};

const SuggestionSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    setUsersId: (state, action) => {
        state.usersId = action.payload;
    }
  },
});

export const { setRoomId, setUsersId } = SuggestionSlice.actions;

export default SuggestionSlice.reducer;
