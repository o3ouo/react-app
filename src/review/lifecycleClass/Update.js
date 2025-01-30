import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true; // false를 반환하면 render()를 막을 수 있음
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", this.state.count);
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log("render");
        return <button onClick={this.handleClick}>Count: {this.state.count}</button>;
    }
}


export default MyComponent;