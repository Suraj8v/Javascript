/*
In JavaScript, a promise is an object used for asynchronous operations. 
It represents a value (or the eventual completion or failure of an asynchronous operation) 
and allows you to handle its success or failure when the operation finishes.

Promises are commonly used for handling asynchronous operations such as 
fetching data from a server, reading files, or executing time-consuming tasks 
without blocking the main thread. They provide a cleaner alternative to using 
callback functions, making asynchronous code easier to read, write, and maintain.

*/

let myPromise = new Promise(function(resolve,reject)
{
    setTimeout(()=>{
      const num = Math.random()
      console.log(num)
      if(num<1)
      {
        resolve(num)
      }
      else{
        reject(new Error("Random number is too high"))
      }
    },1000)
})

myPromise.then((result)=>{
    console.log("Success",result)
}).catch((error)=>{
 console.log("Error msg ", error.message)
})



/*
A promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
*/