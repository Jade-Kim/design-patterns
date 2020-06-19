import { r as registerInstance, h, H as Host } from './core-51b172a0.js';

class Member {
    constructor(name) {
        this.chatroom = null;
        this.name = name;
    }
    //message: string;
    send(message, toMember) {
        this.chatroom.send(message, this, toMember);
    }
    receive(message, fromMember) {
        console.log(fromMember.name + " to " + this.name + ": " + message);
        //this.message = fromMember.name+" to "+this.name+": "+message;
    }
}
class ChatroomMediator {
    constructor() {
        this.members = {};
    }
    addMember(member) {
        this.members[member.name] = member;
        member.chatroom = this;
    }
    send(message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    }
}

const Mediator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chat = new ChatroomMediator();
        this.jade = new Member("Jade");
        this.frank = new Member("Frank");
    }
    render() {
        return (h(Host, null, h("slot", null, h("h5", null, "Chatroom #1"), h("input", { type: "text", placeholder: "Jade's Message to Frank", ref: el => this.messageToFrank = el }), h("button", { onClick: _ => this.sendMessage() }, "SEND"), h("p", null, this.message))));
    }
    componentDidLoad() {
        this.chat.addMember(this.jade);
        this.chat.addMember(this.frank);
    }
    sendMessage() {
        this.jade.send(this.messageToFrank.value, this.frank);
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Mediator as app_mediator };
