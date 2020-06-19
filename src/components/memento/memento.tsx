import { Component, h } from '@stencil/core';
import { Editor } from '../../global/Memento/Editor';
import { EditorHistory } from '../../global/Memento/EditorHistory';

@Component({
  tag: 'app-memento',
  styleUrl: 'memento.css',
  shadow: false
})
export class Memento {

  private userInput: HTMLInputElement;
  private editorResult: HTMLDivElement;
  private editor = new Editor();
  private history = new EditorHistory();
  
  render() {
    return (
      <div class="margin20">
        <h3>Memento Pattern</h3>
        <h6 class="grayHint">- Memento Pattern implements <span class="blueHint">'undo'</span> mechanisms.</h6>
        <h6 class="grayHint">- 메멘토 페턴은 <span class="blueHint">'실행 취소'</span> 메커니즘을 실행한다.</h6>
        <input placeholder="Type something here and set content several times then click undo button." ref={el => this.userInput = el} />
        
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.setContent()} >Set Content</button>
        <button class="waves-effect waves-light btn-large pink" onClick={() => this.undo()} >Undo</button>

        <div id="mementoNote" ref={el => this.editorResult = el} class="resultDiv"></div>

        <pattern-photos uml="memento-uml.png" imp="memento-i.png" cl="memento.png"></pattern-photos>
        
        
      </div>
    );
  }

  setContent() {
    const state = this.editor.createState();

    this.history.push(state);
    this.editor.setContent = this.userInput.value;
    console.log(this.history);
    this.editorResult.innerHTML = this.userInput.value;

    this.userInput.value = "";
  }

  undo() {
    this.editor.restore(this.history.pop());
    const previousContent = this.editor.getContent;

    !previousContent 
      ? this.editorResult.innerHTML = "" 
      : this.editorResult.innerHTML = previousContent;
  }

}
