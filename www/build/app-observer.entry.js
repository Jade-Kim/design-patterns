import { r as registerInstance, h } from './core-51b172a0.js';

// Concrete Observer
class RFIDPluginObserver {
    constructor(rfidPlugin) {
        this.rfidPlugin = rfidPlugin;
        this._notifier = [];
    }
    update() {
        this._notifier.forEach(fn => { fn(this.rfidPlugin.data); });
        console.log(this);
    }
    listener(fn) {
        this._notifier.push(fn);
    }
}

class ObservableObject {
    constructor() {
        this.observers = [];
    }
    // subscribe
    addObserver(observer) {
        const isExist = this.observers.indexOf(observer);
        if (isExist !== -1) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }
    // unsubscribe
    removeObserver(observer) {
        const i = this.observers.indexOf(observer);
        if (i === -1) {
            return console.log('Observer dose not exist.');
        }
        this.observers.splice(i, 1);
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}
class RFIDPlugin extends ObservableObject {
    get data() {
        return this.currentData;
    }
    set data(data) {
        this.currentData = data;
        this.notifyObservers();
    }
}
var rfidPlugin = new RFIDPlugin();
var rfidPluginObserver = new RFIDPluginObserver(rfidPlugin);
function checkRfidPlugin() {
    // ... check the connection
    const connectionStatus = "Connected!";
    rfidPlugin.data = connectionStatus;
}

const Observer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Observer Pattern"), h("h6", { class: "grayHint" }, "- Allows a subscription mechanism to notify other objects when any events happen."), h("h6", { class: "grayHint" }, "- \uC774\uBCA4\uD2B8\uAC00 \uC0DD\uAE30\uBA74 \uD574\uB2F9 \uC774\uBCA4\uD2B8\uB97C \uAD6C\uB3C5\uD558\uACE0 \uC788\uB294 \uB2E4\uB978 \uAC1D\uCCB4\uC5D0\uAC8C \uC54C\uB824\uC8FC\uB294 \uC124\uACC4 \uD328\uD134\uC774\uB2E4."), h("h5", null, "Handle a plugin connection"), h("button", { class: "btn margin20", onClick: _ => this.connect() }, "Connect"), h("button", { class: "btn margin20", onClick: _ => this.disconnect() }, "Disconnect"), h("div", null, this.result_plugin)));
    }
    componentWillLoad() {
        rfidPluginObserver.listener((connection) => this.result_plugin = connection);
        // pluginConnection.listener(
        //   (connection) => this.result_plugin = connection
        // )
    }
    componentDidLoad() {
        rfidPlugin.addObserver(rfidPluginObserver);
        checkRfidPlugin();
        //checkConnection();
    }
    connect() {
        rfidPlugin.data = "Connected";
        //pluginConnection.fire("Connected");
    }
    disconnect() {
        rfidPlugin.data = "Disconnected";
        //pluginConnection.fire("Disconnected");
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Observer as app_observer };
