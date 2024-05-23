//let & const has block scope
{
    let a=10;
    console.log(a);
}
{
    let a=15;
    console.log(a);
}
{
    const b=20;
    console.log(b);
}
{
    const b=25;
    console.log(b);
}
//For objrct creation use following syntax
//object is declared using key value pair
//it is declared using let/const same as variable
//we can change the key assigned within the object even if it's const. Ex: we can change name from Student object

const Student=
{
    name:"Prajkta",
    age:23,
    cgpa:9.3,
    isPass: true
};
console.log(typeof(Student));       //object

//To access particular in object use:
Student["name"];       //Prajkta
//or we can also use
Student.name;          //Prajkta

//if we want to increase some key avlue in object
Student["age"]=Student["age"]+1;        
console.log(Student.age);         //24

//to change value of the key within object
Student["name"]="Pradyumn";
console.log(Student.name);        //Pradyumn

//Arithmetic operations
let a=5;
let b=2;

console.log("a=", a & "b=", b);    //a=5 & b=2

console.log("a+b=", a+b);    //7
console.log("a-b=", a-b);    //3
console.log("a*b=", a*b);    //10
console.log("a/b=", a/b);    //2.5
console.log("a%b=", a%b);    //1

//Unary operators
//Increment operator
a=a++;   //(++a)
//Above line means a=a+1;
console.log("a=", a);       //6
//Decrement operator
a=a--;    //(--a)
console.log("a=", a);       //5

//Assignment operators
a+=4;      //a=a+4    
console.log("a=", a);     //9
a-=4;      //a=a-4
console.log("a=", a);
a*=4;     //a=a*4
console.log("a=", a);
a/=4;     //a=a/4
console.log("a=", a);
a%=4;     //a=a%4
console.log("a=", a);
a**=4;     //a=a**4      //exponential operator
console.log("a=", a);

//Comaprison operators
//Equal eual to(==)
let p=3;
let q=4;
console.log("p==q", p==q);     //false

//Not equal to(!=)
console.log("p!=q", p!=q);     //true

//triple equal to
console.log("p===q", p===q);     //false

//Not equal equal to(!==)
console.log("p!==q", p!==q);     //true

//comparison between == & ===
//== will return true for num & string if they have same value, but === checks that stricktly & returns false as a result.
let r=3;
let s="3";
console.log("r==s", r==s);     //true
console.log("r===s", r===s);   //false

let c=3;
let d=5;
console.log("c>d=", c>d);     //false
console.log("c<d=", c<d);     //true
console.log("c>=d=", c>=d);   //false
console.log("c<=d=", c<=d);   //true

//Logical operators
//Logical AND(&&)
let cond1 = c<d;     //true
let cond2 = c===3;   //true
console.log("cond1 && cond2=", cond1 && cond2);    //true

//Logical OR(||)
let cond3 = c>d;     //false
let cond4 = c===3;   //true
console.log("cond3 || cond4=", cond3 || cond4);    //true

//Logical NOT(!)
console.log("!(c>d)=", !(c>d));      //true   
//returns true if the answer is false, we know c is not greater than d, still it returns true

//conditional statements
//if else
let no=5;
if(no%2==0)
    {
        console.log(no + "is even");
    }
else{
    console.log(no + "is odd");
}

//if else if else
let mode="dark";
let colour;
if(mode=="dark"){
        colour=="black";
}else if(mode=="blue"){
    colour=="blue";
}else if(mode=="pink"){
    colour=="pink";
}else{
    colour=="white";
}
console.log(colour);
