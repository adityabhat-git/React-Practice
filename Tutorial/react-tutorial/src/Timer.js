import React, { Component } from "react";

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {seconds : 0};
    }

    tick(){
        this.setState(state => ({seconds : state.seconds + 1}));
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
        this.interval = setInterval(()=>this.tick(),1000); 
    }

    //Called immediately before a component is destroyed. 
    //Perform any necessary cleanup in this method, such as cancelled network requests, 
    //or cleaning up any DOM elements created in componentDidMount.
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                Seconds : {this.state.seconds}
            </div>
        );
    };
}

export default Timer;