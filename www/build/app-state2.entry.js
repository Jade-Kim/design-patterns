import { r as registerInstance, h } from './core-51b172a0.js';

class Canvas {
    mouseDown() {
        return this.currentTool.mouseDown();
    }
    mouseUp() {
        return this.currentTool.mouseUp();
    }
    getCurrentTool() {
        return this.currentTool;
    }
    setCurrentTool(currentTool) {
        this.currentTool = currentTool;
    }
}

class PaintTool {
    mouseDown() {
        console.log("mouseDown on PaintTool");
        return "mouseDown on PaintTool";
    }
    mouseUp() {
        console.log("mouseUp on PaintTool");
        return "mouseUp on PaintTool";
    }
}

class EraserTool {
    mouseDown() {
        console.log("mouseDown on EraserTool");
        return "mouseDown on EraserTool";
    }
    mouseUp() {
        console.log("mouseUp on EraserTool");
        return "mouseUp on EraserTool";
    }
}

class PencilTool {
    mouseDown() {
        console.log("mouseDown on PencilTool");
        return "mouseDown on PencilTool";
    }
    mouseUp() {
        console.log("mouseUp on PencilTool");
        return "mouseUp on PencilTool";
    }
}

const StatePattern2 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.canvas = new Canvas;
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "State Pattern"), h("h5", null, "Select tool"), h("button", { class: "btn-large", onClick: () => this.setPaintTool() }, "Paint Tool"), h("button", { class: "btn-large", onClick: () => this.setEraserTool() }, "Eraser Tool"), h("button", { class: "btn-large", onClick: () => this.setPencilTool() }, "Pencil Tool"), h("h5", null, "Draw in the canvas"), h("div", { ref: el => this.stateCanvas = el, id: "stateCanvas", onMouseDown: _ => this.onMouseDown(), onMouseUp: _ => this.onMouseUp() }, "Canvas"), h("h5", null, "What's going on in the canvas"), h("div", { ref: el => this.result = el })));
    }
    setPaintTool() { this.canvas.setCurrentTool(new PaintTool); }
    setEraserTool() { this.canvas.setCurrentTool(new EraserTool); }
    setPencilTool() { this.canvas.setCurrentTool(new PencilTool); }
    onMouseDown() {
        const tool = this.canvas.getCurrentTool();
        if (tool) {
            const result = this.canvas.mouseDown();
            this.result.innerHTML = result;
        }
        else {
            alert("Please select tool.");
        }
    }
    onMouseUp() {
        const tool = this.canvas.getCurrentTool();
        if (tool) {
            const result = this.canvas.mouseUp();
            this.result.innerHTML = result;
        }
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { StatePattern2 as app_state2 };
