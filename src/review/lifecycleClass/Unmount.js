import React, { Component } from "react";

class MyComponent extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount"); // 컴포넌트가 사라질 때 실행
    }

    render() {
        return <h1>Hello, I'm Component!</h1>;
    }
}

export default MyComponent;