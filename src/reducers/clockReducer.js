import * as types from '../constants/ActionTypes';

const initialState = {
    displayStatus: false,
    pauseStatus: false,
}

export default function clockReducer(state = initialState, action) {
    switch (action.type) {
        case types.CLOCK_START:
            return {
                ...state,
                displayStatus: true
            }
        case types.CLOCK_STOP:
            return {
                ...state,
                displayStatus: false
            }
        case types.CLOCK_PAUSE:
            const { pauseStatus } = state;
            return {
                ...state,
                pauseStatus: !pauseStatus
            }

        default:
            return state
    }
}