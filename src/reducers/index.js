import { combineReducers } from 'redux';
import puzzleReducer from './puzzleReducer';
import clockReducer from './clockReducer';
import stepsReducer from './stepsReducer';

const rootReducer = combineReducers({
    puzzleReducer,
    clockReducer,
    stepsReducer,
})

export default rootReducer
