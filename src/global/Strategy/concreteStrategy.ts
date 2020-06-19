import { Package } from "./Package";
import { ShippingCompany } from "./strategy";

export class Fedex implements ShippingCompany {
    calculate(thePackage: Package): number{
        return thePackage.weight * 10;
    }
}

export class UPS implements ShippingCompany {
    calculate(thePackage: Package): number{
        return thePackage.weight * 9;
    }
}

export class USPS implements ShippingCompany {
    calculate(thePackage: Package): number{
        return thePackage.weight * 8;
    }
}
