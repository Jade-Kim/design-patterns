// Facade
export class NotificationService {
    public send(message: string, target: string) {
        const server = new NotificationServer();
        const connection = server.connect("ip address here");
        const authToken = server.authenticate("ID", "KEY");
        server.send(authToken, new Message(message), target);
        connection.disconnect();
    }
}

// Subsystem classes
class NotificationServer {
    public connect(ipAddress: string): Connection {
        alert("Connected to the Notification Server "+ipAddress);
        return new Connection();
    }

    public authenticate(id: string, key: string): AuthToken {
        alert("Authenticated! "+id+" "+key)
        return new AuthToken();
    }

    public send(authToken: AuthToken, message: Message, target: string): void{
        alert("Send message: "+message.content+" to "+target+" auth: "+authToken);
    }
}

class Connection {
    public disconnect() {
        alert("Disconnected!");
    }
}

class AuthToken {

}

class Message {
    constructor(public content: string){

    }

}

