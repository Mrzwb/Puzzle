import * as types from '../constants/ActionTypes';
import { randomArr } from '../util/ArrUtils'

const defaultPicture = require('../default.jpg');

const initialState = {
    picture: defaultPicture,
    size: 3,
    startArr: [],
    resetToggle: false  // 复位开关
}

export default function puzzleReducer(state = initialState, action) {
    switch (action.type) {
        case types.PUZZLE_LOAD_IMG:
            return {
                ...state,
                picture: action.picture,
            }
        case types.PUZZLE_CHANGE_SIZE:
            return {
                ...state,
                size: action.size,
            }
        case types.PUZZLE_START:
            const { size } = state;
            let startArr = randomArr(Math.pow(size,2));
            return {
                ...state,
               startArr: startArr,
            }
        case types.PUZZLE_RESET:
            const { resetToggle } = state;
            return {
                ...state,
                resetToggle: ~resetToggle,
            }
        default:
            return state
    }
}