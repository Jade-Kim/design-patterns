import { r as registerInstance, h } from './core-51b172a0.js';

class Package {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

class Shipping {
    setStrategy(company) {
        this.company = company;
    }
    calculate(thePackage) {
        return this.company.calculate(thePackage);
    }
}

class Fedex {
    calculate(thePackage) {
        return thePackage.weight * 10;
    }
}
class UPS {
    calculate(thePackage) {
        return thePackage.weight * 9;
    }
}
class USPS {
    calculate(thePackage) {
        return thePackage.weight * 8;
    }
}

class TheImage {
    constructor(fileName) {
        this.fileName = fileName;
    }
}

class ImageStorage {
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
    store(image, compressor, filter) {
        compressor.compress(image);
        filter.on(image);
    }
}

// Compressors
class JpegCompressor {
    compress(image) {
        console.log("Compress JPEG file " + image.fileName);
    }
}
class PngCompressor {
    compress(image) {
        console.log("Compress PNG file " + image.fileName);
    }
}
class GifCompressor {
    compress(image) {
        console.log("Compress GIF file " + image.fileName);
    }
}
// Filters
class BWFilter {
    on(image) {
        console.log("Filter BW applied on file " + image.fileName);
    }
}
class SoftFilter {
    on(image) {
        console.log("Filter Soft applied on file " + image.fileName);
    }
}
class HardFilter {
    on(image) {
        console.log("Filter Hard applied on file " + image.fileName);
    }
}

const Strategy = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Strategy Pattern"), h("h6", { class: "grayHint" }, "- Allows you define a template operation, and set different behaviors into seperate classes"), h("h6", { class: "grayHint" }, "- \uC124\uC815\uD55C Strategy \uC5D0 \uB530\uB77C \uAC19\uC740 \uC774\uB984\uC758 \uBA54\uC18C\uB4DC\uAC00 \uB2E4\uB974\uAC8C \uC791\uB3D9\uD55C\uB2E4."), h("br", null), h("h5", null, "Example 1) Calculate shipping cost from different shipping companies "), h("div", { class: "row" }, h("div", { class: "col s4" }, h("input", { type: "text", placeholder: "From", ref: el => this.from = el })), h("div", { class: "col s4" }, h("input", { type: "text", placeholder: "To", ref: el => this.to = el })), h("div", { class: "col s4" }, h("input", { type: "number", placeholder: "Weight (lb)", ref: el => this.weight = el }))), h("button", { class: "btn", onClick: _ => this.calculate() }, "CALCULATE SHIPPING COST"), h("div", { ref: el => this.result = el, class: "resultDiv margin20" }), h("h5", null, "Example 2) Store the images that users upload "), h("input", { type: "text", placeholder: "File Name", ref: el => this.fileName = el }), h("button", { class: "btn", onClick: _ => this.upload() }, "UPLOAD PHOTO"), h("div", { ref: el => this.result2 = el, class: "resultDiv margin20" }), h("pattern-photos", { uml: "strategy-uml-2.png", uml2: "strategy-uml-1.png", imp: "strategy-i.png", cl: "strategy-1.png", cl2: "strategy-2.png" })));
    }
    calculate() {
        const from = this.from.value;
        const to = this.to.value;
        const weight = Number(this.weight.value);
        const thePackage = new Package(from, to, weight);
        const shipping = new Shipping();
        this.result.innerHTML = "";
        this.result.innerHTML += `From ${from} To ${to} <br/> Package ${weight} lb <br/><br/>`;
        shipping.setStrategy(new Fedex());
        this.result.innerHTML += "Fedex: $" + shipping.calculate(thePackage) + "<br/>";
        shipping.setStrategy(new UPS());
        this.result.innerHTML += "UPS: $" + shipping.calculate(thePackage) + "<br/>";
        shipping.setStrategy(new USPS());
        this.result.innerHTML += "USPS: $" + shipping.calculate(thePackage) + "<br/>";
    }
    upload() {
        const img = new TheImage(this.fileName.value);
        const imgStorage = new ImageStorage();
        imgStorage.store(img, new PngCompressor(), new SoftFilter());
        this.result2.innerHTML = "Check out the developer console.";
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Strategy as app_strategy };
