import { stat } from "fs"
import { actionType } from "./actionType"

const initailState = {
  products: [
  ],
  books: [],
  currentstate: null
}

export const myshopReducer = (state = initailState, { type, payload }) => {

  switch (type) {
    case actionType.ADD_TO_BOOK:
      const item = state.products.find(el => el.id === payload.id)
      const inCart = state.books.find(item => item.id === payload.id ? true : false)
      return {
        ...state,
        books: inCart ? state.books.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.books, { ...item, qty: 1 }]
      }

    case actionType.ADJUST_BOOK:
      return {
        ...state,
        cart: state.books.map(item => item.id === payload.id ? { ...item, qty: +payload.qty } : item)
      }
    case actionType.REMOVE_FROM_BOOK:
      return {
        ...state,
        books: state.books.filter(item => item.id !== payload.id)

      }
    case actionType.VIEW_SINGLE_BOOK:
      return {
        ...state,
        currentstate: payload
      }

    case actionType.ADD_BOOK:
      return {
        ...state,
        products: payload
      }
    default:
      return state
  }
}