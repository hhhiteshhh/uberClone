import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../silces/navSlice";
export const store = configureStore({ reducer: { nav: navReducer } });
