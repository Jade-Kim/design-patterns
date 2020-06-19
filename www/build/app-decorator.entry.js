import { r as registerInstance, h } from './core-51b172a0.js';

// Concrete Component
class CloudStorage {
    store(data) {
        alert("Storing " + data);
    }
}
// Decorator
class Encrypted {
    constructor(storage) {
        this.storage = storage;
    }
    store(data) {
        const encrypted = this.encrypt(data);
        this.storage.store(encrypted);
    }
    encrypt(data) {
        return "encrypted " + data;
    }
}
class Compressed {
    constructor(storage) {
        this.storage = storage;
    }
    store(data) {
        const compressed = this.compress(data);
        this.storage.store(compressed);
    }
    compress(data) {
        return "compressed " + data;
    }
}

const Decorator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Decorator Pattern"), h("h6", { class: "grayHint" }, "- Attach additional behaviors to objects using ", h("span", { class: "blueHint" }, "wrapper (decorator)")), h("h6", { class: "grayHint" }, "- Wrapper (Decorator) \uC5D0 \uAE30\uB2A5\uC744 \uB2F4\uC544 \uAC1D\uCCB4\uC5D0 \uC6D0\uD558\uB294 \uCD94\uAC00 \uAE30\uB2A5\uC744 \uC720\uC5F0\uD558\uAC8C \uB123\uC744 \uC218 \uC788\uB294 \uC124\uACC4 \uD328\uD134\uC774\uB2E4."), h("input", { placeholder: "Type something here and save data.", ref: el => this.userInput = el }), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.save() }, "Save Data"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.saveEncrypted() }, "Save Encrypted Data"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.saveCompressed() }, "Save Compressed Data"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.saveCompressedEncrypted() }, "Save Compressed and Encrypted Data"), h("pattern-photos", { uml: "decorator-uml.png", imp: "decorator-i.png", cl: "decorator.png" })));
    }
    save() {
        const cloudStream = new CloudStorage();
        cloudStream.store(this.userInput.value);
    }
    saveEncrypted() {
        const cloudStream = new Encrypted(new CloudStorage());
        cloudStream.store(this.userInput.value);
    }
    saveCompressed() {
        const cloudStream = new Compressed(new CloudStorage());
        cloudStream.store(this.userInput.value);
    }
    saveCompressedEncrypted() {
        const cloudStream = new Compressed(new Encrypted(new CloudStorage()));
        cloudStream.store(this.userInput.value);
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Decorator as app_decorator };
