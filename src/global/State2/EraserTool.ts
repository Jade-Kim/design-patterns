import { Tool } from "./Tool";

export class EraserTool implements Tool {
    mouseDown(): string {
        console.log("mouseDown on EraserTool");
        return "mouseDown on EraserTool";
    }
    mouseUp(): string {
        console.log("mouseUp on EraserTool");
        return "mouseUp on EraserTool";
    }
    
}