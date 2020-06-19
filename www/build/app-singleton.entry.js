import { r as registerInstance, h, H as Host } from './core-51b172a0.js';

class SingletonObject {
    constructor() {
        this._number = 0;
    }
    static getInstance() {
        if (!SingletonObject.INSTANCE) {
            SingletonObject.INSTANCE = new SingletonObject();
        }
        return SingletonObject.INSTANCE;
    }
    getNumber() {
        return this._number;
    }
    setNumber(n) {
        this._number = n;
    }
}

const Singleton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.singletonOne = SingletonObject.getInstance();
        this.singletonTwo = SingletonObject.getInstance();
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    componentDidLoad() {
        this.singletonOne.setNumber(5);
        console.log("SingletonOne: ", this.singletonOne.getNumber());
        console.log("SingletonTwo: ", this.singletonTwo.getNumber());
        this.singletonTwo.setNumber(99);
        console.log("SingletonOne: ", this.singletonOne.getNumber());
        console.log("SingletonTwo: ", this.singletonTwo.getNumber());
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Singleton as app_singleton };
