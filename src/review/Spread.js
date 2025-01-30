import React from 'react';

function Spread() {
    /* 배열에서의 사용 */
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1]; // 배열 복사

    const mergedArr = [...arr1, ...arr2]; // 배열 병합

    console.log(arr2); // [1, 2, 3]
    console.log(mergedArr); // [1, 2, 3, 1, 2, 3]

    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4, 5]; // 배열 추가

    console.log(newNumbers); // [1, 2, 3, 4, 5]

    /* 객체에서의 사용 */
    const obj1 = { name: "Jeong", age: 29 };
    const obj2 = { ...obj1 }; // 객체 복사
    const obj3 = { job: "play", country: "Korea" };

    const mergedObj = { ...obj1, ...obj3 }; // 객체 병합

    console.log(obj2); // { name: "Jeong", age: 29 }
    console.log(mergedObj); // { name: "Jeong", age: 29, job: "play", country: "Korea" }

    const person = { name: "Jeong", age: 29 };
    const updatedPerson = { ...person, age: 30 }; // 기존 객체의 값 변경

    console.log(updatedPerson); // { name: "Jeong", age: 30 }

    /* 함수에서의 사용 */
    function sum(a, b, c) {
        return a + b + c;
    }

    const number = [1, 2, 3];

    console.log(sum(...number)); // 6

    function getNumbers(...nums) {
        console.log(nums);
    }

    getNumbers(1, 2, 3, 4, 5);
    // [1, 2, 3, 4, 5]

    return (
        <div>

        </div>
    )
}

export default Spread;
