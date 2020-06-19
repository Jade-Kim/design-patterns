import { Component, h, State } from '@stencil/core';
import { Canvas } from '../../global/State2/Canvas';
import { PaintTool } from '../../global/State2/PaintTool';
import { EraserTool } from '../../global/State2/EraserTool';
import { PencilTool } from '../../global/State2/PencilTool';


@Component({
  tag: 'app-state2',
  styleUrl: 'state2.css',
  shadow: false
})
export class StatePattern2 {

  protected canvas = new Canvas;
  protected stateCanvas: HTMLDivElement;

  @State() result: HTMLDivElement;

  render() {
    return (
      <div class="margin20">
        <h3>State Pattern</h3>
        <h5>Select tool</h5>
        <button class="btn-large" onClick={() => this.setPaintTool()} >Paint Tool</button>
        <button class="btn-large" onClick={() => this.setEraserTool()} >Eraser Tool</button>
        <button class="btn-large" onClick={() => this.setPencilTool()} >Pencil Tool</button>
        <h5>Draw in the canvas</h5>
        <div ref={el => this.stateCanvas = el} id="stateCanvas" onMouseDown={_ => this.onMouseDown()} onMouseUp={_ => this.onMouseUp()} >Canvas</div>
        <h5>What's going on in the canvas</h5>
        <div ref={el => this.result = el}></div>
      </div>
    );
  }

  setPaintTool() { this.canvas.setCurrentTool(new PaintTool); }
  setEraserTool() { this.canvas.setCurrentTool(new EraserTool); }
  setPencilTool() { this.canvas.setCurrentTool(new PencilTool); }

  onMouseDown() {
    const tool = this.canvas.getCurrentTool();
    if (tool) {
      const result = this.canvas.mouseDown();
      this.result.innerHTML = result;
    } else {
      alert("Please select tool.")
    }
  }

  onMouseUp() {
    const tool = this.canvas.getCurrentTool();
    if (tool) {
      const result = this.canvas.mouseUp();
      this.result.innerHTML = result;
    } 
  }


}
