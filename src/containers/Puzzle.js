import { connect } from 'react-redux';
import Puzzle from '../components/Puzzle';
import { ClockActions ,StepsActions } from "../actions";

const mapStateToProps = state => ({
    picture: state.puzzleReducer.picture,
    size:  state.puzzleReducer.size,
    startArr: state.puzzleReducer.startArr,
    resetToggle: state.puzzleReducer.resetToggle,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    countSteps: () => {
        dispatch(StepsActions.count());
    },

    displaySteps: () => {
        dispatch(StepsActions.show(false));
    },

    stopClock: () => {
        dispatch(ClockActions.pause());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Puzzle);