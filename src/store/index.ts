import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "../middleware/loggerMiddleware";
import rootReducer from "../reducers";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
