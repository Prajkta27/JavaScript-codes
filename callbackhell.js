
  //asnyc await >> promise chains >> callback hell  
  //syanchronous: code will execute in the way we assign or write them (Examples till now)

  //Asynchronous: works on setTimeout()
  console.log("one");
  console.log("two");
  setTimeout(() =>{
    console.log("hello")
  }, 4000)
  console.log("three");
  console.log("four");        //this will print one, two three four at start & hello after 4 sec (4 sec = 4000 ms)

  //callback: a functiom is passes as an argumnet of another function
  //nestyed callbacks
  function getData(getID, getNextData) {
    setTimeout(() => {
        console.log("Data:", getID);
        if(getNextData)
            {
                getNextData();
            }
    }, 2000);
  }
//below nested callback is used to get every data after 2 sec, if we pass the argument in same function, all will execute at same time
//this is called callback hell
/*callback hell is nothing but nexted callbacks stacked below one another forming a pyramid structure.
This style of programming becomes difficult to understand and manage*/
  getData(1, () => {
    getData(2, () => {
        getData(3);
    });
  });

