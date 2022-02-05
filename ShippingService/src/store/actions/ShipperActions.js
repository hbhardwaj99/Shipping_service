import {
  CREATE_ITEM,
  CREATE_ITEM_ERROR,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
} from "../typesOfAction/shipperTypes";
export const createItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authoreId = getState().firebase.auth.uid;
    firestore
      .collection("items")
      .add({
        ...item,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authoreId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: CREATE_ITEM, payload: item });
      })
      .catch((error) => {
        dispatch({ type: CREATE_ITEM_ERROR, error });
      });
  };
};
export const updateItem = (item, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authoreId = getState().firebase.auth.uid;
    firestore
      .collection("items")
      .doc(id)
      .update({
        ...item,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authoreId,
        updateAt: new Date(),
      })
      .then(() => {
        dispatch({ type: UPDATE_ITEM_SUCCESS, item });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_ITEM_ERROR, error });
      });
  };
};
export const deleteItem = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("items")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_ITEM_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: DELETE_ITEM_ERROR, error });
      });
  };
};
