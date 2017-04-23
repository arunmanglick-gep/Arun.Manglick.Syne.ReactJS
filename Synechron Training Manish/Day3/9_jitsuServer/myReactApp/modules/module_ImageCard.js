import React from 'react';
// -----------------------------------------------

class ImageCard extends React.Component{
    constructor(){
        super();
        this.state= {};
    }

    componentWillMount(){
        var component = this;
        var url = "http://jsonplaceholder.typicode.com/photos/" + this.props.forId;
        $.get(url).done(function(data){
            component.setState(data);
        });
    }

    render(){
        return (
            <div>
                <img src={this.state.url} width="80"/>
                <h3>{this.state.title}</h3>
                <hr/>
            </div>
        );
    }
}
// -----------------------------------------------
export default ImageCard;