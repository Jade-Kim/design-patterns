import { Component,  h } from '@stencil/core';
import { CryptoCurrencyProxy } from '../../global/Proxy/CryptoCurrencyProxy';
import { MusicLibrary, MusicProxy } from '../../global/Proxy/MusicPlayerProxy';

@Component({
  tag: 'app-proxy',
  styleUrl: 'proxy.css',
  shadow: false
})
export class Proxy {

  render() {
    return (
      <div class="margin20">
        <h3>Proxy Pattern</h3>
        <h6 class="grayHint">- Allows providing a substitue or placeholder for another object. The proxy object controls all the access of the original objects
        and allows you to add additional request either before or after of the original behavior</h6>
        <h6 class="grayHint">- 타겟 객체를 직접 실행하기 전에 프록시 객체가 타겟 객체의 요청을 관리한다. 타겟 요청 전후로 추가적인 함수를 실행하는 패턴을 넣을 수 있다.</h6>

        <h5 class="margin20">Example 1: Web Music Player</h5>
        <h6 class="grayHint">- 필요한 음악만 다운로드한 후 재생한다. 같은 음악을 2번째로 재생 요청을 할 때는 이전에 다운로드한 음악을 proxy 에 저장해두어서 매번 같은 음악을 다운로드 하지 않고 cache 에 저장된 음악을 재생할 수 있다.</h6>

        <button onClick={_=>this.play("A")} class="waves-effect waves-light btn-large margin20 blue">Play Music A</button>
        <button onClick={_=>this.play("B")} class="waves-effect waves-light btn-large margin20 blue">Play Music B</button>
        <button onClick={_=>{this.play("A"); this.play("C")}} class="waves-effect waves-light btn-large margin20 blue">Play Music A and C</button>
        <button onClick={_=>{this.play("A"); this.play("B"); this.play("C")}} class="waves-effect waves-light btn-large margin20 blue">Play Music A, B and C</button>

        <h5 class="margin20">Example 2: Crypto Currency Proxy</h5>
        <h6 class="grayHint">- 2번째 currency 요청을 할 때는 이전에 불러왔던 API 데이터 값을 proxy cache object 에 저장해두어서 매번 API 콜을 부르지 않고 cache 에 저장된 값을 불러올 수 있다.</h6>
        
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.getCurrency("Bitcoin")} >Bitcoin Currency</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.getCurrency("Ethereum")} >Ethereum Currency</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.getCurrency("Litecoin")} >Litecoin Currency</button>

        
        <pattern-photos uml="proxy-uml.png" imp="proxy-i.png" cl="proxy-1.png" cl2="proxy-2.png"></pattern-photos>

      </div>
    );
  }

  private musicLibrary = new MusicLibrary();
  private fileNames = ["A", "B", "C"];
  
  componentWillLoad() {
    this.fileNames.forEach(file => {
      this.musicLibrary.add(new MusicProxy(file));
    });
  }

  play(fileName: string){
    this.musicLibrary.play(fileName);
  }

  private proxy = new CryptoCurrencyProxy();

  getCurrency(coin){
    this.proxy.getValue(coin);
  }

}
