import { Component, h, State } from '@stencil/core';
import { Authenticator, Logger } from '../../global/ChainOfResponsibility/Handler';
import { WebServer } from '../../global/ChainOfResponsibility/WebServer';
import { LoginRequest } from '../../global/ChainOfResponsibility/LoginRequest';

@Component({
  tag: 'app-chain',
  styleUrl: 'chain.css',
  shadow: false
})
export class Chain {

  username: HTMLInputElement;
  pw: HTMLInputElement;

  @State() result: string;

  render() {
    return (
      <div class="margin20">
        <h3>Chain of Responsiblility Pattern</h3>
        <h6 class="grayHint">- Allows building an order of request objects</h6>
        <h6 class="grayHint">- 요청을 순서대로 체인화 하고자 할 때 사용하는 패턴</h6>
        <br/>
        <input placeholder="Username: admin" ref={el => this.username = el} />
        <input placeholder="Password: 1234" ref={el => this.pw = el} />
          
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.login()} >Log in</button>
        {this.result}

        <pattern-photos uml="chain-uml.png" imp="chain-i.png" cl="chain-1.png" cl2="chain-2.png"></pattern-photos>

      </div>
    );
  }

  // 1. authenticator -> 2. logger
  private logger = new Logger(null);
  private authenticator = new Authenticator(this.logger);
  private server = new WebServer(this.authenticator);

  login(){
    const request = new LoginRequest(this.username.value, this.pw.value);
    this.server.handle(request);
  }

}
