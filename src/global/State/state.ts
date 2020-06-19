export interface MusicPlayerState { // What users can do
    pressedPower(): boolean;
    pressedPlay(): string;
    pressedPause(): string;
}