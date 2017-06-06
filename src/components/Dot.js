import React from 'react';
export default class Dot extends React.Component {
    render() {
        return (
            <div className="slider-dots">
                {
                    this.props.images.map((item,index)=>{
                        return <span onClick={()=>this.props.go(index-this.props.pos)} key={index} className={"dot "+((this.props.pos==index || this.props.pos==4&&index==0)?"active":"")}></span>
                    })
                }
            </div>
        )
    }
}