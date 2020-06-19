import { IteratorPattern } from "./Iterator";

export class ArrayIteratorHistory {
    private data = [];

    public push(data: string) {
        this.data.push(data);
        console.log(this.data);
    }

    public pop() {
        return this.data.pop();
    }

    public createIterator(order: number = 0) {
        return new ArrayIteratorHistory.ArrayIterator(this, order);
    }

    // Concrete class inside of history class
    static ArrayIterator = class implements IteratorPattern {

        private history: ArrayIteratorHistory;
        private index: number;
        private order: number;

        constructor(history: ArrayIteratorHistory, order: number) {

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