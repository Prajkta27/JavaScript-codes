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