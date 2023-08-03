let a;
console.log(a);

if (typeof a === "undefined") {
    console.log('a에 아무것도 할당되지 않았습니다!')
}


if (!a) {
    console.log('a에 아무것도 할당되지 않았습니다!')
}
[오전 10:16](강사) 이호준 - Licat:
let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); //null


// 참고삼아서만 알아주세요.
// null * 100이나 null + 100 이런 것도 한 번 해보세요!
// let 반점수 = [10, 20, 30, null, 40, 50]
// let 반평균 = 0
// for (const i of 반점수) {
//     console.log(i)
//     반평균 += i
// }

// 반평균


// let 반점수 = [10, 20, 30, undefined, 40, 50]
// let 반평균 = 0
// for (const i of 반점수) {
//     console.log(i)
//     반평균 += i
// }

// 반평균 // NaN