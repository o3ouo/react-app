export default function Class() {

    /* 일반적인 객체 활용 방법 */
    const students = [];

    // students라는 빈 배열에 push로 키, 값을 밀어넣음
    students.push({ name: '경희', 국어: 100, 영어: 80, 수학: 50, 과학: 70 });
    students.push({ name: '유나', 국어: 100, 영어: 100, 수학: 92, 과학: 80 });
    students.push({ name: '상민', 국어: 50, 영어: 80, 수학: 100, 과학: 20 });
    students.push({ name: '아정', 국어: 20, 영어: 100, 수학: 30, 과학: 100 });
    students.push({ name: '희정', 국어: 20, 영어: 20, 수학: 15, 과학: 100 });

    console.log(students);

    // ex. 각 개인의 총점 평균 구하기
    // students.forEach(value => {
    //     let total = '';

    //     total += value['국어'] + value['영어'] + value['수학'] + value['과학'];
    //     console.log(`${value['name']} : ${total / 4}`);
    // });

    // // ex. 객체를 처리하는 함수를 활용하면 확장성을 고려했을 때 좋은 방법
    // function total(student) {
    //     return student.국어 + student.영어 + student.수학 + student.과학;
    // }

    // function average(student) {
    //     return total(student) / 4;
    // }

    // // \t : Tab, \n : Enter 
    // let out = '이름\t총점\t평균\n';

    // for( let s of students ) {
    //     out += `${s.name} \t ${total(s)}점 \t ${average(s)}점 \n`
    // }

    // console.log(out);

    /***************************************************************************************************/

    // ex. 객체의 기능을 메소드로 추가

    // 메소드를 만드는 반복문
    // for( let student of students ) {

    //     student.total = function() {
    //         return this.국어 + this.영어 + this.수학 + this.과학;
    //     }

    //     student.average = function() {
    //         return this.total() / 4
    //     }
    // }

    // let out = '이름\t총점\t평균\n';
    
    // // 만든 메서드를 출력하는 기능을 가지고 있음
    // for( let s of students ) {
    //     out += `${s.name} \t ${s.total(s)}점 \t ${s.average(s)}점 \n`;
    // }

    // console.log(out);
    
    // 각각 따로 사용하는 이유는 다른 기능을 가지고 있기 때문
    // 하나가 오류나면 다른 기능도 함께 오류가 나서 분리 해두는 것이 좋음 

    /***************************************************************************************************/

    // ex. 객체의 키와 값을 생성함수를 사용해서 객체를 찍어내면 더 쉽게 사용 가능

    // 객체를 만들어주는 기계
    function student(name, 국어, 영어, 수학, 과학) {
        return {
            name: name,
            국어:국어,
            영어:영어,
            수학:수학,
            과학:과학,
            total() {
                return this.국어 + this.영어 + this.수학 + this.과학;
            },
            average() {
                return this.total() / 4
            },
            toString() {
                return `${this.name} \t ${this.total()}점 \t ${this.average()}점 \n`;
            }
        }
    }

    // 기계를 사용해 빈 배열에 객체를 찍어냄
    const studen = [];
    studen.push(student('경희',100,80,50,70));
    studen.push(student('유나',100,100,92,80));
    studen.push(student('상민',50,80,100,20));
    studen.push(student('아정',20,100,30,100));
    studen.push(student('희정',20,90,15,100));

    let out = '이름\t총점\t평균\n';

    for( let s of studen ) {
        out += s.toString();
    }

    console.log(`student : \n ${student}`);
    console.log(`studen : \n ${studen}`);
    console.log(`out : \n ${out}`);

    return (
        <div>

        </div>
    );
}