
export abstract class TheCommand {
    protected uid = Math.floor(Math.random() * 10000000);

    public getUID(): string {
        return "Command UID: "+ this.uid;
    }

    abstract execute(args: any): void;
}