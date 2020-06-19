export class Member {
    constructor(name: string){
        this.name = name;
    }

    name: string;
    chatroom = null;
    //message: string;
    
    send(message: string, toMember: Member){
        this.chatroom.send(message, this, toMember);
    }

    receive(message: string, fromMember: Member){
        console.log(fromMember.name+" to "+this.name+": "+message);
        //this.message = fromMember.name+" to "+this.name+": "+message;
    }
}

export class ChatroomMediator {
    members = {};

    addMember(member: Member){
        this.members[member.name] = member;
        member.chatroom = this;
    }

    send(message: string, fromMember: Member, toMember: Member) {
        toMember.receive(message, fromMember);
    }
}