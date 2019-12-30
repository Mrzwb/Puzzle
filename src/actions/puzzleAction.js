import * as types from '../constants/ActionTypes'

export const loadImg = data => ({ type: types.PUZZLE_LOAD_IMG, picture: data });

export const changeSize = size => ({ type: types.PUZZLE_CHANGE_SIZE, size: size });

export const onStart = () =>  ({ type: types.PUZZLE_START});

export default {
    loadImg,
    changeSize,
    onStart,
}