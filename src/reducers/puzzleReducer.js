import * as types from '../constants/ActionTypes';
import { randomArr, reversedOrder } from '../util/ArrUtils'

const defaultPicture = require('../default.jpg');

const initialState = {
    picture: defaultPicture,
    size: 3,
    startArr: [],
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
            let startArr = randomArr(Math.pow(size,2)); //[5,4,6,1,2,3,8,7];
            return {
                ...state,
               startArr: startArr,
            }

        default:
            return state
    }
}