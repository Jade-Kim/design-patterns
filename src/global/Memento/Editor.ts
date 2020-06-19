import { EditorState } from "./EditorState";

export class Editor {
    private content: string;

    public createState() {
        return new EditorState(this.content);
    }

    public restore(state: EditorState) {
        this.content = state.getContent;
    }

    public get getContent() {
        return this.content;
    }

    public set setContent(content: string) {
        this.content = content;
    }
}