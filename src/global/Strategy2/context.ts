import { TheImage } from "./Image";
import { Compressor, Filter } from "./strategy";


export class ImageStorage { // Context
    // private compressor: Compressor;
    // private filter: Filter;

    // constructor(compressor: Compressor, filter: Filter){
    //     this.compressor = compressor;
    //     this.filter = filter;
    // }

    // public setCompressor(compressor: Compressor){
    //     this.compressor = compressor;
    // }

    // public setFilter(filter: Filter){
    //     this.filter = filter;
    // }

    public store(image: TheImage, compressor: Compressor, filter: Filter): void {
        compressor.compress(image);
        filter.on(image);
    }
}