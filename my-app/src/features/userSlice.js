import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: "Kiran"
  },
  reducers: {
    // Function to update the name
    updateName: (state, action) => {
      state.userName = action.payload;
    }
  }
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;