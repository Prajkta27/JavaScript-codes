let student={
    fullName: "Prajkta Gudle",
    branch: CSS,
    roll_no: 72162848,
    marks: 88.54,
    printMarks() {
       console.log("Marks are:", this.marks); 
    }
}

let employee={
    calTax(){
        console.log("Tax is 10%");
    }
}

let karanArjun={
    salary: 30000
}

//to set prototype(__proto__) in another obj
//prototype is a reference to an obj

karanArjun.__proto__=employee;

//if prototype and object have same method, then obj method will be executed

//classes in JS
class ToyotaCar{
    start()     {
        console.log("start");
    }

    stop() {
       console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}
//object
let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar();