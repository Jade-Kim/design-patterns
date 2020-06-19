import { Tool } from "./Tool";

export class Canvas {
    private currentTool: Tool;

    public mouseDown() {
        return this.currentTool.mouseDown();
    }

    public mouseUp() {
        return this.currentTool.mouseUp();
    }

    public getCurrentTool(): Tool {
        return this.currentTool;
    }

    public setCurrentTool(currentTool: Tool) {
        this.currentTool = currentTool;
    }
}