import reducer from "../Reducer/Reducer"

import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

 