export class Observable {
    private observers: Array<Function> = []; // An array of observer functions

    subscribe(fn: Function){
        this.observers.push(fn);
    };

    unsubscribe(fnToRemove: Function){
        this.observers = this.observers.filter(fn => fn != fnToRemove);
    };

    fire(){
        this.observers.forEach(fn => { fn.call(this) });
    }
}

// Check out MyEvent.ts file