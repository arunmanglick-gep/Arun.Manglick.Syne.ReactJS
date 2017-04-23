class Main extends React.Component{
    constructor(){
        super();
        this.state = { name : "Manish" };
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

ReactDOM.render(<Main/>, document.getElementById("container"));