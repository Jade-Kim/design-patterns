import { Component,  h } from '@stencil/core';
import { SamsungTV, LGTV, AdvancedRemoteControl } from '../../global/Bridge/RemoteControl';

@Component({
  tag: 'app-bridge',
  styleUrl: 'bridge.css',
  shadow: false
})
export class Bridge {

  render() {
    return (
      <div class="margin20">
        <h3>Bridge Pattern</h3>
        <h6 class="grayHint">- Allows spliting a large class into two separate hierarchies independntly </h6>
        <h6 class="grayHint">- 서로 연관된 큰 클래스를 2개의 독립된 조직으로 나누어 각각 따로 관리할 수 있도록 설계하는 패턴이다.</h6>
        <h5 class="margin20">Remote Controllers</h5>
        <div>Samsung TV Remote Controller</div>
        <button class="waves-effect waves-light btn-large margin20" onClick={_=>this.turnOnSamsungTV()}>Turn On Samsung TV</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={_=>this.turnOffSamsungTV()}>Turn Off Samsung TV</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={_=>this.setChannelSamsungTV()}>Set Channel Samsung TV</button>

        <div>LG TV Remote Controller</div>
        <button class="waves-effect waves-light btn-large margin20" onClick={_=>this.turnOnLGTV()}>Turn On LG TV</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={_=>this.turnOffLGTV()}>Turn Off LG TV</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={_=>this.setChannelLGTV()}>Set Channel LG TV</button>

        <pattern-photos uml="bridge-uml.png" imp="bridge-i.png" cl="bridge-1.png" cl2="bridge-2.png"></pattern-photos>

      </div>
    );
  }

  private samsungRemoteControl = new AdvancedRemoteControl(new SamsungTV());
  private LGRemoteControl = new AdvancedRemoteControl(new LGTV());

  turnOnSamsungTV(){
    this.samsungRemoteControl.turnOn();
  }

  turnOffSamsungTV() {
    this.samsungRemoteControl.turnOff();
  }

  setChannelSamsungTV() {
    this.samsungRemoteControl.setChannel(11);
  }

  turnOnLGTV(){
    this.LGRemoteControl.turnOn();
  }

  turnOffLGTV() {
    this.LGRemoteControl.turnOff();
  }

  setChannelLGTV() {
    this.LGRemoteControl.setChannel(11);
  }
}
