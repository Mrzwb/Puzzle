import { connect } from 'react-redux'
import Controller from '../components/Controller';
import { PuzzleActions } from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onStart: (event) => {
        dispatch(PuzzleActions.onStart());
    }
})

export default connect(null, mapDispatchToProps)(Controller);