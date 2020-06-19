import { User } from "./User";

export abstract class Task {
    private user: User;

    constructor(user: User){
        this.user = user;
    }

    public async execute() {
        try {
            let res = await this.user.validate(this.user);
            
            if (res){
                this.beforeSave();
                this.save();
                this.afterSave();
            } else {
                console.log("user validate failed.")
            }

        } catch {
            console.log("user validate failed.")
            return false;
        }
    }

    protected abstract beforeSave(): void;
    protected abstract save(): void;
    protected abstract afterSave(): void;
}