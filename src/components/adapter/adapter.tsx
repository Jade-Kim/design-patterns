import { Component, h } from '@stencil/core';
import { AdaptThirdPartyFilter, thirdPartyFilter, ImageView, Image } from '../../global/Adapter/Filter';

@Component({
  tag: 'app-adapter',
  styleUrl: 'adapter.css',
  shadow: false
})
export class Adapter {

  render() {
    return (
      <div class="margin20">
        <h3>Adapter Pattern</h3>
        <h6 class="grayHint">- Allows objects with incompatible interfaces to <span class="blueHint">collaborate interfaces = Adapter</span> that clients expect</h6>
        <h6 class="grayHint">- 외부 라이브러리/프레임워크와 클라이언트가 <span class="blueHint">소통할 수 있는 인터페이스 = 어댑터</span> 를 만들어 호환이 가능하도록 하는 설계 방식이다.</h6>

        <p>외부 라이브러리 이미지 필터를 client 소스 코드에 적용하기 위해 AdaptThirdPartyFilter 클래스와 소통한다.</p>
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.applyFilter()} >Apply Image Filter</button>
      
        <pattern-photos uml="adapter-uml.png" imp="adapter-i.png" cl="adapter.png"></pattern-photos>

      </div>
    );
  }

  applyFilter() {
    var imageView = new ImageView(new Image());
    imageView.apply(new AdaptThirdPartyFilter(new thirdPartyFilter()));
  }

}
