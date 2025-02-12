const accountId = 144553
let accountEmail = "hitesh@gmail.com"
var accountPassward = "12345"
accountCity = "Jaipur" //This method is not recommended as it is not a good method
let accountState;

//const,let and var are called "keyword"
/* 
Perfer not to use var Keyword
because of issue in block scope and functionnal scope
*/

//accountId = 2 //not Allowed

accountEmail = "virus@google.com"
accountPassward = "21212121"
accountCity = "kota"

console.log(accountId);

console.table([accountId, accountEmail, accountPassward, accountCity, accountState]);