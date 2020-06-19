import { r as registerInstance, h } from './core-51b172a0.js';

// Client
class Point {
    constructor(x, y, icon) {
        this.x = x;
        this.y = y;
        this.icon = icon;
    }
    draw() {
        alert(`${this.x} ${this.y} ${this.icon.getType()}`);
    }
}
// Client
class PointService {
    constructor(iconFactory) {
        this.iconFactory = iconFactory;
    }
    getPoints() {
        let points = [];
        const point = new Point(1, 1, this.iconFactory.getPointIcon(PointType.CAFE));
        points.push(point);
        return points;
    }
}
// Flyweight
class PointIcon {
    constructor(type, icon) {
        this.type = type;
        this.icon = icon;
        console.log(this.icon);
    }
    getType() {
        return this.type;
    }
}
var PointType;
(function (PointType) {
    PointType["HOSPITAL"] = "HOSPITAL";
    PointType["RESTAURANT"] = "RESTAURANT";
    PointType["CAFE"] = "CAFE";
})(PointType || (PointType = {}));
// Flyweight Factory
class PointIconFactory {
    constructor() {
        //private icons: Partial<PointType & PointIcon> = {};
        this.icons = {};
    }
    getPointIcon(type) {
        if (!(this.icons[type])) {
            const icon = new PointIcon(type, null);
            this.icons[type] = icon;
        }
        return this.icons[type];
    }
}

const Flyweight = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Flyweight Pattern"), h("h6", { class: "grayHint" }, "- Allows sharing common state between multiple objects "), h("h6", { class: "grayHint" }, "- \uAC01 \uAC1D\uCCB4\uC5D0 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD558\uC9C0 \uC54A\uACE0 \uC5EC\uB7EC \uAC1D\uCCB4 \uC0AC\uC774\uC758 \uACF5\uD1B5\uB41C state \uB97C \uACF5\uC720\uD558\uC5EC RAM \uBA54\uBAA8\uB9AC\uB97C \uC801\uAC8C \uCC28\uC9C0\uD558\uB3C4\uB85D \uC124\uACC4\uD558\uB294 \uD328\uD134\uC774\uB2E4."), h("button", { class: "btn", onClick: _ => this.draw() }, "Draw"), h("pattern-photos", { uml: "flyweight-uml.png", imp: "flyweight-i.png", cl: "flyweight-1.png", cl2: "flyweight-2.png" })));
    }
    draw() {
        let service = new PointService(new PointIconFactory());
        for (const point of service.getPoints()) {
            point.draw();
        }
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Flyweight as app_flyweight };
