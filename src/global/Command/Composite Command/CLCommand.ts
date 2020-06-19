
export abstract class CLCommand {
    protected uid = Math.floor(Math.random() * 10000000);
    protected timestamp = new Date().getTime();

    public getUID(): string {
        return "Command UID: "+ this.uid;
    }

    abstract execute(): void;
    abstract order: number;
}