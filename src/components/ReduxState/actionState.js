import { actionType } from "./actionType"

export const addToBook = (itemID) => {
  return {
    type: actionType.ADD_TO_BOOK,
    payload: {
      id: itemID
    }
  }
}

export const removeFromBook = (itemID) => {
  return {
    type: actionType.REMOVE_FROM_BOOK,
    payload: {
      id: itemID
    }
  }
}

export const adjustBook = (itemID, value) => {
  return {
    type: actionType.ADJUST_BOOK,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

export const viewsinglebook = (itemID) => {
  return {
    type: actionType.VIEW_SINGLE_BOOK,
    payload: itemID
  }
}


export const addbook = (item) => {
  return {
    type: actionType.ADD_BOOK,
    payload: item
  }
}