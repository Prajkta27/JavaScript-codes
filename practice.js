//Practice Questions:
/* Create a h2 heading element with text "Hello JavaScript". Append "from Apna College students" to this text using Js*/

let h2= document.getElementsByTagName("h2");
console.dir(h2);

//To change text we will be using innerText property
h2.innerText= h2.innerText + "from Apna College students";
console.log(h2.innerText);                      //Hello JavaScript from Apna College students


/*Create 3 divs with common class name - "box". Access them and add some unique text to each of them*/

let divs = document.querySelectorAll(".box");
console.log(divs);   
console.log(divs[0]);                  //<div class="box">First div</div>     
console.log(divs[1]);                  //<div class="box">Second div</div> 
console.log(divs[2]);                  //<div class="box">Third div</div>   

//so to change these individual divs we will use the property innerText
divs[0].innnerText = "New unique value 1";
divs[1].innnerText = "New unique value 2";
divs[2].innnerText = "New unique value 3";

//OR we can use loops (for of)
let idx=1;
for(let div of divs)
    {
       div.innerText=`New unique value ${idx}`;
       idx++;
    }