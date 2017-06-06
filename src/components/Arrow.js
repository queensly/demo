import React from 'react';
export default class Arrow extends React.Component {
    render() {
        return (
            <div className="slider-arrows">
                <span onClick={()=>this.props.go(-1)} className="arrow arrow-left">&lt;</span>
                <span onClick={()=>this.props.go(1)} className="arrow arrow-right">&gt;</span>
            </div>
        )
    }
}

