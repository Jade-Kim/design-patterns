import { Component, h, State } from '@stencil/core';
import { ArrayIteratorHistory } from '../../global/Iterator/ArrayIteratorHistory';
import { FixedArrayIteratorHistory } from '../../global/Iterator/FixedArrayIteratorHistory';

@Component({
  tag: 'app-iterator',
  styleUrl: 'iterator.css',
  shadow: false
})
export class Iterator {

  @State() result1: HTMLDivElement;
  @State() result2: HTMLDivElement;

  private history = new ArrayIteratorHistory();
  private fixedHistory = new FixedArrayIteratorHistory();
  private userInput1: HTMLInputElement;
  private userInput2: HTMLInputElement;

  render() {
    return (
      <div class="margin20">
        <h3>Iterator Pattern</h3>
        <h6 class="grayHint">- Allows iterating over an object without exposing the object's internal structure</h6>
        <h6 class="grayHint">- 객체의 내부 구조를 노출하지 않고 객체를 반복하는 설계 방법.</h6>
        <br/>
        <h5>Example 1) Array Iterator </h5>
        <input type="text" ref={el => this.userInput1 = el} placeholder="Type something to save on the history object." />

        <div class="btnDiv">
          <button class="btn" onClick={_ => this.addToHistory()} >Add to history</button>
          <button onClick={_ => this.iterate1ASC()} class="btn blue" >ITERATE starting from the first element</button>
          <button onClick={_ => this.iterate1DESC()} class="btn blue" >ITERATE starting from the last element</button>
        </div>

        <h6 class="margin20">Array Iterator History Result</h6>
        <div ref={el => this.result1 = el} class="margin20 resultDiv"></div>

        <hr />

        <h5>Example 2) Fixed Array Iterator: This history saves only the last 10 elements.</h5>
        <input type="text" ref={el => this.userInput2 = el} placeholder="Type something to save on the history object." />

        <div class="btnDiv">
          <button class="btn teal darken-3" onClick={_ => this.addToFixedHistory()} >Add to fixed history</button>
          <button onClick={_ => this.iterate2ASC()} class="btn blue darken-3" >ITERATE starting from the first element</button>
          <button onClick={_ => this.iterate2DESC()} class="btn blue darken-3" >ITERATE starting from the last element</button>
        </div>

        <h6 class="margin20">Fixed Array Iterator History Result</h6>
        <div ref={el => this.result2 = el} class="margin20 resultDiv"></div>

        <pattern-photos uml="iterator-uml.png" imp="iterator-i.png" cl="iterator-1.png"></pattern-photos>

      </div>
    );
  }

  addToHistory() {
    this.history.push(this.userInput1.value);
    this.userInput1.value = "";
  }

  iterate1ASC() {
    const iterator = this.history.createIterator();
    
    while (iterator.hasNext()) {
      this.result1.innerHTML += iterator.current() + "<br/>";
      iterator.next();
    }
  }

  iterate1DESC() {
    const iterator = this.history.createIterator(1);
    
    while (iterator.hasNext()) {
      this.result1.innerHTML += iterator.current() + "<br/>";
      iterator.next();
    }
  }

  addToFixedHistory() {
    this.fixedHistory.push(this.userInput2.value);
    this.userInput2.value = "";
  }

  iterate2ASC() {
    const iterator = this.fixedHistory.createIterator();

    while (iterator.hasNext()) {
      this.result2.innerHTML += iterator.current() + "<br/>";
      iterator.next();
    }
  }

  iterate2DESC() {
    const iterator = this.fixedHistory.createIterator(1);

    while (iterator.hasNext()) {
      this.result2.innerHTML += iterator.current() + "<br/>";
      iterator.next();
    }
  }

}
