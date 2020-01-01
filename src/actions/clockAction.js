import * as types from "../constants/ActionTypes";

export const start = () => ({ type: types.CLOCK_START });

export const stop = () => ({ type: types.CLOCK_STOP });

export default {
    start,
    stop,
}