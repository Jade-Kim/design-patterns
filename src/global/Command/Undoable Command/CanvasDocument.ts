export class CanvasDocument {
    private content: string;

    public drawLine(): void {
        this.content = "Draw line";
    }

    public drawCircle(): void {
        this.content = "Draw Circle";
    }

    public paintBlue(): void {
        this.content = "Paint Blue";
    }

    public paintRed(): void {
        this.content = "Paint Red";
    }

    public get getContent() {
        return this.content;
    }

    public set setContent(content: string){
        this.content = content;
    }
}