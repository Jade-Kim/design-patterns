import { Component, h, State } from '@stencil/core';
import { rfidPlugin, rfidPluginObserver, checkRfidPlugin } from '../../global/Observer/ObservableObject';

@Component({
  tag: 'app-observer',
  styleUrl: 'observer.css',
  shadow: false
})
export class Observer {

  @State() result_plugin: string;

  render() {
    return (
      <div class="margin20">
        <h3>Observer Pattern</h3>
        <h6 class="grayHint">- Allows a subscription mechanism to notify other objects when any events happen.</h6>
        <h6 class="grayHint">- 이벤트가 생기면 해당 이벤트를 구독하고 있는 다른 객체에게 알려주는 설계 패턴이다.</h6>

        <h5>Handle a plugin connection</h5>
        <button class="btn margin20" onClick={_ => this.connect()} >Connect</button>
        <button class="btn margin20" onClick={_ => this.disconnect()} >Disconnect</button>
        <div>{this.result_plugin}</div>
      </div>
    );
  }

  componentWillLoad() {
    rfidPluginObserver.listener(
      (connection) => this.result_plugin = connection
    )

    // pluginConnection.listener(
    //   (connection) => this.result_plugin = connection
    // )

  }

  componentDidLoad(){
    rfidPlugin.addObserver(rfidPluginObserver);
    checkRfidPlugin();
    //checkConnection();
  }

  connect() {
    rfidPlugin.data = "Connected";
    //pluginConnection.fire("Connected");
  }

  disconnect() {
    rfidPlugin.data = "Disconnected";
    //pluginConnection.fire("Disconnected");
  }

}
