import { r as registerInstance, h } from './core-51b172a0.js';

// 이전에 불러왔던 API 데이터 값을 proxy cache object 에 저장해두어서 매번 API 콜을 부르지 않고 cache 에 저장된 값을 불러올 수 있다
// External API Service
class CryptoCurrencyAPI {
    getValueFromAPI(coin) {
        alert("Calling External API...");
        switch (coin) {
            case "Bitcoin":
                return "Bitcoin: $1,000";
            case "Ethereum":
                return "Ethereum: $500";
            case "Litecoin":
                return "Litecoin: $300";
        }
    }
}
class CryptoCurrencyProxy {
    constructor() {
        this.api = new CryptoCurrencyAPI();
        this.cache = {};
    }
    getValue(coin) {
        if (this.cache[coin] == null) {
            this.cache[coin] = this.api.getValueFromAPI(coin);
        }
        else {
            alert("Since the value is already in cache, I don't need to call external API this time!");
        }
        alert(this.cache[coin]);
        return this.cache[coin];
    }
}

// Proxy
class MusicProxy {
    constructor(fileName) {
        this.fileName = fileName;
    }
    play() {
        if (this.myMusic == null) {
            this.myMusic = new MyMusic(this.fileName);
        }
        else {
            alert("No need to download " + this.fileName);
        }
        this.myMusic.play();
    }
    getFileName() {
        return this.fileName;
    }
}
// Concrete Service
class MyMusic {
    constructor(fileName) {
        this.fileName = fileName;
        this.download();
    }
    download() {
        alert("downloading " + this.fileName);
    }
    play() {
        alert("Play " + this.fileName);
    }
    getFileName() {
        return this.fileName;
    }
}
// Client
class MusicLibrary {
    constructor() {
        this.musicLibrary = {};
    }
    add(music) {
        const fileName = music.getFileName();
        this.musicLibrary[fileName] = music;
    }
    play(fileName) {
        this.musicLibrary[fileName].play();
    }
}

const Proxy = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.musicLibrary = new MusicLibrary();
        this.fileNames = ["A", "B", "C"];
        this.proxy = new CryptoCurrencyProxy();
    }
    render() {
        return (h("div", { class: "margin20" }, h("h3", null, "Proxy Pattern"), h("h6", { class: "grayHint" }, "- Allows providing a substitue or placeholder for another object. The proxy object controls all the access of the original objects and allows you to add additional request either before or after of the original behavior"), h("h6", { class: "grayHint" }, "- \uD0C0\uAC9F \uAC1D\uCCB4\uB97C \uC9C1\uC811 \uC2E4\uD589\uD558\uAE30 \uC804\uC5D0 \uD504\uB85D\uC2DC \uAC1D\uCCB4\uAC00 \uD0C0\uAC9F \uAC1D\uCCB4\uC758 \uC694\uCCAD\uC744 \uAD00\uB9AC\uD55C\uB2E4. \uD0C0\uAC9F \uC694\uCCAD \uC804\uD6C4\uB85C \uCD94\uAC00\uC801\uC778 \uD568\uC218\uB97C \uC2E4\uD589\uD558\uB294 \uD328\uD134\uC744 \uB123\uC744 \uC218 \uC788\uB2E4."), h("h5", { class: "margin20" }, "Example 1: Web Music Player"), h("h6", { class: "grayHint" }, "- \uD544\uC694\uD55C \uC74C\uC545\uB9CC \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uD6C4 \uC7AC\uC0DD\uD55C\uB2E4. \uAC19\uC740 \uC74C\uC545\uC744 2\uBC88\uC9F8\uB85C \uC7AC\uC0DD \uC694\uCCAD\uC744 \uD560 \uB54C\uB294 \uC774\uC804\uC5D0 \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uC74C\uC545\uC744 proxy \uC5D0 \uC800\uC7A5\uD574\uB450\uC5B4\uC11C \uB9E4\uBC88 \uAC19\uC740 \uC74C\uC545\uC744 \uB2E4\uC6B4\uB85C\uB4DC \uD558\uC9C0 \uC54A\uACE0 cache \uC5D0 \uC800\uC7A5\uB41C \uC74C\uC545\uC744 \uC7AC\uC0DD\uD560 \uC218 \uC788\uB2E4."), h("button", { onClick: _ => this.play("A"), class: "waves-effect waves-light btn-large margin20 blue" }, "Play Music A"), h("button", { onClick: _ => this.play("B"), class: "waves-effect waves-light btn-large margin20 blue" }, "Play Music B"), h("button", { onClick: _ => { this.play("A"); this.play("C"); }, class: "waves-effect waves-light btn-large margin20 blue" }, "Play Music A and C"), h("button", { onClick: _ => { this.play("A"); this.play("B"); this.play("C"); }, class: "waves-effect waves-light btn-large margin20 blue" }, "Play Music A, B and C"), h("h5", { class: "margin20" }, "Example 2: Crypto Currency Proxy"), h("h6", { class: "grayHint" }, "- 2\uBC88\uC9F8 currency \uC694\uCCAD\uC744 \uD560 \uB54C\uB294 \uC774\uC804\uC5D0 \uBD88\uB7EC\uC654\uB358 API \uB370\uC774\uD130 \uAC12\uC744 proxy cache object \uC5D0 \uC800\uC7A5\uD574\uB450\uC5B4\uC11C \uB9E4\uBC88 API \uCF5C\uC744 \uBD80\uB974\uC9C0 \uC54A\uACE0 cache \uC5D0 \uC800\uC7A5\uB41C \uAC12\uC744 \uBD88\uB7EC\uC62C \uC218 \uC788\uB2E4."), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.getCurrency("Bitcoin") }, "Bitcoin Currency"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.getCurrency("Ethereum") }, "Ethereum Currency"), h("button", { class: "waves-effect waves-light btn-large margin20", onClick: () => this.getCurrency("Litecoin") }, "Litecoin Currency"), h("pattern-photos", { uml: "proxy-uml.png", imp: "proxy-i.png", cl: "proxy-1.png", cl2: "proxy-2.png" })));
    }
    componentWillLoad() {
        this.fileNames.forEach(file => {
            this.musicLibrary.add(new MusicProxy(file));
        });
    }
    play(fileName) {
        this.musicLibrary.play(fileName);
    }
    getCurrency(coin) {
        this.proxy.getValue(coin);
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { Proxy as app_proxy };
