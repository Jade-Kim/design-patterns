// 이전에 불러왔던 API 데이터 값을 proxy cache object 에 저장해두어서 매번 API 콜을 부르지 않고 cache 에 저장된 값을 불러올 수 있다

// External API Service
export class CryptoCurrencyAPI {
    getValueFromAPI(coin: string){
        alert("Calling External API...");
        switch(coin){
            case "Bitcoin":
                return "Bitcoin: $1,000";
            case "Ethereum":
                return "Ethereum: $500";
            case "Litecoin":
                return "Litecoin: $300";
        }
    }
}

export class CryptoCurrencyProxy {
    api = new CryptoCurrencyAPI();
    cache = {};
    
    getValue(coin: string){
        if (this.cache[coin] == null){
            this.cache[coin] = this.api.getValueFromAPI(coin);
        } else {
            alert("Since the value is already in cache, I don't need to call external API this time!");
        }

        alert(this.cache[coin]);
        return this.cache[coin];
    }
}

