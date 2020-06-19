import { r as registerInstance, h } from './core-51b172a0.js';

class EditorState {
    constructor(content) {
        this.content = content;
    }
    get getContent() {
        return this.content;
    }
}

class Editor {
    createState() {
        return new EditorState(this.content);
    }
    restore(state) {
        state ? this.content = state.getContent : this.content = null;
    }
    get getContent() {
        return this.content;
    }
    set setContent(content) {
        this.content = content;
    }
}

class EditorHistory {
    constructor() {
        this.states = [];
    }
    push(state) {
        this.states.push(state);
    }
    pop() {
        return this.states.pop();
    }
}

const Memento = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editor = new Editor();
        this.history = new EditorHistory();
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Memento Pattern"), h("h6", { class: "grayHint" }, "- Memento Pattern implements ", h("span", { class: "blueHint" }, "'undo'"), " mechanisms."), h("h6", { class: "grayHint" }, "- \uBA54\uBA58\uD1A0 \uD398\uD134\uC740 ", h("span", { class: "blueHint" }, "'\uC2E4\uD589 \uCDE8\uC18C'"), " \uBA54\uCEE4\uB2C8\uC998\uC744 \uC2E4\uD589\uD55C\uB2E4."), h("input", { placeholder: "Type something here and set content several times then click undo button.", ref: el => this.userInput = el }), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.setContent() }, "Set Content"), h("button", { class: "waves-effect waves-light btn-large pink", onClick: () => this.undo() }, "Undo"), h("div", { id: "mementoNote", ref: el => this.editorResult = el, class: "resultDiv" }), h("pattern-photos", { uml: "memento-uml.png", imp: "memento-i.png", cl: "memento.png" })));
    }
    setContent() {
        const state = this.editor.createState();
        this.history.push(state);
        this.editor.setContent = this.userInput.value;
        console.log(this.history);
        this.editorResult.innerHTML = this.userInput.value;
        this.userInput.value = "";
    }
    undo() {
        this.editor.restore(this.history.pop());
        const previousContent = this.editor.getContent;
        !previousContent
            ? this.editorResult.innerHTML = ""
            : this.editorResult.innerHTML = previousContent;
    }
    static get style() { return ":host {\n  display: block;\n}\n\n#mementoNote {\n  border: 3px silver solid;\n  border-radius: 5px;\n  width: 100%;\n  height: 100px;\n  font-size: 3.0rem;\n  padding: 20px;\n  margin-bottom: 20px;\n}"; }
};

export { Memento as app_memento };
