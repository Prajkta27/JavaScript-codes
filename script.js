let heading= document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("MyClass");
console.dir(headings);
console.log(headings);

let para= document.getElementsByTagName("p");
console.dir(para);

let elements=document.querySelector("p");   //when we need first element
console.dir(elements);

let allEle=document.querySelectorAll("p");  //when we need all elements
console.dir(allEle);

//DOM Attributes
//getAttribute(attr)
let id=document.querySelector("div");
console.log(id.getAttribute("id"));         //1

let name=document.querySelector("div");
console.log(id.getAttribute("name"));       //MyDiv

//setAttribute(attr, val)
let name2=document.querySelector("div");
console.log(id.getAttribute("name", "Div"));       //<div id="1" name="Div"></div>

//style
//node.style (used to chnage the style of nodes in JS)
let div= document.querySelector("id");
div.style.backgroundColor = "green";
div.style.fontSize = "26px";
