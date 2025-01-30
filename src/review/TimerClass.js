import React, { Component } from 'react';

class TimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, // 타이머의 초를 저장하는 state
        }
    }

    // 타이머 시작
    start = () => {
        if( !this.time ) { // 타이머가 실행 중이 ㅔ아닐 때만 실행
            this.time = setInterval(() => {
                this.setState((Time) => ({count: Time.count + 1})) // 1초마다 count 증가
            }, 1000)
        }
    }

    // 타이머 정지
    stop = () => {
        clearInterval(this.time); // 타이머 멈춤
        this.time = null; // 타이머 변수를 초기화
    }

    // 타이머 초기화
    reset = () => {
        clearInterval(this.time); // 타이머 멈춤
        this.setState({ count: 0 }); // count를 0으로 초기화
        this.time = null; // 타이머 변수를 초기화
    }

    componentWillUnmount() {
        clearInterval(this.time); // 메모리 누수를 방지하기 위해 타이머 정리
    }

    render() {
        const {count} = this.state; // state에서 count 값을 가져옴

        return (
            <div>
                <h1>Timer: {count}초</h1>

                <button type='button' onClick={this.start}>Start</button>
                <button type='button' onClick={this.stop}>Stop</button>
                <button type='button' onClick={this.reset}>Reset</button>
            </div>
        )
    }

}

export default TimerClass;