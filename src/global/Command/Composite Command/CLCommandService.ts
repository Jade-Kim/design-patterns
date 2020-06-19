import { Ticket, Address } from "./CLCommands";

export class CommandService {
    public  createTicket(data: Ticket) {
        alert("create ticket "+data.id);
    }

    public async createAddress(data: Address) { 
        alert("create address "+data.id);
    }

    public async closeTicket(data: Ticket) {
        alert("close ticket "+data.id);
    }
}