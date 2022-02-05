import {
  CREATE_ITEM,
  CREATE_ITEM_ERROR,
  UPDATE_ITEM_ERROR,
  UPDATE_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
} from "../typesOfAction/shipperTypes";

const initialState = {
  items: [],
};
const shipperReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return state;
    case CREATE_ITEM_ERROR:
      console.log("Item Created error");
      return state;
    case UPDATE_ITEM_SUCCESS:
      console.log("update item");
      return state;
    case UPDATE_ITEM_ERROR:
      console.log("Item Created error", state.action.error);
      return state;
    case DELETE_ITEM_SUCCESS:
      console.log("Delete item");
      return state;
    case DELETE_ITEM_ERROR:
      console.log("Item Delete error", state.action.error);
      return state;
    default:
      return state;
  }
};
export default shipperReducer;
