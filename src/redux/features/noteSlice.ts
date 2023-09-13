import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface INotes {
  isEditing: Record<number, boolean>;
}

const initialState: INotes = {
  isEditing: {},
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setEditingState: (state, action: PayloadAction<{ id: number; isEditing: boolean }>) => {
      const { id, isEditing } = action.payload;
      state.isEditing[id] = isEditing;
    }
  },
});

export const { setEditingState} = noteSlice.actions;

export default noteSlice.reducer;
