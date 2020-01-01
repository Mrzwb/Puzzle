import * as types from "../constants/ActionTypes";

export const show = (isShow) => ({ type: types.STEPS_SHOW , isShow: isShow});

export const count = () => ({ type: types.STEPS_COUNT });

export default {
    show,
    count,
}