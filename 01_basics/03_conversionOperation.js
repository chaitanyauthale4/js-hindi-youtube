let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

console.log(valueInNumber);

// "33" => 33...... "33abc" => NaN........... true => 1, false => 0

let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true, 0 => false
// " " => false
// "chaitanya" => true

let someNumber = 33

let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof(stringNum));


// *****************Operations ***************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1 + "2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
