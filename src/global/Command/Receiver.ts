export class UserDBService {
    public addUser(): void {
        alert("Add user in DB service");
    }

    public getUser(): void {
        alert("Get user info from DB service");
    }
}

export class ShoppingService {
    public saveShoppingCart(items: any): void {
        alert("Save Shopping Cart: "+ items);
    }

    public sell(items: any): void {
        alert("Sell: "+ items);
    }

    public buy(items: any): void {
        alert("Buy "+ items);
    }
}