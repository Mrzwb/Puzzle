import { connect } from 'react-redux'
import Controller from '../components/Controller';
import { PuzzleActions, ClockActions, StepsActions } from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onStart: event => {
        dispatch(PuzzleActions.onStart());
        dispatch(ClockActions.start());
        dispatch(StepsActions.show(true));
    },

    onReset: event => {
        dispatch(PuzzleActions.onReset());
        dispatch(ClockActions.stop());
        dispatch(StepsActions.show(false));
    },

    onSteps: event => {
        dispatch(StepsActions.show());
    },
})

export default connect(null, mapDispatchToProps)(Controller);