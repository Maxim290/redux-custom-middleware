import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "../middleware/loggerMiddleware";
import rootReducer from "../reducers";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
