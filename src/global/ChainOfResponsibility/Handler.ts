import { LoginRequest } from "./LoginRequest";

export abstract class Handler {
    private next: Handler;

    constructor(next: Handler) {
        this.next = next;
    }

    public handle(request: LoginRequest) {
        if (this.doHandle(request))
            return;

        if (this.next != null)
            this.next.handle(request);
    }

    public abstract doHandle(request: LoginRequest);
}


// ** Concrete Handler

export class Authenticator extends Handler {
    constructor(next: Handler){
        super(next)
    }

    error: string;

    public doHandle(request: LoginRequest): boolean {
        // authenticator logic
        let isValid = (request.getUsername() == "admin" &&
                        request.getPassword() == "1234");
        
        alert("Authentication "+isValid);
        
        if (!isValid)
            

        return !isValid;
    }
}

export class Logger extends Handler {
    constructor(next: Handler){
        super(next)
    }

    public doHandle(request: LoginRequest): boolean {
        // login logic
        
        alert("Logger "+request);
        return false;
    }
}