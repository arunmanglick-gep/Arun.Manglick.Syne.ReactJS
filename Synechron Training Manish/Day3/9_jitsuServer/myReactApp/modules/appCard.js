import React from 'react';
import Form from './module_Form.js';
import ImageCard from './module_ImageCard.js';

// -----------------------------------------------

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
        var showImageCardsList = this.state.pics.map(function(picId){
            return <ImageCard key={picId} forId={picId} />;
        });

        /*map() method calls the provided function once for each element in an array, in order.
        Note: map() does not execute the function for array elements without values.
        Note: map() does not change the original array */

        return (
            <div>
                <Form addImageCard={this.addCard} />
                <hr/>
                {showImageCardsList}
            </div>
        );
    }
}

// -----------------------------------------------
export default Main;