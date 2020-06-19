import { Handler } from "./Handler";
import { LoginRequest } from "./LoginRequest";

export class WebServer {
    private handler: Handler;

    constructor(handler: Handler){
        if (handler !== null)
            this.handler = handler;
    }

    public handle(request: LoginRequest) {
        this.handler.handle(request);
    }
}