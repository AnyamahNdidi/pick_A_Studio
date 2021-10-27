import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allbookings: [],
  cartbookings: [],
  details: null

}

const actions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    allstudio: (state, { payload }) => {
      state.allbookings = payload;
    },
    viewDetails: (state, { payload }) => {
      state.details = payload
    },
    addTobook: (state, { payload }) => {
      const bookValue = state.cartbookings.findIndex((el) =>
        el.id === payload.id
      )
      if (bookValue >= 0) {
        state.cartbookings[bookValue].QTY += 1
      } else {
        const addBook = { ...payload, QTY: 1 };
        state.cartbookings.push(addBook)
      }
    },
    removeFromBookings: (state, { payload }) => {
      state.cartbookings = state.cartbookings.filter((item) =>
        item.id !== payload.id
      );
    },

    totalValue: (state, { payload }) => {
      let { totalCost, totalQTY } = state.cartbookings.reduce(
        (displayItem, displayCart) => {
          const { price, QTY } = displayCart;
          const totalPrice = price * QTY;

          displayItem.totalQTY += QTY;
          displayItem.totalCost += totalPrice;

          return displayItem;
        },
        { totalCost: 0, totalQTY: 0 }
      );

      state.totalValuePrice = totalCost;
      state.totalValueQTY = totalQTY;
    },

  }
});

export const {
  allstudio,
  viewDetails,
  addTobook,
  removeFromBookings,
  totalValue
} = actions.actions
export default actions.reducer