import React, { Component, Fragment } from 'react';
import { clipImage } from '../util/ImgUtils';
import { isNotEqual } from '../util/ArrUtils';
import PropTypes from 'prop-types';
import './Puzzle.css';

class Puzzle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pieces: [],
            count: 0,
            origin: [],
        }
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        this.clipImg();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.picture !== this.props.picture || prevProps.size !== this.props.size) {
            this.clipImg();
        }

        if (isNotEqual(prevProps.startArr, this.props.startArr)){
            this.start();
        }
    }

    clipImg() {
        const _this = this;
        const { picture , size } = this.props;
        clipImage( picture, size).then( pieces => {
            const  arr = [];
            pieces.forEach( block => arr.push([block.x, block.y]));
            _this.setState({
                pieces: pieces,
                count: Math.pow(size,2),
                origin: arr,
            })
        });
    }

    handleKeyDown(event) {
        const { pieces, count } = this.state;
        let newPieces = pieces;
        const key = window.event ? event.keyCode : event.which;
        switch(key) {
            case 37:
                newPieces = this.moveLeft(pieces, count);
                break;
            case 38:
                newPieces = this.moveUp(pieces, count);
                break;
            case 39:
                newPieces = this.moveRight(pieces, count);
                break;
            case 40:
                newPieces = this.moveDown(pieces, count);
                break;
            default:
        }

        if (newPieces !== pieces) {
            this.setState({
                pieces: newPieces,
            });
        }
    }

    moveRight(pieces, count) {
        let emptyBlock = pieces.find( block => block.id === count);
        let moveBlock = pieces.find( block => block.y === emptyBlock.y && block.x === emptyBlock.x - 1);
        if (moveBlock) {
            this.swapBlock(moveBlock, emptyBlock);
            return pieces.slice();
        }
        return pieces;
    }

    moveLeft(pieces, count) {
        let emptyBlock = pieces.find( block => block.id === count);
        let moveBlock = pieces.find( block => block.y === emptyBlock.y && block.x === emptyBlock.x + 1);
        if (moveBlock) {
            this.swapBlock(moveBlock, emptyBlock);
            pieces = pieces.slice();
        }
        return pieces;
    }

    moveUp(pieces, count) {
        let emptyBlock = pieces.find( block => block.id === count);
        let moveBlock = pieces.find( block => block.x === emptyBlock.x && block.y === emptyBlock.y + 1);
        if (moveBlock) {
            this.swapBlock(moveBlock, emptyBlock);
            pieces = pieces.slice();
        }
        return pieces;
    }

    moveDown(pieces, count) {
        let emptyBlock = pieces.find( block => block.id === count);
        let moveBlock = pieces.find( block => block.x === emptyBlock.x && block.y === emptyBlock.y - 1);
        if (moveBlock) {
            this.swapBlock(moveBlock, emptyBlock);
            pieces = pieces.slice();
        }
        return pieces;
    }

    swapBlock(moveBlock, emptyBlock) {
        moveBlock.x ^= emptyBlock.x;
        emptyBlock.x ^= moveBlock.x;
        moveBlock.x ^= emptyBlock.x

        moveBlock.y ^= emptyBlock.y;
        emptyBlock.y ^= moveBlock.y;
        moveBlock.y ^= emptyBlock.y;
    }


    /**
     * 打乱
     */
    start() {
        this.reset();
        const { pieces, origin } = this.state;
        const { startArr } = this.props;
        for (let i =0; i< pieces.length-1; i++) {
            let location = origin[startArr[i]-1];
            pieces[i].x = location[0];
            pieces[i].y = location[1];
        }
        this.setState({
            pieces: pieces,
        });

    }

    /**
     * 重置
     */
    reset() {
        const { pieces, origin } = this.state;
        pieces.forEach( (block, index) => {
            block.x = origin[index][0];
            block.y = origin[index][1];
        })
    }


    render() {
        const { pieces, count } = this.state;
        const { size } = this.props;
        return (
            <Fragment>
                {
                    pieces.map((piece, i) => piece.id !== count ?
                        <div id={ `img-${piece.id}` }
                             key={ piece.id }
                             className="puzzle-div"
                             style={{
                                width: `${100/size}%`,
                                height: `${100/size}%`,
                                transform: `translate3d(${piece.x*100}%, ${piece.y*100}%, 0)`,
                                WebkitTransform: `translate3d(${piece.x*100 }%, ${piece.y *100}%, 0)`,
                        }}>
                        <img draggable="true"
                             src={ piece.data }
                             className="puzzle-img"
                             alt="showImg"
                             style = {{
                                 zIndex: pieces.length - i,
                             }}
                        />
                        </div> : null
                    )
                }
            </Fragment>
        )
    }
}

Puzzle.propTypes = {
    picture: PropTypes.string.isRequired,
    size:  PropTypes.number.isRequired,
}

export default Puzzle;