import { Component, Host, h, State } from '@stencil/core';
import { ChatroomMediator, Member } from '../../global/Mediator/MediatorPattern';

@Component({
  tag: 'app-mediator',
  styleUrl: 'mediator.css',
  shadow: true
})
export class Mediator {

  private chat = new ChatroomMediator();
  private messageToFrank: HTMLInputElement;
  private jade = new Member("Jade");
  private frank = new Member("Frank");
  @State() message: string;

  render() {
    return (
      <Host>
        <slot>
          {/* <input type="text" placeholder="Member's Name" ref={el=>this.memberName = el as HTMLInputElement} />
          <button onClick={_=>this.createMember()} >Add Member in this chatroom!</button> */}

          <h5>Chatroom #1</h5>
          <input type="text" placeholder="Jade's Message to Frank" ref={el=>this.messageToFrank = el as HTMLInputElement} />
          <button onClick={_=>this.sendMessage()} >SEND</button>
          <p>{this.message}</p>
        </slot>
      </Host>
    );
  }

  componentDidLoad(){
    this.chat.addMember(this.jade);
    this.chat.addMember(this.frank);
  }

  sendMessage(){
    this.jade.send(this.messageToFrank.value, this.frank);
  }


  // createMember(){
  //   const member = new Member(this.memberName.value);
  //   this.chat.addMember(member);
  // }


}
