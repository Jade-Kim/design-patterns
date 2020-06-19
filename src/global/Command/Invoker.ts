import { TheCommand } from "./Command";

export class Button {
    private commands: TheCommand[] = [];

    public executeCommand(command: TheCommand, args?: any) {
        this.commands.push(command);
        command.execute(args);
    }

    public get getCommands() {
        return this.commands;
    }
}


