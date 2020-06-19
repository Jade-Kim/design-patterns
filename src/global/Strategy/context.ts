import { Package } from "./Package";
import { ShippingCompany } from "./strategy";

export class Shipping {

    company: ShippingCompany;
    
    setStrategy(company: ShippingCompany){
        this.company = company;
    }

    calculate(thePackage: Package){
        return this.company.calculate(thePackage);
    }
}