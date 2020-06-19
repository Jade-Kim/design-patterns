export class LoginRequest {
    private username: string;
    private password: string;

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    public getUsername(){
        return this.username;
    }

    public getPassword(){
        return this.password;
    }
}

