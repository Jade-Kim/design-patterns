

// Component
interface Storage {
    store(data);
}

// Concrete Component
export class CloudStorage implements Storage{
    public store(data: string) {
        alert("Storing "+ data);
    }
}

// Decorator
export class Encrypted implements Storage {
    constructor(private storage: Storage) { }

    public store(data: string){
        const encrypted = this.encrypt(data);
        this.storage.store(encrypted);
    }

    private encrypt(data: string): string {
        return "encrypted "+data;
    }
}

export class Compressed implements Storage {
    constructor(private storage: Storage) { }

    public store(data: string){
        const compressed = this.compress(data);
        this.storage.store(compressed);
    }

    private compress(data: string): string {
        return "compressed "+data;
    }
}

