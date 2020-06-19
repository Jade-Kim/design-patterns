import { Component, h, State } from '@stencil/core';
import { UserDBService, ShoppingService } from '../../global/Command/Receiver';
import { AddUserCommand, GetUserCommand, ShopSellCommand, ShopBuyCommand, SaveCartCommand } from '../../global/Command/ConcreteCommand';
import { Button } from '../../global/Command/Invoker';
import { CreateTicketCommand, CreateAddressCommand, CloseTicketCommand } from '../../global/Command/Composite Command/CLCommands';
import { CommandService } from '../../global/Command/Composite Command/CLCommandService';
import { CommandManager } from '../../global/Command/Composite Command/ComandManager';
import { CanvasHistory } from '../../global/Command/Undoable Command/CanvasHistory';
import { CanvasDocument } from '../../global/Command/Undoable Command/CanvasDocument';
import { DrawCircleCommand, DrawLineCommand, PaintRedCommand, PaintBlueCommand } from '../../global/Command/Undoable Command/UndoableConcreteCommand';
import { UndoCommand } from '../../global/Command/Undoable Command/UndoCommand';


@Component({
  tag: 'app-command',
  styleUrl: 'command.css',
  shadow: false
})
export class Command {

  render() {
    return (
      <div class="margin20">
        <h3>Command Pattern</h3>
        <h6 class="grayHint">- Turns a request into an object and execute any operation such as delay, queue or undo.</h6>
        <h6 class="grayHint">- 요청을 하나의 객체로 만들어 저장한 다음 여러가지 요청을 실행, 지연, 순서대로 실행, 실행 취소 등의 작업을 할 수 있다.</h6>

        <h5>Example 1) User DB Service & Shopping Service</h5>
        <button class="btn margin20" onClick={_ => this.addUser()} >Add User</button>
        <button class="btn margin20" onClick={_ => this.getUser()} >Get User Info</button>

        <input ref={el => this.items = el} type="text" placeholder="Type items you need to sell/buy/save." />
        <button class="btn margin20 cyan" onClick={_ => this.sell()} >Sell</button>
        <button class="btn margin20 cyan" onClick={_ => this.buy()} >Buy</button>
        <button class="btn margin20 cyan" onClick={_ => this.saveCart()} >Save Cart</button>

        <h5>Example 2) Canvas Editor - Undo Mechanism</h5>
        <button class="btn margin20 blue" onClick={_ => this.circle()} >Draw a circle</button>
        <button class="btn margin20 blue" onClick={_ => this.line()} >Draw a line</button>
        <button class="btn margin20 blue" onClick={_ => this.red()} >Paint red</button>
        <button class="btn margin20 blue" onClick={_ => this.blue()} >Paint blue</button>
        <button class="btn margin20 red" onClick={_ => this.undo()} >Undo</button>

        <div class="resultDiv margin20">
          <h6>** Canvas **</h6>
          {this.currentCanvas}
          {/* {this.canvasHistory && this.canvasHistory.length > 0 &&
            this.canvasHistory.map(cmd => <p>{cmd.operation}</p>)} */}
        </div>

        <h5>Example 3) Add command and execute all commands at once</h5>
        <button class="btn margin20" onClick={_ => this.createTicket()} >Create ticket</button>
        <button class="btn margin20" onClick={_ => this.createAddress()} >Create address</button>
        <button class="btn margin20" onClick={_ => this.closeTicket()} >Close ticket</button>
        <button class="btn margin20 teal accent-2 black-text" onClick={_ => this.executeAll()} >Execute Commands</button>
        <pattern-photos uml="command-uml.png" imp="command-i.png" cl="command.png"></pattern-photos>

      </div>
    );
  }


  // **** Example 1

  private items: HTMLInputElement;

  private userDBService = new UserDBService(); // Receiver
  private shoppingService = new ShoppingService(); // Receiver
  private button = new Button(); // Invoker

  addUser() {
    const command = new AddUserCommand(this.userDBService); // Concrete Command
    this.button.executeCommand(command);
    console.log(this.button.getCommands);
  }

  getUser() {
    const command = new GetUserCommand(this.userDBService); // Concrete Command
    this.button.executeCommand(command);
    console.log(this.button.getCommands);
  }

  sell() {
    const command = new ShopSellCommand(this.shoppingService); // Concrete Command
    this.button.executeCommand(command, this.items.value);
    console.log(this.button.getCommands);
  }

  buy() {
    const command = new ShopBuyCommand(this.shoppingService); // Concrete Command
    this.button.executeCommand(command, this.items.value);
    console.log(this.button.getCommands);
  }

  saveCart() {
    const command = new SaveCartCommand(this.shoppingService); // Concrete Command
    this.button.executeCommand(command, this.items.value);
    console.log(this.button.getCommands);
  }


  // **** Example 2

  @State() currentCanvas: string;

  private canvasHistory = new CanvasHistory(); 
  private doc = new CanvasDocument();

  circle() {
    const command = new DrawCircleCommand(this.doc, this.canvasHistory);
    command.execute();
    this.updateCanvasCommand();
  }

  line() {
    const command = new DrawLineCommand(this.doc, this.canvasHistory);
    command.execute();
    this.updateCanvasCommand();
  }

  red() {
    const command = new PaintRedCommand(this.doc, this.canvasHistory);
    command.execute();
    this.updateCanvasCommand();
  }

  blue() {
    const command = new PaintBlueCommand(this.doc, this.canvasHistory);
    command.execute();
    this.updateCanvasCommand();
  }

  undo() {
    const undoCommand = new UndoCommand(this.canvasHistory);
    undoCommand.execute();
    this.updateCanvasCommand();
  }

  updateCanvasCommand() {
    this.currentCanvas = this.doc.getContent;
  }


  // **** Example 3

  private CLService = new CommandService(); // Receiver
  private CommandManager = new CommandManager(); // Invoker

  createTicket(){
    const cmd = new CreateTicketCommand(this.CLService, {id: "ticket1"});
    this.CommandManager.add(cmd);
  }

  closeTicket(){
    const cmd = new CloseTicketCommand(this.CLService, {id: "ticket2"});
    this.CommandManager.add(cmd);
  }

  createAddress(){
    const cmd = new CreateAddressCommand(this.CLService, {id: "address1"});
    this.CommandManager.add(cmd);
  }

  executeAll(){
    this.CommandManager.executeCommand();
  }


}
