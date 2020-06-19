import { CanvasCommand } from "./Command";
import { CanvasHistory } from './CanvasHistory';

export class UndoCommand extends CanvasCommand {

    constructor(private history: CanvasHistory) {
        super();
    }
    
    public execute(): void {
        this.history.length > 0 && this.history.pop().unexecute();
    }
}