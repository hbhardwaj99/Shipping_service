import { combineReducers } from "redux";
import shipperReducer from "./shipperReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  shipper: shipperReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: authReducer,
});
export default rootReducer;
