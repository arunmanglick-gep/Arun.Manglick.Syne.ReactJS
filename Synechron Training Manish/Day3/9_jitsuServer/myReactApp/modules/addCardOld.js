import React from 'react';
// -----------------------------------------------
class Form extends React.Component{
                handleSubmit(evt){
                    evt.preventDefault();
                    var id = this.refs.pId.value;
                    this.props.addCard(id);
                }

                render(){
                    return (
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" placeholder="Enter Id" ref="pId"/>
                            <button>Add</button>
                        </form>
                    );
                }
            }

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

class Main extends React.Component{
    constructor(){
        super();
        this.state= {pics:[]};
        this.addCard = this.addCard.bind(this);
    }

    addCard(id){
        this.setState({pics:this.state.pics.concat(id)});
    }

    render(){
        var cards = this.state.pics.map(function(picId){
            return <ImageCard forId={picId} />;
        });

        /*map() method calls the provided function once for each element in an array, in order.
        Note: map() does not execute the function for array elements without values.
        Note: map() does not change the original array */

        return (
            <div>
                <Form addCard={this.addCard}/>
                <hr/>
                {cards}
            </div>
        );
    }
}

// -----------------------------------------------
export default Main;