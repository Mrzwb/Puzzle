import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from '../default.jpg';
import './FileChooser.css'

const FileChooser = ({choosePicture}) => (
    <Fragment>
        <div className="chooser-file">
            <input id="input-file" type='file' accept="image/*" capture="camera" onChange={choosePicture}/>
            <label htmlFor="input-file" >选择图片</label>
        </div>
        <p>
            <img id="show-img" draggable="true" src={logo} className="chooser-preview" alt="preview"/>
        </p>
    </Fragment>
);

FileChooser.propTypes = {
    choosePicture: PropTypes.func.isRequired
}

export default FileChooser;
