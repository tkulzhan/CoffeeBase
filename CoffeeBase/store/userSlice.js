import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: "",
    name: "",
    email: "",
    bio: "",
    roles: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, name, email, bio, roles } = action.payload;
      state.value.id = _id;
      state.value.name = name;
      state.value.email = email;
      state.value.bio = bio;
      state.value.roles = roles;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
