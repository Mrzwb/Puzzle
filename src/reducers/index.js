import { combineReducers } from 'redux';
import puzzleReducer from './puzzleReducer';
import clockReducer from './clockReducer';

const rootReducer = combineReducers({
    puzzleReducer,
    clockReducer,
})

export default rootReducer
