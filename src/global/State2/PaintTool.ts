import { Tool } from "./Tool";

export class PaintTool implements Tool {
    mouseDown(): string {
        console.log("mouseDown on PaintTool");
        return "mouseDown on PaintTool";
    }
    mouseUp(): string {
        console.log("mouseUp on PaintTool");
        return "mouseUp on PaintTool";
    }
    
}