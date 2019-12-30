import { connect } from 'react-redux';
import ModeChooser from '../components/ModeChooser';
import { PuzzleActions } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
    chooseMode: (event) => {
        let id = event.target.id;
        let size = id === '1' ? 6 : (id === '2' ? 9 : 3);
        dispatch(PuzzleActions.changeSize(size));
    }
})

export default connect(null, mapDispatchToProps)(ModeChooser);