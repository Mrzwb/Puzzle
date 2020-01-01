import * as types from '../constants/ActionTypes';

const initialState = {
    displayStatus: false,
    steps: 0,
}

export default function stepsReducer(state = initialState, action) {
    const {displayStatus, steps } = state;
    switch (action.type) {
        case types.STEPS_SHOW:
            const { isShow } = action;
            let display = typeof(isShow) === 'undefined' ? !displayStatus :isShow;
            let currentSteps = display ? steps : 0 ;
            return {
                ...state,
                displayStatus: display,
                steps: currentSteps,
            }
        case types.STEPS_COUNT:
            let count = steps;
            count = state.displayStatus ? ++count : 0;
            return {
                ...state,
                steps: count,
            }
        default:
            return state
    }
}