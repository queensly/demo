import React from 'react';
import Arrow from './Arrow.js';
import Dot from './Dot.js';
import $ from 'jquery';
export default class Slide extends React.Component{
    constructor(props){
        super(props);
        this.state = {pos:0}
    }
    go(step){
        let pos = this.state.pos + step;
        if(pos == this.props.images.length+1){
            this.sliders.css({left:0});
            pos=1;
        }else if(pos==-1){
            this.sliders.css({left:this.props.images.length*-1000});
            pos = this.props.images.length-1;
        }
        this.setState({pos});
        this.sliders.animate({left:pos*-1000},1000)
    }
    play(){
        this.$timer = setInterval(()=>{
            this.go(1);
        },this.props.delay*1000)
    }
    componentDidMount(){
        this.sliders = $('.sliders');
        if(this.props.autoPlay){
            this.play();
        }
    }
    render(){
        let length = this.props.images.length;
        let style = {
            width:1000*(length+1)+'px'
            //left:-1000*this.state.pos+'px',
            //transitionDuration: this.props.speed + 's'
        };
        return (
            <div className="slider-wrapper" onMouseOver={()=>clearTimeout(this.$timer)} onMouseOut={this.play.bind(this)}>
                <ul className="sliders" style={style}>
                    {
                        this.props.images.map((item,index)=>{
                            return <li key={index} className="slider"><img src={item.src} alt={item.alt}/></li>
                        })
                    }
                    <li key={length} className="slider"><img src={this.props.images[0].src} alt={this.props.images[0].alt}/></li>
                </ul>
                <Arrow images={this.props.images} pos={this.state.pos} go={this.go.bind(this)}/>
                <Dot images={this.props.images} pos={this.state.pos} go={this.go.bind(this)}/>

            </div>
        )
    }
}