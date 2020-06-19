import { Developer } from "./Developer"
import { Tester } from "./Tester"

export class EmployeeFactory {
    create = (name, type) => {
        switch(type){
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
        }
    }
}