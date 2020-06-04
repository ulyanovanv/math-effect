import {createStore, combineReducers} from "redux";

import { reducer as mathEffectReducer } from './components/MathEffect/reducer';

const appReducer = combineReducers({
    mathEffect: mathEffectReducer
});

export default createStore(
    appReducer
);
