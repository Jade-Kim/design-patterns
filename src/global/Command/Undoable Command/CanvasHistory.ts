import { UndoableCommand } from "./UndoableCommand";

export class CanvasHistory {
    private commands: UndoableCommand[] = [];

    public push(command: UndoableCommand) {
        this.commands.push(command);
    }

    public pop(): UndoableCommand {
        return this.commands.pop();
    }

    public get length(): number {
        return this.commands.length;
    }
}