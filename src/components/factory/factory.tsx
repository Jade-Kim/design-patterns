import { Component, Host, h, State } from '@stencil/core';
import { EmployeeFactory } from '../../global/Factory/EmployeeFactory';

@Component({
  tag: 'app-factory',
  styleUrl: 'factory.css',
  shadow: true
})
export class Factory {

  @State() result: HTMLDivElement;

  render() {
    return (
      <Host>
        <slot>
          <div ref={el=>this.result = el}></div>
        </slot>
      </Host>
    );
  }

  say(person){
    this.result.innerHTML += "Hi, I am "+ person.name + " and I am a " + person.type +"<br/>";
    //console.log("Hi, I am "+ person.name + " and I am a " + person.type);
  }

  componentDidLoad(){
    const employeeFactory = new EmployeeFactory();
    const employees = [];

    employees.push(employeeFactory.create("Jade", 1));
    employees.push(employeeFactory.create("John", 2));

    employees.forEach(person => {
      this.say(person);
    })
  }

}
