import React from 'react';
import { connect } from 'react-redux';

const Steps = ({displayStatus, steps}) => {
    return (
        <>
        {
            displayStatus? <p>步数: {steps}</p> : null
        }
        </>
    );
}

const mapStateToProps = state => ({
    displayStatus: state.stepsReducer.displayStatus,
    steps: state.stepsReducer.steps,
});

export default connect(mapStateToProps, null)(Steps);