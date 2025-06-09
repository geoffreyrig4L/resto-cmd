import {
  combineReducers,
  configureStore,
  createReducer,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import cartSliceReducer from "../features/cart/cartSlice";
import notesSliceReducer from "../features/notes/notesSlice";
import { updateFirstName } from "./actions";

let state = {
  value: null,
  cart: [],
};

const ownerReducer = createReducer(state, (builder) => {
  builder.addCase(updateFirstName, (state, action) => {
    state.firstName = action.payload.firstName;
  });
});

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    cart: cartSliceReducer,
    owner: ownerReducer,
    notes: notesSliceReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   thunk: {
    //     extraArgument: myCustomApiService,
    //   },
    // }),
    getDefaultMiddleware(thunk),
});
