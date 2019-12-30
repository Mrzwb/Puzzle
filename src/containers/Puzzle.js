import { connect } from 'react-redux';
import Puzzle from '../components/Puzzle';

const mapStateToProps = state => ({
    picture: state.puzzleReducer.picture,
    size:  state.puzzleReducer.size,
    startArr: state.puzzleReducer.startArr
});

export default connect(mapStateToProps, null)(Puzzle);