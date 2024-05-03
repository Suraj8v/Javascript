const accountID = 6936
var accountName = "Suraj"
let cityName = "London"
company = "Google"

/* prefer not to use var because of issues in functional 
and block scope. always use const or let */

/* 
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.*/

console.table([accountID,accountName,cityName,company])

x = accountID+4
console.log(x)

accountID = accountID+5
console.log(accountID)