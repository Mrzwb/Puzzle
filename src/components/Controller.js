import React from 'react';
import PropTypes from 'prop-types';
import './Controller.css';
import { Clock } from '../containers';

const Controller = ({onStart, onReset, onSteps}) => (
    <div className="controller">
        <button onClick={onStart}> 开始 </button>
        <button onClick={onReset}> 重置 </button>
        <button onClick={onSteps}> 步数 </button>
        <button > 自动 </button>
        <Clock/>
    </div>
)

Controller.propTypes = {
    onStart: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}

export default Controller;