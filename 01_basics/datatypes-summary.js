// Primitive, 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 13245476874684n

// Reference (Non primitive), types : Array, Objects, Functions

const heroes = ["shaktiman", 'naagraj', "doga"]

let myObj = {
    name: "chaitanya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
