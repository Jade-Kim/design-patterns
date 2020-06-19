import { CLCommand } from "./CLCommand";


export class CommandManager {
    private commands: CLCommand[] = [];

    public add(cmd: CLCommand){
        this.commands.push(cmd);
    }

    public async executeCommand(){

        // sort command by order
        this.commands = this.commands.sort(getOrderBy("order"));

        for (const cmd of this.commands) {
            try {
                await cmd.execute();
            } catch (e) {
                console.log(e);
            }
        }
    }
}

function getOrderBy(key: string) {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

        const varA = a[key];
        const varB = b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return comparison
    };
}