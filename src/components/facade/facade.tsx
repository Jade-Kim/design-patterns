import { Component, h } from '@stencil/core';
import { NotificationService } from '../../global/Facade/Facade';

@Component({
  tag: 'app-facade',
  styleUrl: 'facade.css',
  shadow: false
})
export class Facade {
  private message: HTMLInputElement;

  render() {
    return (
      <div class="margin20">
        <h3>Facade Pattern</h3>
        <h6 class="grayHint">- Facade Pattern provides a simplified, higher-level <span class="blueHint">interface</span> to a complex library/framework/class.</h6>
        <h6 class="grayHint">- Client 가 복잡한 라이브러리 또는 프레임워크와 직접적으로 소통하는 대신에 Facade 라는 간단한 상위 <span class="blueHint"> 인터페이스</span> 와 소통하여 복잡함을 줄이는 설계 방식이다.</h6>
        <h5>Send a notification message App</h5>
        <input placeholder="Message" ref={el => this.message = el} />
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.send()} >Send</button>
        <pattern-photos uml="facade-uml.png" imp="facade-i.png" cl="facade.png"></pattern-photos>

      </div>
    );
  }

  send() {
    // Client code 가 굉장히 간단하다.
    const service = new NotificationService();
    service.send(this.message.value, "target");
  }

}
