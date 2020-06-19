import { Component, Host, h } from '@stencil/core';
import { SingletonObject } from '../../global/Singleton/Singleton';

@Component({
  tag: 'app-singleton',
  styleUrl: 'singleton.css',
  shadow: true
})
export class Singleton {

  private singletonOne: SingletonObject = SingletonObject.getInstance();
  private singletonTwo: SingletonObject = SingletonObject.getInstance();

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  componentDidLoad(){
    this.singletonOne.setNumber(5);
    console.log("SingletonOne: ", this.singletonOne.getNumber());
    console.log("SingletonTwo: ", this.singletonTwo.getNumber());

    this.singletonTwo.setNumber(99);
    console.log("SingletonOne: ", this.singletonOne.getNumber());
    console.log("SingletonTwo: ", this.singletonTwo.getNumber());
  }
  

}
