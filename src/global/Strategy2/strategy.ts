import { TheImage } from "./Image";

export interface Compressor { // Strategy
    compress(image: TheImage): void;
}

export interface Filter { // Strategy
    on(image: TheImage): void;
}