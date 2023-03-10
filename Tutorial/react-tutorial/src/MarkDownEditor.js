import { Component } from "react";
import {Remarkable} from "remarkable";

class MarkDownEditor extends Component{
    constructor(props){
        super(props);
        this.md = new Remarkable();
        this.state = {value : 'Hello,  **World** !'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value : e.target.value});
    }

    getRawMarkup(){
        return {__html : this.md.render(this.state.value)};
    }
    
    render(){
        return(
            <div className="MarkDownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">Enter some markdown</label>
                <textarea 
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()}/>
            </div>
        );
    }
}

export default MarkDownEditor;