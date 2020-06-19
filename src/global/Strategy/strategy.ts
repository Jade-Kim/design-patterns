import { Package } from "./Package";

export interface ShippingCompany {
    calculate(thePackage: Package): number;
   }