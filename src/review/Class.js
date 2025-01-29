import { Component } from 'react';

class Class extends Component {
    constructor(props) {
        super(props)
        this.name = props.name;
        this.국어 = props.국어;
        this.영어 = props.영어;
        this.수학 = props.수학;
        this.과학 = props.과학;
    }

    total() {
        return this.국어 + this.영어 + this.수학 + this.과학;
    }

    average() {
        return this.total() / 4;
    }

    out() {
        return `${this.name} \t ${this.total()}점 \t ${this.average()}점 \n`
    }

    render() {
        return null;
    }
}

// class로 찍어낸 인스턴스를 배열에 담는다
const students = [];

students.push(new Class({ name: '경희', 국어: 100, 영어: 80, 수학: 50, 과학: 70 }));
students.push(new Class({ name: '유나', 국어: 100, 영어: 100, 수학: 92, 과학: 80 }));
students.push(new Class({ name: '상민', 국어: 50, 영어: 80, 수학: 100, 과학: 20 }));
students.push(new Class({ name: '아정', 국어: 20, 영어: 100, 수학: 30, 과학: 100 }));
students.push(new Class({ name: '희정', 국어: 20, 영어: 90, 수학: 15, 과학: 100 }));

console.log(students);

// 찍어낸 인스턴스를 for of를 사용해 out 변수에 out이라는 key를 담음
let out = '이름\t총점\t평균\n';

for( let s of students ) {
    out += s.out();
}

console.log(out);

export default Class;