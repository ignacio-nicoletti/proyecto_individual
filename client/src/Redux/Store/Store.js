import reducer from "../Reducer/Reducer"

import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"

const composeEnhancer= window.__redux_devtool_extension_compose__||compose;

const store=createStore(reducer,composeEnhancer(applyMiddleware(thunk)));

export default store