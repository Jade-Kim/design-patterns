import { r as registerInstance, h } from './core-51b172a0.js';

class Handler {
    constructor(next) {
        this.next = next;
    }
    handle(request) {
        if (this.doHandle(request))
            return;
        if (this.next != null)
            this.next.handle(request);
    }
}
// ** Concrete Handler
class Authenticator extends Handler {
    constructor(next) {
        super(next);
    }
    doHandle(request) {
        // authenticator logic
        let isValid = (request.getUsername() == "admin" &&
            request.getPassword() == "1234");
        alert("Authentication " + isValid);
        if (!isValid)
            return !isValid;
    }
}
class Logger extends Handler {
    constructor(next) {
        super(next);
    }
    doHandle(request) {
        // login logic
        alert("Logger " + request);
        return false;
    }
}

class WebServer {
    constructor(handler) {
        if (handler !== null)
            this.handler = handler;
    }
    handle(request) {
        this.handler.handle(request);
    }
}

class LoginRequest {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
}

const Chain = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // 1. authenticator -> 2. logger
        this.logger = new Logger(null);
        this.authenticator = new Authenticator(this.logger);
        this.server = new WebServer(this.authenticator);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Chain of Responsiblility Pattern"), h("h6", { class: "grayHint" }, "- Allows building an order of request objects"), h("h6", { class: "grayHint" }, "- \uC694\uCCAD\uC744 \uC21C\uC11C\uB300\uB85C \uCCB4\uC778\uD654 \uD558\uACE0\uC790 \uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uD328\uD134"), h("br", null), h("input", { placeholder: "Username: admin", ref: el => this.username = el }), h("input", { placeholder: "Password: 1234", ref: el => this.pw = el }), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.login() }, "Log in"), this.result, h("pattern-photos", { uml: "chain-uml.png", imp: "chain-i.png", cl: "chain-1.png", cl2: "chain-2.png" })));
    }
    login() {
        const request = new LoginRequest(this.username.value, this.pw.value);
        this.server.handle(request);
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Chain as app_chain };
