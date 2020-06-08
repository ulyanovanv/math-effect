import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            justCreated: true
        };
    }

    render() {
        const { x, y, size, margin, collision } = this.props;
        const style = {
            width: size,
            height: size,
            margin
        };
        const innerStyle = {
            width: size - 2,
            height: size - 2,
            margin: 1
        };

        const isEmpty = (x === 0 || y === 0) ? 'center-line' : '';
        const isSideLine = (Math.abs(x) === 1 || Math.abs(y) === 1) ? 'side-line' : '';
        const isJustCreated = (this.state.justCreated && !collision) ? 'justCreated' : '';
        const classForCell = `cell x-${x} y-${y} ${collision} emptyCell ${isEmpty} ${isSideLine} ${isJustCreated}`

        return (
            <div
                onMouseEnter={ () => { this.setState({ justCreated: false }); } }
                className={ classForCell }
                style={ style }
            >
                <div className="inner-cell" style={ innerStyle }></div>
            </div>
        );
    }

};

export default Cell;