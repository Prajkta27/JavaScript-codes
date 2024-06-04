  //So, we avoid using callback hell in such situation and use promises at that time
  //Promises: Promises a "eventual" completion of task. it's the object in JS.
  /*Syntax: let promise = new Promise(resolve, reject => {})*/

  let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success");                            //If we didn't call resolve or reject function, it will be in pending state by default.
    //reject("Some error occured");      
  });
 
  const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("promise");
        resolve("Success");                            //If we didn't call resolve or reject function, it will be in pending state by default.
        //reject("Some error occured");      
      });
  }
   
  let promise1 = getPromise();
  promise1.then((res) => {
    console.log("Promise fulfilled", res);
  })

  promise1.catch((err) => {
    console.log("rejected", err);
  })
  
  //promisres are created/sent by other APIs to us & then we have to handle them.
  //THere are 2 methods for that: 
  /*Promise resolved: promise.then((res) => {})
    promise rejected: promise.catch((err) => {}) */

  //There are 3 states of Promise - pending, resolve, rejected
  function getData(getID, getNextData){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", dataID);
            resolve("Data sent successfully");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    })
  }
//Promise chaining
  function asyncFun() {
      return new Promise ((resolve, reject) => {
         setTimeout(() => {
            console.log("Your data is here");
            resolve("Success");
         }, 3000)
      })
  }
   function asyncFun2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log ("Your second data is here");
        }, 3000);
    })
   }
   let p1 = asyncFun();
   p1.then((res) => {
        console.log("Promise Fulfilled", res);
        let p2 = asyncFun2();
        p2.then(() => {
        console.log("Promise 2 fulfilled", res);
    })
   })

   function getData(dataID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", dataID);
            resolve("Data sent successfully");
        }, 5000);
    })
  }
  getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
    })
  })
    /*O/P: data: 1                       promises.js:79 
         Data sent successfully        promises.js:73 
         data: 2                       promises.js:81 
         Data sent successfully */

 //Another way of calling promise is:
 getData(1).then((res) => {
    return getData(2);
 }).then((res) => {
    console.log(res);                 
 })   
    /*O/p: data: 1       promises.js:73 
       data: 2       promises.js:88 
       Data sent successfully*/