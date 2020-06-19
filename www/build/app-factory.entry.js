import { r as registerInstance, h, H as Host } from './core-51b172a0.js';

class Developer {
    constructor(name) {
        this.type = "Developer";
        this.name = name;
    }
}

class Tester {
    constructor(name) {
        this.type = "Tester";
        this.name = name;
    }
}

class EmployeeFactory {
    constructor() {
        this.create = (name, type) => {
            switch (type) {
                case 1:
                    return new Developer(name);
                case 2:
                    return new Tester(name);
            }
        };
    }
}

const Factory = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null, h("div", { ref: el => this.result = el }))));
    }
    say(person) {
        this.result.innerHTML += "Hi, I am " + person.name + " and I am a " + person.type + "<br/>";
        //console.log("Hi, I am "+ person.name + " and I am a " + person.type);
    }
    componentDidLoad() {
        const employeeFactory = new EmployeeFactory();
        const employees = [];
        employees.push(employeeFactory.create("Jade", 1));
        employees.push(employeeFactory.create("John", 2));
        employees.forEach(person => {
            this.say(person);
        });
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Factory as app_factory };
