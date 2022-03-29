import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./countSlice";

const store = configureStore({reducer: countReducer});

export default store