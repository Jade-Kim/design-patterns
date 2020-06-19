
// Abstraction
export class RemoteControl {
    constructor(protected device: Device){ }

    public turnOn(): void {
        this.device.turnOn();
    }

    public turnOff(): void {
        this.device.turnOff();
    }
}

export class AdvancedRemoteControl extends RemoteControl {
    public setChannel(number: number): void {
        this.device.setChannel(number);
    }
}


// Implementation
export interface Device {
    turnOn(): void;
    turnOff(): void;
    setChannel(number: number): void;
}

export class SamsungTV implements Device {
    public setChannel(number: number): void {
        alert("Samsung TV Channel "+number);
    }

    public turnOn(): void {
        alert("Samsung TV turn on");
    }

    public turnOff(): void {
        alert("Samsung TV turn off");
    }
}

export class LGTV implements Device {
    public setChannel(number: number): void {
        alert("LG TV Channel "+number);
    }

    public turnOn(): void {
        alert("LG TV turn on");
    }

    public turnOff(): void {
        alert("LG TV turn off");
    }
}

