import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.state = {studentname : "asurion"}
        this.textChanged = this.textChanged.bind(this)
    }

    textChanged(e){
        this.setState({studentname : e.target.value})
    }

    render() {
        return (
            <div>
                Hello, {this.state.studentname}!!!   <br/>
                <input type="text" value={this.state.studentname} onChange={this.textChanged}/>
                
            </div>
        );
    }
}

export default App;