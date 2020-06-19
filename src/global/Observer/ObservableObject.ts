import { Observer, RFIDPluginObserver } from "./Observer";

export class ObservableObject {
    private observers: Observer[] = [];

    // subscribe
    public addObserver(observer: Observer): void {
        const isExist = this.observers.indexOf(observer);
        if (isExist !== -1) {
            return console.log('Subject: Observer has been attached already.');
        }

        this.observers.push(observer);
    }

    // unsubscribe
    public removeObserver(observer: Observer): void {
        const i = this.observers.indexOf(observer);
        if (i === -1) {
            return console.log('Observer dose not exist.');
        }

        this.observers.splice(i, 1);
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

}

export class RFIDPlugin extends ObservableObject {
    private currentData: string;

    public get data(): string {
        return this.currentData;
    }

    public set data(data: string) {
        this.currentData = data;
        this.notifyObservers();
    }

}


export var rfidPlugin = new RFIDPlugin();
export var rfidPluginObserver = new RFIDPluginObserver(rfidPlugin);

export function checkRfidPlugin(){
    // ... check the connection
    const connectionStatus = "Connected!";
    rfidPlugin.data = connectionStatus;
}