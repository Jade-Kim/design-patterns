import { r as registerInstance, h } from './core-51b172a0.js';

// Abstraction
class RemoteControl {
    constructor(device) {
        this.device = device;
    }
    turnOn() {
        this.device.turnOn();
    }
    turnOff() {
        this.device.turnOff();
    }
}
class AdvancedRemoteControl extends RemoteControl {
    setChannel(number) {
        this.device.setChannel(number);
    }
}
class SamsungTV {
    setChannel(number) {
        alert("Samsung TV Channel " + number);
    }
    turnOn() {
        alert("Samsung TV turn on");
    }
    turnOff() {
        alert("Samsung TV turn off");
    }
}
class LGTV {
    setChannel(number) {
        alert("LG TV Channel " + number);
    }
    turnOn() {
        alert("LG TV turn on");
    }
    turnOff() {
        alert("LG TV turn off");
    }
}

const Bridge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.samsungRemoteControl = new AdvancedRemoteControl(new SamsungTV());
        this.LGRemoteControl = new AdvancedRemoteControl(new LGTV());
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Bridge Pattern"), h("h6", { class: "grayHint" }, "- Allows spliting a large class into two separate hierarchies independntly "), h("h6", { class: "grayHint" }, "- \uC11C\uB85C \uC5F0\uAD00\uB41C \uD070 \uD074\uB798\uC2A4\uB97C 2\uAC1C\uC758 \uB3C5\uB9BD\uB41C \uC870\uC9C1\uC73C\uB85C \uB098\uB204\uC5B4 \uAC01\uAC01 \uB530\uB85C \uAD00\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uD558\uB294 \uD328\uD134\uC774\uB2E4."), h("h5", { class: "margin20" }, "Remote Controllers"), h("div", null, "Samsung TV Remote Controller"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: _ => this.turnOnSamsungTV() }, "Turn On Samsung TV"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: _ => this.turnOffSamsungTV() }, "Turn Off Samsung TV"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: _ => this.setChannelSamsungTV() }, "Set Channel Samsung TV"), h("div", null, "LG TV Remote Controller"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: _ => this.turnOnLGTV() }, "Turn On LG TV"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: _ => this.turnOffLGTV() }, "Turn Off LG TV"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: _ => this.setChannelLGTV() }, "Set Channel LG TV"), h("pattern-photos", { uml: "bridge-uml.png", imp: "bridge-i.png", cl: "bridge-1.png", cl2: "bridge-2.png" })));
    }
    turnOnSamsungTV() {
        this.samsungRemoteControl.turnOn();
    }
    turnOffSamsungTV() {
        this.samsungRemoteControl.turnOff();
    }
    setChannelSamsungTV() {
        this.samsungRemoteControl.setChannel(11);
    }
    turnOnLGTV() {
        this.LGRemoteControl.turnOn();
    }
    turnOffLGTV() {
        this.LGRemoteControl.turnOff();
    }
    setChannelLGTV() {
        this.LGRemoteControl.setChannel(11);
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Bridge as app_bridge };
