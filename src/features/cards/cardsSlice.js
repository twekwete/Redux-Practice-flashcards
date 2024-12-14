import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "cards",
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
        state.cards[action.payload.id] = action.payload;
    },
  },
};

export const cardsSlice = createSlice(options);
export default cardsSlice.reducer;
export const { addCard } = cardsSlice.actions;
export const selectCard = (state,id) => {
    return state.cards.cards[id]
}