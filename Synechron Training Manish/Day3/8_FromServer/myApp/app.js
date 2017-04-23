// var React = require('react');
import React from 'react';
class Main extends React.Component{
    constructor(){
        super();
        this.state = { name : "Manish (Using WebPack)" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({name:evt.target.value});
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <h2>Hello, {this.state.name}</h2>
            </div>
        );
    }
}

// module.exports.Main = Main;
export default Main;