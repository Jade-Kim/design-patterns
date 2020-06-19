import { Tool } from "./Tool";

export class PencilTool implements Tool {
    mouseDown(): string {
        console.log("mouseDown on PencilTool");
        return "mouseDown on PencilTool";
    }
    mouseUp(): string {
        console.log("mouseUp on PencilTool");
        return "mouseUp on PencilTool";
    }
    
}