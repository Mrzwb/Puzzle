import { connect } from 'react-redux'
import FileChooser from '../components/FileChooser';

const mapDispatchToProps = (dispatch, ownProps) => ({
    choosePicture: (event) => {
        const imgs = document.querySelectorAll("#show-img");
        const file = event.target.files[0];
        if (window.FileReader) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function (e) {
                imgs.forEach(img => img.src = e.target.result);
            };
        } else {
            const url = window.url || window.webkitURL;
            const data = url.createObjectURL(file);
            imgs.forEach(img => img.src = data);
        }
    }
})

export default connect(null, mapDispatchToProps)(FileChooser);
