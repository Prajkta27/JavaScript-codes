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

//Ternary operator
//a?b:c;
//In this case, a is condition, b will execute if condition is true else c will execute
let age=25;
let result= age >= 18 ? "adult": "not adult";
console.log(result);                  //adult

//Practice question using prompt
//Take a number from user using prompt and check whether that number is multiple of 5 or not
let num= prompt("Enter a number");
console.log(num);
if(num % 5 === 0)
    {
        console.log(num, "is a multiple of 5");
    }
else
{
    console.log(num, "is not a multiple of 5");
}

//Write a code which can give grades to students according to their scores
//90-100, A      70-89, B       60-69, C        50-59, D        0-49, F
let score= prompt("Enter a score(0-100):");
let grade;

if(score>=90 && score<=100)
    {
        grade="A";
    }
    else if(score>=70 && score<=89){
        grade="B";
    }
    else if(score>=60 && score<=69){
            grade="C";
        }
    else if(score>=50 && score<=59){
        grade="D";
    }else{
        grade="F"
    }
    console.log("According to your scores, your grade is:", grade);

//Loops in JS
//For loop
for(let count=1; count<=5; count++)
    {
        console.log("This is first loop till now");
    }

//calculate sum of 1 to n numbers
    let n=prompt("Enter a number:");
    let sum;
    for(let i=1; i<=n; i++){
            sum=sum+i;
    }
    console.log("sum of the numbers is:", sum);

//While loop
    // syntax:
          /*while(condition)
            {
                do some work (i.e. print something)
                updation
            }*/
    let i=1;
    while(i<=5)
        {
            console.log("This is while loop");
            i++;
        }

    //do while
    //syntax:
          /* do{
            do some work(print something)
            updation
          } while (condition); */
    /*so from the sysntax, we came to know that in do while, condition is going to check at last,
    so it's sure that at lease 1 time our statement is going to execute*/

    let count=1;
    do{
        console.log("This is do while loop");
        count++;
    }while(count<=5);

    //for of loop
    //used to ierate the characters ofr elements of string and arrays respecively
    //syntax:
        /* for(let val of str)
            {
                do some work;
            }*/

    let str= "Prajkta";
    let length=0;
    for(let val of str)
        {
            console.log("val=", val);                //print each char of string
            length++;
        }
    console.log("Size of string is:", length);      //7

    //for in loop
    //returns key of the object
    //syntax:
         /* for(let key in object name)
            {
                do some work;
            }*/

    let Employee = {
        name:"Tushar Gawande",
        age: 24,
        salary: 400000,
        isID: true
    };

    for(let key in Employee)
        {
            console.log(key);                // returns keys if Employee i.e. name, age, salary, isID
        }

    //practice questions
    //print all the even numbers between 1 to 100
    for(let num=0; num<=100; num++)
        {
            if(num%2===0)
                {
                    console.log("Even numbers are:", num);
                }
        }

    /*Create a game where you start with a random game number.
    Ask the user to keep guessing the game number until the user enters the right value*/
    let gameNum=36;
    let userNum= prompt("Guess the number");
    while(userNum!=gameNum)
        {
            userNum= prompt("Sorry, you guessed wrong number, please try again!");
        }
    console.log("Congratulations, you guessed the right number!");

 //Template literals
    //Template literals are nothing but the strings with back ticks(``)
    let pen={
        name:"ball pen",
        price:10
    };

    //print by normal method (using string)
    console.log("Cost of", pen.name, "is", pen.price, "rupees");

    //print using template literals
    let output=`Cost of ${pen.name} is ${pen.price} rupees`;
    console.log(output);
