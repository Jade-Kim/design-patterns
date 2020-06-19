import { CanvasCommand } from "./Command";

export abstract class UndoableCommand extends CanvasCommand {
    abstract unexecute(): void;
}