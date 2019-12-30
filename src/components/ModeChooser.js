import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const modes = ['简单', '中等','困难'];

const ModeChooser = ({chooseMode}) => {
    return (
        <Fragment>
        {
            modes.map( (mode, index) =>
                <label htmlFor={`M${index}`} key={index}>{ mode }
                    <input id= {index}
                           type="radio"
                           name="modeRadios"
                           defaultChecked={ index === 0 ? true : false }
                           onKeyDown={e=>e.preventDefault()}
                           onChange={chooseMode}/>
                </label>
            )
        }
        </Fragment>
    );
}

ModeChooser.propTypes = {
    chooseMode: PropTypes.func.isRequired
}

export default ModeChooser;