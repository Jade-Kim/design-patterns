class Employee {
    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }

    name: string;
    salary: number;

    get getSalary(){
        return this.salary;
    }

    setSalary(salary: number){
        this.salary = salary;
    }

    // Extend library
    accept(visitorFunction: Function){
        visitorFunction(this);
    }
}

/////////////////

const jade = new Employee("Jade", 10000);
console.log(jade.getSalary);

function bonus(emp: Employee){
    emp.setSalary(emp.getSalary * 2)
}

jade.accept(bonus);
console.log(jade.getSalary);