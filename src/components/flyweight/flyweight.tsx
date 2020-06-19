import { Component, h } from '@stencil/core';
import { PointService, PointIconFactory } from '../../global/Flyweight/Point';

@Component({
  tag: 'app-flyweight',
  styleUrl: 'flyweight.css',
  shadow: false
})
export class Flyweight {

  render() {
    return (
      <div class="margin20">
        <h3>Flyweight Pattern</h3>
        <h6 class="grayHint">- Allows sharing common state between multiple objects </h6>
        <h6 class="grayHint">- 각 객체에 모든 데이터를 저장하지 않고 여러 객체 사이의 공통된 state 를 공유하여 RAM 메모리를 적게 차지하도록 설계하는 패턴이다.</h6>

        <button class="btn" onClick={_=>this.draw()}>Draw</button>
        <pattern-photos uml="flyweight-uml.png" imp="flyweight-i.png" cl="flyweight-1.png" cl2="flyweight-2.png"></pattern-photos>

      </div>
    );
  }

  draw(){
    let service = new PointService(new PointIconFactory());
    for (const point of service.getPoints()) {
        point.draw();
    }
  }
}
