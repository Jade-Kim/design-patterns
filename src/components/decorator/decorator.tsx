import { Component, h } from '@stencil/core';
import { Compressed, Encrypted, CloudStorage,  } from '../../global/Decorator/Storage';

@Component({
  tag: 'app-decorator',
  styleUrl: 'decorator.css',
  shadow: false
})
export class Decorator {

  private userInput: HTMLInputElement;

  render() {
    return (
      <div class="margin20">
        <h3>Decorator Pattern</h3>
        <h6 class="grayHint">- Attach additional behaviors to objects using <span class="blueHint">wrapper (decorator)</span></h6>
        <h6 class="grayHint">- Wrapper (Decorator) 에 기능을 담아 객체에 원하는 추가 기능을 유연하게 넣을 수 있는 설계 패턴이다.</h6>
        <input placeholder="Type something here and save data." ref={el => this.userInput = el} />
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.save()} >Save Data</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.saveEncrypted()} >Save Encrypted Data</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.saveCompressed()} >Save Compressed Data</button>
        <button class="waves-effect waves-light btn-large margin20" onClick={() => this.saveCompressedEncrypted()} >Save Compressed and Encrypted Data</button>
        <pattern-photos uml="decorator-uml.png" imp="decorator-i.png" cl="decorator.png"></pattern-photos>
      </div>
    );
  }

  save() {
    const cloudStream = new CloudStorage();
    cloudStream.store(this.userInput.value);
  }

  saveEncrypted() {
    const cloudStream = new Encrypted(new CloudStorage());
    cloudStream.store(this.userInput.value);
  }

  saveCompressed() {
    const cloudStream = new Compressed(new CloudStorage());
    cloudStream.store(this.userInput.value);
  }

  saveCompressedEncrypted() {
    const cloudStream = new Compressed(new Encrypted(new CloudStorage()));
    cloudStream.store(this.userInput.value);
  }


}
