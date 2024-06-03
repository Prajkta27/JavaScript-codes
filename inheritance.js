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
    eat() {
        console.log("eat");
    }
    work() {
        console.log("no work");
    }
}

class Engineer extends Human {
    work() {
        console.log("Build code");
    }
}

let E1 = new Engineer();
console.log(E1.work());           //Build code