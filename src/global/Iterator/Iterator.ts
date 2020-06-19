export interface IteratorPattern {
    hasNext(): boolean;
    current(): string;
    next(): void;
}