import { r as registerInstance, h } from './core-51b172a0.js';

class ArrayIteratorHistory {
    constructor() {
        this.data = [];
    }
    push(data) {
        this.data.push(data);
        console.log(this.data);
    }
    pop() {
        return this.data.pop();
    }
    createIterator(order = 0) {
        return new ArrayIteratorHistory.ArrayIterator(this, order);
    }
}
// Concrete class inside of history class
ArrayIteratorHistory.ArrayIterator = class {
    constructor(history, order) {
        this.history = history;
        this.order = order;
        if (order === 0) {
            this.index = 0;
        }
        else if (order === 1) {
            this.index = this.history.data.length - 1;
        }
    }
    hasNext() {
        if (this.order === 0) {
            return this.index < this.history.data.length;
        }
        else if (this.order === 1) {
            return this.index >= 0;
        }
    }
    current() {
        return this.history.data[this.index];
    }
    next() {
        this.order === 0 ? this.index++ : this.index--;
    }
};

class FixedArrayIteratorHistory {
    constructor() {
        this.data = new Array(10).fill("");
        Object.seal(this.data);
        this.count = 0;
    }
    push(data) {
        if (this.count === this.data.length) {
            const copied = this.data.slice(1);
            copied.push(data);
            this.data = copied;
        }
        else {
            this.data[this.count++] = data;
        }
        console.log(this.data);
    }
    pop() {
        return this.data[--this.count];
    }
    createIterator(order = 0) {
        return new FixedArrayIteratorHistory.ArrayIterator(this, order);
    }
}
// Concrete class inside of history class
FixedArrayIteratorHistory.ArrayIterator = class {
    constructor(history, order) {
        this.history = history;
        this.order = order;
        if (order === 0) {
            this.index = 0;
        }
        else if (order === 1) {
            this.index = this.history.data.length - 1;
        }
    }
    hasNext() {
        if (this.order === 0) {
            return this.index < this.history.data.length;
        }
        else if (this.order === 1) {
            return this.index >= 0;
        }
    }
    current() {
        return this.history.data[this.index];
    }
    next() {
        this.order === 0 ? this.index++ : this.index--;
    }
};

const Iterator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.history = new ArrayIteratorHistory();
        this.fixedHistory = new FixedArrayIteratorHistory();
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Iterator Pattern"), h("h6", { class: "grayHint" }, "- Allows iterating over an object without exposing the object's internal structure"), h("h6", { class: "grayHint" }, "- \uAC1D\uCCB4\uC758 \uB0B4\uBD80 \uAD6C\uC870\uB97C \uB178\uCD9C\uD558\uC9C0 \uC54A\uACE0 \uAC1D\uCCB4\uB97C \uBC18\uBCF5\uD558\uB294 \uC124\uACC4 \uBC29\uBC95."), h("br", null), h("h5", null, "Example 1) Array Iterator "), h("input", { type: "text", ref: el => this.userInput1 = el, placeholder: "Type something to save on the history object." }), h("div", { class: "btnDiv" }, h("button", { class: "btn", onClick: _ => this.addToHistory() }, "Add to history"), h("button", { onClick: _ => this.iterate1ASC(), class: "btn blue" }, "ITERATE starting from the first element"), h("button", { onClick: _ => this.iterate1DESC(), class: "btn blue" }, "ITERATE starting from the last element")), h("h6", { class: "margin20" }, "Array Iterator History Result"), h("div", { ref: el => this.result1 = el, class: "margin20 resultDiv" }), h("hr", null), h("h5", null, "Example 2) Fixed Array Iterator: This history saves only the last 10 elements."), h("input", { type: "text", ref: el => this.userInput2 = el, placeholder: "Type something to save on the history object." }), h("div", { class: "btnDiv" }, h("button", { class: "btn teal darken-3", onClick: _ => this.addToFixedHistory() }, "Add to fixed history"), h("button", { onClick: _ => this.iterate2ASC(), class: "btn blue darken-3" }, "ITERATE starting from the first element"), h("button", { onClick: _ => this.iterate2DESC(), class: "btn blue darken-3" }, "ITERATE starting from the last element")), h("h6", { class: "margin20" }, "Fixed Array Iterator History Result"), h("div", { ref: el => this.result2 = el, class: "margin20 resultDiv" }), h("pattern-photos", { uml: "iterator-uml.png", imp: "iterator-i.png", cl: "iterator-1.png" })));
    }
    addToHistory() {
        this.history.push(this.userInput1.value);
        this.userInput1.value = "";
    }
    iterate1ASC() {
        const iterator = this.history.createIterator();
        while (iterator.hasNext()) {
            this.result1.innerHTML += iterator.current() + "<br/>";
            iterator.next();
        }
    }
    iterate1DESC() {
        const iterator = this.history.createIterator(1);
        while (iterator.hasNext()) {
            this.result1.innerHTML += iterator.current() + "<br/>";
            iterator.next();
        }
    }
    addToFixedHistory() {
        this.fixedHistory.push(this.userInput2.value);
        this.userInput2.value = "";
    }
    iterate2ASC() {
        const iterator = this.fixedHistory.createIterator();
        while (iterator.hasNext()) {
            this.result2.innerHTML += iterator.current() + "<br/>";
            iterator.next();
        }
    }
    iterate2DESC() {
        const iterator = this.fixedHistory.createIterator(1);
        while (iterator.hasNext()) {
            this.result2.innerHTML += iterator.current() + "<br/>";
            iterator.next();
        }
    }
    static get style() { return ".btnDiv button {\n  display: block;\n  margin: 10px;\n}"; }
};

export { Iterator as app_iterator };
