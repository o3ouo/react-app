import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1️⃣ constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2️⃣ getDerivedStateFromProps()");
    return null; // state 변경 없음
  }

  componentDidMount() {
    console.log("4️⃣ componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🔄 shouldComponentUpdate()");
    return true; // true면 render() 실행됨
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("📸 getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("✅ componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("🚫 componentWillUnmount()");
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("3️⃣ render()");
    return (
      <div>
        <h1>카운트: {this.state.count}</h1>
        <button onClick={this.handleIncrease}>+1 증가</button>
      </div>
    );
  }
}

export default LifeCycleExample;
