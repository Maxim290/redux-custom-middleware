interface State {
    data: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    data: null,
    loading: false,
    error: null,
};

type Action =
    | { type: "ASYNC_ACTION_START" }
    | { type: "ASYNC_ACTION_SUCCESS"; payload: any }
    | { type: "ASYNC_ACTION_ERROR"; error: string };

const sampleReducer = (state: State = initialState, action: Action): State => {
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
