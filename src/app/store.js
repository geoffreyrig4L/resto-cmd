import {
  combineReducers,
  configureStore,
  createReducer,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import cartSliceReducer from "../features/cart/cartSlice";
import notesSliceReducer from "../features/notes/notesSlice";
import menuSliceReducer from "../features/menu/menuSlice";
import { updateFirstName } from "./actions";
import { api } from "../services/api.service";

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
    menu: menuSliceReducer,
    [api.reducerPath]: api.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(thunk).concat(api.middleware),
});
