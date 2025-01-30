import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("constructor");  // 1️⃣ 처음 실행됨
    }

    componentDidMount() {
        console.log("componentDidMount");  // 3️⃣ 화면에 그려진 후 실행됨
    }

    render() {
        console.log("render");  // 2️⃣ 실행됨 (화면을 그림)
        return <h1>Count: {this.state.count}</h1>;
    }
}

export default MyComponent;