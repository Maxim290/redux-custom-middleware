import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncAction } from "./actions/sampleActions";

function App() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.sample);

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
