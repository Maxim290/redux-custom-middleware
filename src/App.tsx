import { useEffect } from "react";
import { useSelector } from "react-redux";
import { asyncAction } from "./actions/sampleActions";
import { RootState, useAppDispatch } from "./store";

function App() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useSelector(
        (state: RootState) => state.sample
    );

    useEffect(() => {
        dispatch(asyncAction());
    }, [dispatch]);

    return (
        <div>
            <h1>Redux Custom Middleware Example</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <p>{data}</p>}
        </div>
    );
}

export default App;
