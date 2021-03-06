import { r as registerInstance, h } from './core-51b172a0.js';

class Task {
    constructor(user) {
        this.user = user;
    }
    async execute() {
        try {
            let res = await this.user.validate(this.user);
            if (res) {
                this.beforeSave();
                this.save();
                this.afterSave();
            }
            else {
                console.log("user validate failed.");
            }
        }
        catch (_a) {
            console.log("user validate failed.");
            return false;
        }
    }
}

class SaveUserInfo extends Task {
    beforeSave() {
        alert("Some Logic here Before Save User Info");
    }
    save() {
        alert("User Info Saved!");
    }
    afterSave() {
        alert("Some Logic here After Save User Info");
    }
}
class SaveBlogPost extends Task {
    constructor(user, content) {
        super(user);
        this.content = content;
    }
    beforeSave() {
        alert("Some Logic here Before Save Blog Post");
    }
    save() {
        alert("Blog Post Saved! Content: " + this.content);
    }
    afterSave() {
        alert("Some Logic here After Save Blog Post");
    }
}

class User {
    constructor(username, pw) {
        this.username = username;
        this.pw = pw;
    }
    async validate(user) {
        console.log(user);
        // user validation logic here
        alert("validated user!");
        return true;
    }
}

const Template = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Template Method Pattern"), h("h6", { class: "grayHint" }, "- Abstract Class draws a blueprint of how the class will be structured. The template method will be implemented for every concrete classes and primitive operation 1 & 2 are abstract methods called hooks. The concrete sub classes will be inherited from abstract class and should implement the hooks."), h("h6", { class: "grayHint" }, "- \uD15C\uD50C\uB9BF \uBA54\uC18C\uB4DC\uB294 \uD074\uB798\uC2A4\uC758 Structure, \uD070 \uADF8\uB9BC\uC744 \uBBF8\uB9AC \uADF8\uB824\uB193\uACE0 \uC138\uBD80 \uC0AC\uD56D Hooks \uC740 Sub-class \uC5D0\uC11C \uC2E4\uC81C\uB85C \uC2E4\uD589\uB420 \uC218 \uC788\uB3C4\uB85D \uD55C\uB2E4. \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC9E4 \uB54C \uB9CE\uC774 \uC0AC\uC6A9\uB418\uB294 \uD328\uD134.", h("br", null), "\uD56D\uC0C1 \uAC19\uC740 \uB0B4\uC6A9\uC744 \uC2E4\uD589\uD558\uB294 \uBA54\uC18C\uB4DC\uC640 \uC0C1\uD669\uC5D0 \uB530\uB77C(\uC720\uC800\uC5D0 \uB530\uB77C) \uC870\uAE08 \uB2E4\uB978 \uB0B4\uC6A9\uC744 \uC2E4\uD589\uD558\uB294 \uBA54\uC18C\uB4DC\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4."), h("br", null), h("input", { type: "text", ref: el => this.username = el, placeholder: "user name" }), h("input", { type: "text", ref: el => this.pw = el, placeholder: "password" }), h("input", { type: "text", ref: el => this.blog = el, placeholder: "blog post content" }), h("button", { class: "btn margin20", onClick: _ => this.saveUserInfo() }, "Save User Info"), h("button", { class: "btn margin20", onClick: _ => this.saveBlogPost() }, "Save Blog Info"), h("pattern-photos", { uml: "templateMethod-uml.png", imp: "templateMethod-i.png", cl: "templateMethod-1.png", cl2: "templateMethod-2.png" })));
    }
    saveUserInfo() {
        const user = new User(this.username.value, this.pw.value);
        const task = new SaveUserInfo(user);
        task.execute();
    }
    saveBlogPost() {
        const user = new User(this.username.value, this.pw.value);
        const task = new SaveBlogPost(user, this.blog.value);
        task.execute();
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Template as app_template };
