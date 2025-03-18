import { Middleware } from "redux";

const loggerMiddleware: Middleware = () => (next) => (action) => {
    if (typeof action === "function") {
        console.log("Dispatching async action:", action.name || "anonymous");
    } else {
        console.log("Dispatching action:", action.type);
    }
    return next(action);
};

export default loggerMiddleware;
