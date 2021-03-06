import { r as registerInstance, h } from './core-51b172a0.js';

class MusicPlayer {
    pressedPower() {
        this.currentState.pressedPower();
    }
    pressedPlay() {
        this.currentState.pressedPlay();
    }
    pressedPause() {
        this.currentState.pressedPause();
    }
    get getState() {
        return this.currentState;
    }
    set setState(state) {
        this.currentState = state;
    }
}

class PowerOn {
    pressedPower() {
        return false;
    }
    pressedPlay() {
        return "Playing...";
    }
    pressedPause() {
        return "Pause!";
    }
}
class PowerOff {
    pressedPower() {
        return true;
    }
    pressedPlay() {
        return "";
    }
    pressedPause() {
        return "";
    }
}
class Playing {
    pressedPower() {
        return false;
    }
    pressedPlay() {
        return "Playing...";
    }
    pressedPause() {
        return "Pause!";
    }
}
class Paused {
    pressedPower() {
        return false;
    }
    pressedPlay() {
        return "Playing...";
    }
    pressedPause() {
        return "Pause!";
    }
}

const StatePattern = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.musicPlayer = new MusicPlayer();
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "State Pattern"), h("h6", { class: "grayHint" }, "- Lets an object to behave differently depending on the state now"), h("h6", { class: "grayHint" }, "- \uD604\uC7AC \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uAC19\uC740 \uC774\uB984\uC758 \uBA54\uC18C\uB4DC\uAC00 \uB2E4\uB974\uAC8C \uC791\uB3D9\uD558\uBA70 Context \uB294 \uD558\uB098\uC758 State, \uC989 \uD558\uB098\uC758 current State \uB97C \uAC00\uC9C8 \uC218 \uC788\uB2E4."), h("br", null), h("h5", null, "Music Player"), h("h6", { class: "grayHint" }, "- Music Player Buttons behave differently depends on the current state of the music player."), h("h6", { class: "grayHint" }, "- \uC74C\uC545 \uD50C\uB808\uC774\uC5B4\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC544\uB798 \uBC84\uD2BC\uC740 \uAC01\uAC01 \uB2E4\uB974\uAC8C \uC791\uB3D9\uD55C\uB2E4."), h("h6", { class: "blueHint" }, "- Music Player Current State: ", this.currentState), h("button", { class: this.powerOn ? "btn-large margin20" : "btn-large margin20 red", onClick: () => this.pressedPower() }, h("i", { class: "material-icons" }, "power_settings_new")), h("button", { class: "btn-large margin20", onClick: () => this.pressedPlay() }, h("i", { class: "material-icons" }, "play_arrow")), h("button", { class: "btn-large margin20", onClick: () => this.pressedPause() }, h("i", { class: "material-icons" }, "pause")), h("pattern-photos", { uml: "state-uml.png", imp: "state-i.png", cl: "state-1.png", cl2: "state-2.png" })));
    }
    pressedPower() {
        const state = this.musicPlayer.getState;
        this.powerOn = state.pressedPower();
        if (this.powerOn) {
            this.musicPlayer.setState = new PowerOn();
            this.currentState = "Power On";
        }
        else {
            this.musicPlayer.setState = new PowerOff();
            this.currentState = "Power Off";
        }
    }
    pressedPlay() {
        const state = this.musicPlayer.getState;
        this.currentState = state.pressedPlay();
        this.powerOn ? this.musicPlayer.setState = new Playing() : '';
    }
    pressedPause() {
        const state = this.musicPlayer.getState;
        this.currentState = state.pressedPause();
        this.powerOn ? this.musicPlayer.setState = new Paused() : '';
    }
    componentDidLoad() {
        this.musicPlayer.setState = new PowerOff();
        this.currentState = "Power Off";
    }
    static get style() { return "#stateCanvas {\n  border: 1px solid black;\n  height: 200px;\n  width: 200px;\n}"; }
};

export { StatePattern as app_state };
