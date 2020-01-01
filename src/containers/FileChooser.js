import { connect } from 'react-redux';
import FileChooser from '../components/FileChooser';
import {ClockActions, PuzzleActions, StepsActions} from '../actions';
import { chooseImg } from '../util/ImgUtils';

const mapDispatchToProps = (dispatch, ownProps) => ({
    choosePicture: (event) => {
        let images = document.querySelectorAll("#show-img");
        chooseImg(event).then( data => {
            images.forEach(img => img.src = data );
            dispatch(PuzzleActions.loadImg(data));
            dispatch(ClockActions.stop());
            dispatch(StepsActions.show(false));
        });
    }
})

export default connect(null, mapDispatchToProps)(FileChooser);
