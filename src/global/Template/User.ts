export class User {
    username: string;
    pw: string;

    constructor(username: string, pw: string){
        this.username = username;
        this.pw = pw;
    }

    public async validate(user: User) {
        console.log(user);
        // user validation logic here
        alert("validated user!");
        return true
    }
}