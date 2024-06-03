//single inheritance
class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {
    print() {
        console.log("Print Hello");
    }
}

let c1 = new Child();

//If we have the same methods in both classes, then child class method will be invoked (Method Overriding)

class Human {
    constructor() {
        this.species = "Homo Sapiens";
    }
    eat() {
        console.log("eat");
    }
    work() {
        console.log("no work");
    }
}

class Engineer extends Human {
    constructor(branch) {             
        super();                      
        this.branch = branch;
    }
    work() {
        console.log("Build code");
    }
}

let E1 = new Engineer("Computer Engineer");
console.log(E1.work());           //Build code

//Super Keyword: is used to access properties, methods and the constructors of parent class
/*first child constructor is called here when it sees super keyword, it will call parent constructor, if we don't call super keyword
means parent constructor before child constructor, it will throw error*/
//same goes while calling the same methods from both classes.

//practice question
/*You are creating a website for your college. Create a class User with 2 properties, name and email. 
  It also has a method called viewData() which  allows users to view website data.
  Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows him to edit data*/

  let data = "secrete data";
  class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
      viewData() {
         console.log("Data:", data);
      }
  }
  let stud1 = new User("Prajkta", "gudleprajkta@gmail.com");
  let stud2 = new User("Tushar", "tushargawandetg45@gmail.com");

  class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData() {
        data = "Edited data";
    }
  }
  let admin1 = new Admin("Pradyumn", "pradyumngudle2002@gmail.com");
