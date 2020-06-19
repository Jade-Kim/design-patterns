import { r as registerInstance, h } from './core-51b172a0.js';

// Facade
class NotificationService {
    send(message, target) {
        const server = new NotificationServer();
        const connection = server.connect("ip address here");
        const authToken = server.authenticate("ID", "KEY");
        server.send(authToken, new Message(message), target);
        connection.disconnect();
    }
}
// Subsystem classes
class NotificationServer {
    connect(ipAddress) {
        alert("Connected to the Notification Server " + ipAddress);
        return new Connection();
    }
    authenticate(id, key) {
        alert("Authenticated! " + id + " " + key);
        return new AuthToken();
    }
    send(authToken, message, target) {
        alert("Send message: " + message.content + " to " + target + " auth: " + authToken);
    }
}
class Connection {
    disconnect() {
        alert("Disconnected!");
    }
}
class AuthToken {
}
class Message {
    constructor(content) {
        this.content = content;
    }
}

const Facade = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Facade Pattern"), h("h6", { class: "grayHint" }, "- Facade Pattern provides a simplified, higher-level ", h("span", { class: "blueHint" }, "interface"), " to a complex library/framework/class."), h("h6", { class: "grayHint" }, "- Client \uAC00 \uBCF5\uC7A1\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC \uB610\uB294 \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uC9C1\uC811\uC801\uC73C\uB85C \uC18C\uD1B5\uD558\uB294 \uB300\uC2E0\uC5D0 Facade \uB77C\uB294 \uAC04\uB2E8\uD55C \uC0C1\uC704 ", h("span", { class: "blueHint" }, " \uC778\uD130\uD398\uC774\uC2A4"), " \uC640 \uC18C\uD1B5\uD558\uC5EC \uBCF5\uC7A1\uD568\uC744 \uC904\uC774\uB294 \uC124\uACC4 \uBC29\uC2DD\uC774\uB2E4."), h("h5", null, "Send a notification message App"), h("input", { placeholder: "Message", ref: el => this.message = el }), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.send() }, "Send"), h("pattern-photos", { uml: "facade-uml.png", imp: "facade-i.png", cl: "facade.png" })));
    }
    send() {
        // Client code 가 굉장히 간단하다.
        const service = new NotificationService();
        service.send(this.message.value, "target");
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Facade as app_facade };
