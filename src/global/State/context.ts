import { MusicPlayerState } from "./state";

export class MusicPlayer { // Context
    private currentState: MusicPlayerState; 

    public pressedPower() {
        this.currentState.pressedPower();
    }

    public pressedPlay() {
        this.currentState.pressedPlay();
    }

    public pressedPause() {
        this.currentState.pressedPause();
    }

    public get getState(): MusicPlayerState {
        return this.currentState;
    }

    public set setState(state: MusicPlayerState) {
        this.currentState = state;
    }
}