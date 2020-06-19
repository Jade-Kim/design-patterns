import { TheCommand } from './Command';
import { UserDBService, ShoppingService } from './Receiver';

// User DB Service

export class AddUserCommand extends TheCommand {
    constructor(private service: UserDBService) {
        super();
    }

    execute(): void {
        this.service.addUser();
    }
}

export class GetUserCommand extends TheCommand {
    constructor(private service: UserDBService) {
        super();
    }

    execute(): void {
        this.service.getUser();
    }
}


// Shopping Service

export class ShopSellCommand extends TheCommand {
    constructor(private service: ShoppingService) {
        super();
    }

    execute(items: any): void {
        this.service.sell(items);
    }
}

export class ShopBuyCommand extends TheCommand {
    constructor(private service: ShoppingService) {
        super();
    }

    execute(items: any): void {
        this.service.buy(items);
    }
}

export class SaveCartCommand extends TheCommand {
    constructor(private service: ShoppingService) {
        super();
    }

    execute(items: any): void {
        this.service.saveShoppingCart(items);
    }
}
