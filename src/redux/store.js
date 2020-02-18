import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./_reducers";
import reduxThunk from "redux-thunk";

export const configureStore = () => {
	const middlewares = [reduxThunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	return createStore(rootReducer, {}, composedEnhancers);
};
