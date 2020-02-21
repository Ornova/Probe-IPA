import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./_reducers";

export const configureStore = () => {
	const middlewares = [];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	return createStore(rootReducer, {}, composedEnhancers);
};
