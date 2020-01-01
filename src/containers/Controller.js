import { connect } from 'react-redux'
import Controller from '../components/Controller';
import { PuzzleActions, ClockActions } from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onStart: event => {
        dispatch(PuzzleActions.onStart());
        dispatch(ClockActions.start());
    },

    onReset: event => {
        dispatch(PuzzleActions.onReset());
        dispatch(ClockActions.stop());
    }
})

export default connect(null, mapDispatchToProps)(Controller);