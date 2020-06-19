import { r as registerInstance, h } from './core-51b172a0.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("header", null, h("a", { href: "/", class: "btn-floating grey", id: "backBtn" }, h("i", { class: "material-icons" }, "home")), h("h1", null, "Jade's Design Patterns")), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'app-home', exact: true }), h("stencil-route", { url: '/singleton', component: 'app-singleton' }), h("stencil-route", { url: '/factory', component: 'app-factory' }), h("stencil-route", { url: '/adapter', component: 'app-adapter' }), h("stencil-route", { url: '/bridge', component: 'app-bridge' }), h("stencil-route", { url: '/composite', component: 'app-composite' }), h("stencil-route", { url: '/decorator', component: 'app-decorator' }), h("stencil-route", { url: '/facade', component: 'app-facade' }), h("stencil-route", { url: '/flyweight', component: 'app-flyweight' }), h("stencil-route", { url: '/proxy', component: 'app-proxy' }), h("stencil-route", { url: '/memento', component: 'app-memento' }), h("stencil-route", { url: '/state', component: 'app-state' }), h("stencil-route", { url: '/strategy', component: 'app-strategy' }), h("stencil-route", { url: '/iterator', component: 'app-iterator' }), h("stencil-route", { url: '/observer', component: 'app-observer' }), h("stencil-route", { url: '/mediator', component: 'app-mediator' }), h("stencil-route", { url: '/template', component: 'app-template' }), h("stencil-route", { url: '/command', component: 'app-command' }), h("stencil-route", { url: '/chain', component: 'app-chain' }))))));
    }
    static get style() { return "header {\n  background: #5851ff;\n  color: white;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nheader h1 {\n  font-size: 2.0rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n  margin: 20px !important;\n}\n\n#backBtn {\n  position: absolute;\n  left: 20px;\n}"; }
};

export { AppRoot as app_root };
