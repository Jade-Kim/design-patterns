export class SingletonObject {
    private static INSTANCE: SingletonObject;

    private _number: number;

    private constructor() {
        this._number = 0;
    }

    public static getInstance(): SingletonObject {
        if (!SingletonObject.INSTANCE) {
            SingletonObject.INSTANCE = new SingletonObject();
        }

        return SingletonObject.INSTANCE;
    }

    public getNumber(): number {
        return this._number;
    }

    public setNumber(n: number) {
        this._number = n;
    }
}