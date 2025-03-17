export const asyncAction = () => async (dispatch) => {
    setTimeout(() => {
        dispatch({ type: "ASYNC_ACTION_SUCCESS" });
    }, 1000);
};
