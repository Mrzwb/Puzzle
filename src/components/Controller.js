import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Controller = ({onStart}) => (
    <Fragment>
        <button onClick={onStart}> 开始 </button>
        <button> 重置 </button>
        <button> 计时 </button>
        <button> 步数 </button>
    </Fragment>
)

Controller.propTypes = {
    onStart: PropTypes.func.isRequired
}

export default Controller;