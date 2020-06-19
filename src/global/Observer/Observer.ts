import { RFIDPlugin } from "./ObservableObject";

export interface Observer {
    update(): void;
}

// Concrete Observer
export class RFIDPluginObserver implements Observer {
    private _notifier: Array<Function> = [];

    constructor(private rfidPlugin: RFIDPlugin){

    }

    public update(): void {
        this._notifier.forEach(fn => { fn(this.rfidPlugin.data) });
        console.log(this);
    }

    public listener(fn: Function) {
        this._notifier.push(fn);
    }
}


