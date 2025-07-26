const accountId = 144553 // const can not be modified, not allowed

let accountEmail = "chaitnyauthale5@gmail.com" // can be changed

var accountPassword = "12345" // we dont use this !!

accountCity = "Jaipur" // it may be take default let

let accountState; // here have not defined any value for this so take default value as undefined

//accountId = 2 // const can not be modified, not allowed

console.log(accountId);

accountEmail = "asfhbjhf"
accountPassword = "789"
accountCity = "Pune"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

/*
    prefered not to use var
    because of issue in block scope and functional scope
*/