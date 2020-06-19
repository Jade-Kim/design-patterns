import { CommandService } from "./CLCommandService";
import { CLCommand } from "./CLCommand";

export class CreateTicketCommand extends CLCommand {
    order: number = 2;

    constructor(private service: CommandService, private data: Ticket){
        super();
    }

    execute(): void {
        this.service.createTicket(this.data);
    }
}

export class CreateAddressCommand extends CLCommand {
    order: number = 1;

    constructor(private service: CommandService, private data: Address){
        super();
    }

    execute(): void {
        this.service.createAddress(this.data);
    }
}

export class CloseTicketCommand extends CLCommand {
    order: number = 3;

    constructor(private service: CommandService, private data: Ticket){
        super();
    }

    execute(): void {
        this.service.closeTicket(this.data);
    }
}

export class Ticket {
    id: string;
}

export class Address {
    id: string;
}