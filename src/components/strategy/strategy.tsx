import { Component,  h, State } from '@stencil/core';
import { Package } from '../../global/Strategy/Package';
import { Shipping } from '../../global/Strategy/context';
import { Fedex, UPS, USPS } from '../../global/Strategy/concreteStrategy';
import { TheImage } from '../../global/Strategy2/Image';
import { ImageStorage } from '../../global/Strategy2/context';
import { PngCompressor, SoftFilter } from '../../global/Strategy2/concreteStrategy';


@Component({
  tag: 'app-strategy',
  styleUrl: 'strategy.css',
  shadow: false
})
export class Strategy {

  @State() result: HTMLDivElement;
  @State() result2: HTMLDivElement;

  private from: HTMLInputElement;
  private to: HTMLInputElement;
  private weight: HTMLInputElement;
  private fileName: HTMLInputElement;

  render() {
    return (
      <div class="margin20">
        <h3>Strategy Pattern</h3>
        <h6 class="grayHint">- Allows you define a template operation, and set different behaviors into seperate classes</h6>
        <h6 class="grayHint">- 설정한 Strategy 에 따라 같은 이름의 메소드가 다르게 작동한다.</h6>
        <br/>
        <h5>Example 1) Calculate shipping cost from different shipping companies </h5>
        <div class="row">
          <div class="col s4">
            <input type="text" placeholder="From" ref={el=>this.from=el} />
          </div>
          <div class="col s4">
            <input type="text" placeholder="To" ref={el=>this.to=el} />
          </div>
          <div class="col s4">
            <input type="number" placeholder="Weight (lb)" ref={el=>this.weight=el} />
          </div>
        </div>
        <button class="btn" onClick={_ => this.calculate()} >CALCULATE SHIPPING COST</button>
        <div ref={el => this.result = el} class="resultDiv margin20"></div>

        <h5>Example 2) Store the images that users upload </h5>
        <input type="text" placeholder="File Name" ref={el=>this.fileName=el} />
        <button class="btn" onClick={_ => this.upload()} >UPLOAD PHOTO</button>
        <div ref={el => this.result2 = el} class="resultDiv margin20"></div>

        <pattern-photos uml="strategy-uml-2.png" uml2="strategy-uml-1.png" imp="strategy-i.png" cl="strategy-1.png" cl2="strategy-2.png"></pattern-photos>

      </div>
    );
  }

  calculate() {
    const from = this.from.value;
    const to = this.to.value;
    const weight = Number(this.weight.value);

    const thePackage = new Package(from, to, weight);
    const shipping = new Shipping();

    this.result.innerHTML = "";
    this.result.innerHTML += `From ${from} To ${to} <br/> Package ${weight} lb <br/><br/>`;

    shipping.setStrategy(new Fedex());
    this.result.innerHTML += "Fedex: $" + shipping.calculate(thePackage) + "<br/>";

    shipping.setStrategy(new UPS());
    this.result.innerHTML += "UPS: $" + shipping.calculate(thePackage) + "<br/>";

    shipping.setStrategy(new USPS());
    this.result.innerHTML += "USPS: $" + shipping.calculate(thePackage) + "<br/>";
  }

  upload() {
    const img = new TheImage(this.fileName.value);
    const imgStorage = new ImageStorage();
    imgStorage.store(img, new PngCompressor(), new SoftFilter());

    this.result2.innerHTML = "Check out the developer console.";
  }

}
