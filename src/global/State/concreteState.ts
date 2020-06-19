import { MusicPlayerState } from "./state";

export class PowerOn implements MusicPlayerState {
    pressedPower(): boolean {
        return false;
    }

    pressedPlay(): string {
        return "Playing...";
    }

    pressedPause(): string {
        return "Pause!";
    }
}

export class PowerOff implements MusicPlayerState {
    pressedPower(): boolean {
        return true;
    }

    pressedPlay(): string {
        return "";
    }

    pressedPause(): string {
        return "";
    }
}

export class Playing implements MusicPlayerState {
    pressedPower(): boolean {
        return false;
    }

    pressedPlay(): string {
        return "Playing...";
    }

    pressedPause(): string {
        return "Pause!";
    }
}

export class Paused implements MusicPlayerState {
    pressedPower(): boolean {
        return false;
    }

    pressedPlay(): string {
        return "Playing...";
    }

    pressedPause(): string {
        return "Pause!";
    }
}