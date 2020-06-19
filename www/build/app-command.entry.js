import { r as registerInstance, h } from './core-51b172a0.js';

class UserDBService {
    addUser() {
        alert("Add user in DB service");
    }
    getUser() {
        alert("Get user info from DB service");
    }
}
class ShoppingService {
    saveShoppingCart(items) {
        alert("Save Shopping Cart: " + items);
    }
    sell(items) {
        alert("Sell: " + items);
    }
    buy(items) {
        alert("Buy " + items);
    }
}

class TheCommand {
    constructor() {
        this.uid = Math.floor(Math.random() * 10000000);
    }
    getUID() {
        return "Command UID: " + this.uid;
    }
}

// User DB Service
class AddUserCommand extends TheCommand {
    constructor(service) {
        super();
        this.service = service;
    }
    execute() {
        this.service.addUser();
    }
}
class GetUserCommand extends TheCommand {
    constructor(service) {
        super();
        this.service = service;
    }
    execute() {
        this.service.getUser();
    }
}
// Shopping Service
class ShopSellCommand extends TheCommand {
    constructor(service) {
        super();
        this.service = service;
    }
    execute(items) {
        this.service.sell(items);
    }
}
class ShopBuyCommand extends TheCommand {
    constructor(service) {
        super();
        this.service = service;
    }
    execute(items) {
        this.service.buy(items);
    }
}
class SaveCartCommand extends TheCommand {
    constructor(service) {
        super();
        this.service = service;
    }
    execute(items) {
        this.service.saveShoppingCart(items);
    }
}

class Button {
    constructor() {
        this.commands = [];
    }
    executeCommand(command, args) {
        this.commands.push(command);
        command.execute(args);
    }
    get getCommands() {
        return this.commands;
    }
}

class CLCommand {
    constructor() {
        this.uid = Math.floor(Math.random() * 10000000);
        this.timestamp = new Date().getTime();
    }
    getUID() {
        return "Command UID: " + this.uid;
    }
}

class CreateTicketCommand extends CLCommand {
    constructor(service, data) {
        super();
        this.service = service;
        this.data = data;
        this.order = 2;
    }
    execute() {
        this.service.createTicket(this.data);
    }
}
class CreateAddressCommand extends CLCommand {
    constructor(service, data) {
        super();
        this.service = service;
        this.data = data;
        this.order = 1;
    }
    execute() {
        this.service.createAddress(this.data);
    }
}
class CloseTicketCommand extends CLCommand {
    constructor(service, data) {
        super();
        this.service = service;
        this.data = data;
        this.order = 3;
    }
    execute() {
        this.service.closeTicket(this.data);
    }
}
class Ticket {
}
class Address {
}

class CommandService {
    createTicket(data) {
        alert("create ticket " + data.id);
    }
    async createAddress(data) {
        alert("create address " + data.id);
    }
    async closeTicket(data) {
        alert("close ticket " + data.id);
    }
}

class CommandManager {
    constructor() {
        this.commands = [];
    }
    add(cmd) {
        this.commands.push(cmd);
    }
    async executeCommand() {
        // sort command by order
        this.commands = this.commands.sort(getOrderBy("order"));
        for (const cmd of this.commands) {
            try {
                await cmd.execute();
            }
            catch (e) {
                console.log(e);
            }
        }
    }
}
function getOrderBy(key) {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))
            return 0;
        const varA = a[key];
        const varB = b[key];
        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        }
        else if (varA < varB) {
            comparison = -1;
        }
        return comparison;
    };
}

class CanvasHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    pop() {
        return this.commands.pop();
    }
    get length() {
        return this.commands.length;
    }
}

class CanvasDocument {
    drawLine() {
        this.content = "Draw line";
    }
    drawCircle() {
        this.content = "Draw Circle";
    }
    paintBlue() {
        this.content = "Paint Blue";
    }
    paintRed() {
        this.content = "Paint Red";
    }
    get getContent() {
        return this.content;
    }
    set setContent(content) {
        this.content = content;
    }
}

class CanvasCommand {
    constructor() {
        this.uid = Math.floor(Math.random() * 10000000);
    }
    getUID() {
        return "Command UID: " + this.uid;
    }
}

class UndoableCommand extends CanvasCommand {
}

// Canvas Editor - undoable command
class DrawLineCommand extends UndoableCommand {
    constructor(doc, history) {
        super();
        this.doc = doc;
        this.history = history;
    }
    execute() {
        this.prevContent = this.doc.getContent;
        this.doc.drawLine();
        this.history.push(this);
    }
    unexecute() {
        this.doc.setContent = this.prevContent;
    }
}
class DrawCircleCommand extends UndoableCommand {
    constructor(doc, history) {
        super();
        this.doc = doc;
        this.history = history;
    }
    execute() {
        this.prevContent = this.doc.getContent;
        this.doc.drawCircle();
        this.history.push(this);
    }
    unexecute() {
        this.doc.setContent = this.prevContent;
    }
}
class PaintBlueCommand extends UndoableCommand {
    constructor(doc, history) {
        super();
        this.doc = doc;
        this.history = history;
    }
    execute() {
        this.prevContent = this.doc.getContent;
        this.doc.paintBlue();
        this.history.push(this);
    }
    unexecute() {
        this.doc.setContent = this.prevContent;
    }
}
class PaintRedCommand extends UndoableCommand {
    constructor(doc, history) {
        super();
        this.doc = doc;
        this.history = history;
    }
    execute() {
        this.prevContent = this.doc.getContent;
        this.doc.paintRed();
        this.history.push(this);
    }
    unexecute() {
        this.doc.setContent = this.prevContent;
    }
}

class UndoCommand extends CanvasCommand {
    constructor(history) {
        super();
        this.history = history;
    }
    execute() {
        this.history.length > 0 && this.history.pop().unexecute();
    }
}

const Command = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.userDBService = new UserDBService(); // Receiver
        this.shoppingService = new ShoppingService(); // Receiver
        this.button = new Button(); // Invoker
        this.canvasHistory = new CanvasHistory();
        this.doc = new CanvasDocument();
        // **** Example 3
        this.CLService = new CommandService(); // Receiver
        this.CommandManager = new CommandManager(); // Invoker
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Command Pattern"), h("h6", { class: "grayHint" }, "- Turns a request into an object and execute any operation such as delay, queue or undo."), h("h6", { class: "grayHint" }, "- \uC694\uCCAD\uC744 \uD558\uB098\uC758 \uAC1D\uCCB4\uB85C \uB9CC\uB4E4\uC5B4 \uC800\uC7A5\uD55C \uB2E4\uC74C \uC5EC\uB7EC\uAC00\uC9C0 \uC694\uCCAD\uC744 \uC2E4\uD589, \uC9C0\uC5F0, \uC21C\uC11C\uB300\uB85C \uC2E4\uD589, \uC2E4\uD589 \uCDE8\uC18C \uB4F1\uC758 \uC791\uC5C5\uC744 \uD560 \uC218 \uC788\uB2E4."), h("h5", null, "Example 1) User DB Service & Shopping Service"), h("button", { class: "btn margin20", onClick: _ => this.addUser() }, "Add User"), h("button", { class: "btn margin20", onClick: _ => this.getUser() }, "Get User Info"), h("input", { ref: el => this.items = el, type: "text", placeholder: "Type items you need to sell/buy/save." }), h("button", { class: "btn margin20 cyan", onClick: _ => this.sell() }, "Sell"), h("button", { class: "btn margin20 cyan", onClick: _ => this.buy() }, "Buy"), h("button", { class: "btn margin20 cyan", onClick: _ => this.saveCart() }, "Save Cart"), h("h5", null, "Example 2) Canvas Editor - Undo Mechanism"), h("button", { class: "btn margin20 blue", onClick: _ => this.circle() }, "Draw a circle"), h("button", { class: "btn margin20 blue", onClick: _ => this.line() }, "Draw a line"), h("button", { class: "btn margin20 blue", onClick: _ => this.red() }, "Paint red"), h("button", { class: "btn margin20 blue", onClick: _ => this.blue() }, "Paint blue"), h("button", { class: "btn margin20 red", onClick: _ => this.undo() }, "Undo"), h("div", { class: "resultDiv margin20" }, h("h6", null, "** Canvas **"), this.currentCanvas), h("h5", null, "Example 3) Add command and execute all commands at once"), h("button", { class: "btn margin20", onClick: _ => this.createTicket() }, "Create ticket"), h("button", { class: "btn margin20", onClick: _ => this.createAddress() }, "Create address"), h("button", { class: "btn margin20", onClick: _ => this.closeTicket() }, "Close ticket"), h("button", { class: "btn margin20 teal accent-2 black-text", onClick: _ => this.executeAll() }, "Execute Commands"), h("pattern-photos", { uml: "command-uml.png", imp: "command-i.png", cl: "command.png" })));
    }
    addUser() {
        const command = new AddUserCommand(this.userDBService); // Concrete Command
        this.button.executeCommand(command);
        console.log(this.button.getCommands);
    }
    getUser() {
        const command = new GetUserCommand(this.userDBService); // Concrete Command
        this.button.executeCommand(command);
        console.log(this.button.getCommands);
    }
    sell() {
        const command = new ShopSellCommand(this.shoppingService); // Concrete Command
        this.button.executeCommand(command, this.items.value);
        console.log(this.button.getCommands);
    }
    buy() {
        const command = new ShopBuyCommand(this.shoppingService); // Concrete Command
        this.button.executeCommand(command, this.items.value);
        console.log(this.button.getCommands);
    }
    saveCart() {
        const command = new SaveCartCommand(this.shoppingService); // Concrete Command
        this.button.executeCommand(command, this.items.value);
        console.log(this.button.getCommands);
    }
    circle() {
        const command = new DrawCircleCommand(this.doc, this.canvasHistory);
        command.execute();
        this.updateCanvasCommand();
    }
    line() {
        const command = new DrawLineCommand(this.doc, this.canvasHistory);
        command.execute();
        this.updateCanvasCommand();
    }
    red() {
        const command = new PaintRedCommand(this.doc, this.canvasHistory);
        command.execute();
        this.updateCanvasCommand();
    }
    blue() {
        const command = new PaintBlueCommand(this.doc, this.canvasHistory);
        command.execute();
        this.updateCanvasCommand();
    }
    undo() {
        const undoCommand = new UndoCommand(this.canvasHistory);
        undoCommand.execute();
        this.updateCanvasCommand();
    }
    updateCanvasCommand() {
        this.currentCanvas = this.doc.getContent;
    }
    createTicket() {
        const cmd = new CreateTicketCommand(this.CLService, { id: "ticket1" });
        this.CommandManager.add(cmd);
    }
    closeTicket() {
        const cmd = new CloseTicketCommand(this.CLService, { id: "ticket2" });
        this.CommandManager.add(cmd);
    }
    createAddress() {
        const cmd = new CreateAddressCommand(this.CLService, { id: "address1" });
        this.CommandManager.add(cmd);
    }
    executeAll() {
        this.CommandManager.executeCommand();
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Command as app_command };
