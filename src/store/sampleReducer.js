const initialState = {
    data: null,
    loading: false,
    error: null,
};

const sampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ASYNC_ACTION_START":
            return {
                ...state,
                loading: true,
            };
        case "ASYNC_ACTION_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case "ASYNC_ACTION_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default sampleReducer;
