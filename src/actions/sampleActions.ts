import { Dispatch } from "redux";

export const asyncAction = () => async (dispatch: Dispatch) => {
    setTimeout(() => {
        dispatch({ type: "ASYNC_ACTION_SUCCESS" });
    }, 1000);
};
