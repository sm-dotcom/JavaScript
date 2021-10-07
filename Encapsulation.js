class Employee{

    setEmpDetails(name, id, phoneNo){
        this.name = name
        this.id = id
        this.phoneNo = phoneNo
    }

    getEmpName(){
        return this.name
    }

    getEmpId(){
        return this.id
    }

    getEmpPhoneNo(){
        return this.phoneNo
    }
}

let  emp1 = new Employee();
let  emp2 = new Employee();

emp1.setEmpDetails('John Doe', 303, 586988798)
emp2.setEmpDetails('jane doe', 304, 988888909)
console.log (emp1.getEmpName())
console.log (emp1.getEmpId())
console.log (emp1.getEmpPhoneNo())
console.log (emp2.getEmpName())
console.log (emp2.getEmpId())
console.log (emp2.getEmpPhoneNo())




