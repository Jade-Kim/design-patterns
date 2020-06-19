import { UndoableCommand } from "./UndoableCommand";
import { CanvasDocument } from './CanvasDocument';
import { CanvasHistory } from "./CanvasHistory";

// Canvas Editor - undoable command

export class DrawLineCommand extends UndoableCommand {
    constructor(private doc: CanvasDocument, private history: CanvasHistory) {
        super();
    }

    private prevContent: string;

    execute(): void {
        this.prevContent = this.doc.getContent;
        this.doc.drawLine();
        this.history.push(this);
    }

    unexecute(): void {
        this.doc.setContent = this.prevContent;
    }
}

export class DrawCircleCommand extends UndoableCommand {
    constructor(private doc: CanvasDocument, private history: CanvasHistory) {
        super();
    }

    private prevContent: string;

    execute(): void {
        this.prevContent = this.doc.getContent;
        this.doc.drawCircle();
        this.history.push(this);
    }

    unexecute(): void {
        this.doc.setContent = this.prevContent;
    }
}

export class PaintBlueCommand extends UndoableCommand {
    constructor(private doc: CanvasDocument, private history: CanvasHistory) {
        super();
    }

    private prevContent: string;

    execute(): void {
        this.prevContent = this.doc.getContent;
        this.doc.paintBlue();
        this.history.push(this);
    }

    unexecute(): void {
        this.doc.setContent = this.prevContent;
    }
}

export class PaintRedCommand extends UndoableCommand {
    constructor(private doc: CanvasDocument, private history: CanvasHistory) {
        super();
    }

    private prevContent: string;

    execute(): void {
        this.prevContent = this.doc.getContent;
        this.doc.paintRed();
        this.history.push(this);
    }

    unexecute(): void {
        this.doc.setContent = this.prevContent;
    }
}


