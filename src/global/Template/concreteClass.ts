import { Task } from "./AbstractClass";
import { User } from "./User";

export class SaveUserInfo extends Task {
    protected beforeSave(): void {
        alert("Some Logic here Before Save User Info");
    }

    protected save(): void {
        alert("User Info Saved!");
    }

    protected afterSave(): void {
        alert("Some Logic here After Save User Info");
    }
}

export class SaveBlogPost extends Task {
    content: string;

    constructor(user: User, content: string){
        super(user);
        this.content = content;
    }

    protected beforeSave(): void {
        alert("Some Logic here Before Save Blog Post");
    }

    protected save(): void {
        alert("Blog Post Saved! Content: "+this.content);
    }

    protected afterSave(): void {
        alert("Some Logic here After Save Blog Post");
    }
}