import { r as registerInstance, h, H as Host } from './core-51b172a0.js';

const Photos = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null, h("div", { class: "pattern-photos" }, h("h3", null, "UML"), h("img", { src: "../../assets/" + this.uml, class: "margin20 uml" }), this.uml2 && h("img", { src: "../../assets/" + this.uml2, class: "margin20 uml" }), h("h3", null, "Implementation"), h("img", { src: "../../assets/" + this.imp, class: "margin20" }), this.imp2 && h("img", { src: "../../assets/" + this.imp2, class: "" }), h("h3", null, "Class"), h("img", { src: "../../assets/" + this.cl, class: "" }), this.cl2 && h("img", { src: "../../assets/" + this.cl2, class: "" })))));
    }
    static get style() { return ":host {\n  display: block;\n}\n\n.uml {\n  width: 100%;\n}\n\n.pattern-photos img {\n  display: block;\n}"; }
};

export { Photos as pattern_photos };
