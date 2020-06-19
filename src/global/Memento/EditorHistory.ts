import { EditorState } from './EditorState';

export class EditorHistory {
    private states: Array<EditorState> = [];

    public push(state: EditorState) {
        this.states.push(state);
    }

    public pop() {
        return this.states.pop();
    }
}