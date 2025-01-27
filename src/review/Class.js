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

    // ex. 객체의 기능을 메소드로 추가
    // 메소드를 만드는 반복문
    for( let student of students ) {

        student.total = function() {
            return this.국어 + this.영어 + this.수학 + this.과학;
        }

        student.average = function() {
            return this.total / 4
        }

        let out = '이름\t총점\t평균\n';
    }

    return (
        <div>

        </div>
    );
}