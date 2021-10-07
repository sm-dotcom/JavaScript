let EmpDetails = function (name, age){
    this.name = name
    this.age = age
}

EmpDetails.prototype.getAge = function (){
    return this.age
}

EmpDetails.prototype.getName = function(){
    return this.name
}

let emp1 = new EmpDetails('John', 30)
let emp2 = new EmpDetails('Peter', 40)
console.log (emp1.getName());
console.log (emp2.getName());
console.log (emp1.getAge());
console.log (emp2.getAge());

// or
// function EmpDetails(){
// }
