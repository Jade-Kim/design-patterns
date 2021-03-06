import { r as registerInstance, h } from './core-51b172a0.js';

class ImageView {
    constructor(image) {
        this.image = image;
    }
    apply(filter) {
        filter.apply(this.image);
    }
}
class Image {
}
// Adapter - Composition
class AdaptThirdPartyFilter {
    constructor(thirdPartyFilter) {
        this.thirdPartyFilter = thirdPartyFilter;
    }
    apply(image) {
        this.thirdPartyFilter.init();
        this.thirdPartyFilter.render(image);
    }
}
// 3rd party library
class thirdPartyFilter {
    init() {
    }
    render(image) {
        console.log(image);
        alert("third party filter applied to image ");
    }
}
// Adapter - Inheritance
class thirdPartyImageFilter2 extends thirdPartyFilter {
    apply(image) {
        this.init();
        this.render(image);
    }
}

const Adapter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Adapter Pattern"), h("h6", { class: "grayHint" }, "- Allows objects with incompatible interfaces to ", h("span", { class: "blueHint" }, "collaborate interfaces = Adapter"), " that clients expect"), h("h6", { class: "grayHint" }, "- \uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC/\uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 ", h("span", { class: "blueHint" }, "\uC18C\uD1B5\uD560 \uC218 \uC788\uB294 \uC778\uD130\uD398\uC774\uC2A4 = \uC5B4\uB311\uD130"), " \uB97C \uB9CC\uB4E4\uC5B4 \uD638\uD658\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D \uD558\uB294 \uC124\uACC4 \uBC29\uC2DD\uC774\uB2E4."), h("p", null, "\uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC774\uBBF8\uC9C0 \uD544\uD130\uB97C client \uC18C\uC2A4 \uCF54\uB4DC\uC5D0 \uC801\uC6A9\uD558\uAE30 \uC704\uD574 AdaptThirdPartyFilter \uD074\uB798\uC2A4\uC640 \uC18C\uD1B5\uD55C\uB2E4."), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.applyFilter() }, "Apply Image Filter"), h("pattern-photos", { uml: "adapter-uml.png", imp: "adapter-i.png", cl: "adapter.png" })));
    }
    applyFilter() {
        var imageView = new ImageView(new Image());
        imageView.apply(new AdaptThirdPartyFilter(new thirdPartyFilter()));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Adapter as app_adapter };
