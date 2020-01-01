import * as types from '../constants/ActionTypes'

/**
 * 选择图片
 * @param data
 * @returns {{type, picture: *}}
 */
export const loadImg = data => ({ type: types.PUZZLE_LOAD_IMG, picture: data });

/**
 * 变更模式
 * @param size
 * @returns {{type, size: *}}
 */
export const changeSize = size => ({ type: types.PUZZLE_CHANGE_SIZE, size: size });

/**
 * 开始
 * @returns {{type}}
 */
export const onStart = () =>  ({ type: types.PUZZLE_START});

/**
 * 重置
 * @returns {{type}}
 */
export const onReset = () => ({ type: types.PUZZLE_RESET})

export default {
    loadImg,
    changeSize,
    onStart,
    onReset,
}