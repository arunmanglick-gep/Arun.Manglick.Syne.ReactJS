import React from 'react';
// -----------------------------------------------
class Form extends React.Component{
    handleSubmit(evt){
        evt.preventDefault();
        var id = this.refs.pId.value;
        this.props.addImageCard(id);
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
// -----------------------------------------------
export default Form;