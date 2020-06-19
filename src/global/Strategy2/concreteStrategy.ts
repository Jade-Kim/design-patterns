import { TheImage } from "./Image";
import { Compressor, Filter } from "./strategy";


// Compressors

export class JpegCompressor implements Compressor { // Concrete Strategy
    compress(image: TheImage): void{
        console.log("Compress JPEG file "+image.fileName);
    }
}

export class PngCompressor implements Compressor {
    compress(image: TheImage): void{
        console.log("Compress PNG file "+image.fileName);
    }
}

export class GifCompressor implements Compressor {
    compress(image: TheImage): void{
        console.log("Compress GIF file "+image.fileName);
    }
}

// Filters

export class BWFilter implements Filter { // Concrete Strategy
    on(image: TheImage): void{
        console.log("Filter BW applied on file "+image.fileName);
    }
}

export class SoftFilter implements Filter {
    on(image: TheImage): void{
        console.log("Filter Soft applied on file "+image.fileName);
    }
}

export class HardFilter implements Filter {
    on(image: TheImage): void{
        console.log("Filter Hard applied on file "+image.fileName);
    }
}
