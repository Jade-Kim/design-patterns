import { IteratorPattern } from "./Iterator";

export class FixedArrayIteratorHistory {
    private data = new Array(10).fill("");
    private count: number;

    constructor() {
        Object.seal(this.data);
        this.count = 0;
    }

    public push(data: string) {
  
        if (this.count === this.data.length){
            const copied = this.data.slice(1);
            copied.push(data);
            this.data = copied;
        } else {
            this.data[this.count++] = data;
        }

        console.log(this.data);
    }

    public pop() {
        return this.data[--this.count];
    }

    public createIterator(order: number = 0) {
        return new FixedArrayIteratorHistory.ArrayIterator(this, order);
    }

    // Concrete class inside of history class
    static ArrayIterator = class implements IteratorPattern {

        private history: FixedArrayIteratorHistory;
        private index: number;
        private order: number;

        constructor(history: FixedArrayIteratorHistory, order: number) {

            this.history = history;
            this.order = order;

            if (order === 0) {
                this.index = 0;
            } else if (order === 1) {
                this.index = this.history.data.length - 1;
            }
        }

        hasNext(): boolean {
            if (this.order === 0){
                return this.index < this.history.data.length;
            } else if (this.order === 1){
                return this.index >= 0;
            }
        }

        current(): string {
            return this.history.data[this.index];
        }

        next(): void {
            this.order === 0 ? this.index++ : this.index --;
        }

    }
}