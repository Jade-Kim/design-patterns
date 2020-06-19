export class EditorState {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public get getContent() {
        return this.content;
    }
}