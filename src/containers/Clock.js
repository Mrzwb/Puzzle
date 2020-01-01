import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
        };
    }

    tick() {
        let {hour, minute, second } = this.state;
        second++;
        if (second > 59) {
            minute++;
            second = 0;
        }
        if ( minute > 59) {
            hour++;
            minute = 0;
        }
        if(hour> 24) {
            clearInterval(this.timerID);
        }
        this.setState({
            hour: hour,
            minute: minute,
            second: second
        });
    }

    start() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    stop() {
        clearInterval(this.timerID);
        this.clear();
    }

    clear() {
        this.setState({
            hour: 0,
            minute: 0,
            second: 0,
        });
    }

    pause() {
        clearInterval(this.timerID);
    }

    componentDidUnMount() {
        clearInterval(this.timerID);
    }

    componentDidUpdate(prevProps) {
        const { displayStatus, pauseStatus } = this.props;
        if (prevProps.displayStatus !== displayStatus) {
            if (displayStatus) {
                this.start();
            } else {
                this.stop();
            }
        }

        if (prevProps.pauseStatus !== pauseStatus) {
            this.pause();
        }
    }

    render() {
        const {hour, minute, second } = this.state;
        const { displayStatus } = this.props;
        return (
            <div>
                {displayStatus ?
                    <h2>{hour>9? hour:`0${hour}`}
                        :{minute>9? minute:`0${minute}`}
                        :{second>9?second:`0${second}`}</h2>: ''
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    displayStatus: state.clockReducer.displayStatus,
    pauseStatus: state.clockReducer.pauseStatus,
});

export default connect(mapStateToProps, null)(Clock);