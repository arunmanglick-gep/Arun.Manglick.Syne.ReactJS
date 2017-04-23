class Main extends React.Component {
    constructor() {
        super();
        this.state = { name: "Manish" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ name: evt.target.value });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", value: this.state.name, onChange: this.handleChange }),
            React.createElement(
                "h2",
                null,
                "Hello (JSX Format), ",
                this.state.name
            )
        );
    }
}

ReactDOM.render(React.createElement(Main, null), document.getElementById("container"));
