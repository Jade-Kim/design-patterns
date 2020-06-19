import { Component, h, State } from '@stencil/core';
import { MusicPlayer } from '../../global/State/context';
import { PowerOn, PowerOff, Playing, Paused } from '../../global/State/concreteState';

@Component({
  tag: 'app-state',
  styleUrl: 'state.css',
  shadow: false
})
export class StatePattern {

  @State() currentState: string;
  @State() powerOn: boolean;

  private musicPlayer = new MusicPlayer();


  render() {
    return (
      <div class="margin20">
        <h3>State Pattern</h3>
        <h6 class="grayHint">- Lets an object to behave differently depending on the state now</h6>
        <h6 class="grayHint">- 현재 상태에 따라 같은 이름의 메소드가 다르게 작동하며 Context 는 하나의 State, 즉 하나의 current State 를 가질 수 있다.</h6>
        <br/>
        <h5>Music Player</h5>
        <h6 class="grayHint">- Music Player Buttons behave differently depends on the current state of the music player.</h6>
        <h6 class="grayHint">- 음악 플레이어의 상태에 따라 아래 버튼은 각각 다르게 작동한다.</h6>
        <h6 class="blueHint">- Music Player Current State: {this.currentState}</h6>
        <button class={this.powerOn ? "btn-large margin20" : "btn-large margin20 red"} onClick={() => this.pressedPower()} ><i class="material-icons">power_settings_new</i></button>
        <button class="btn-large margin20" onClick={() => this.pressedPlay()} ><i class="material-icons">play_arrow</i></button>
        <button class="btn-large margin20" onClick={() => this.pressedPause()} ><i class="material-icons">pause</i></button>

        <pattern-photos uml="state-uml.png" imp="state-i.png" cl="state-1.png" cl2="state-2.png"></pattern-photos>
      </div>
    );
  }


  pressedPower() {
    const state = this.musicPlayer.getState;
    this.powerOn = state.pressedPower();

    if (this.powerOn) {
      this.musicPlayer.setState = new PowerOn();
      this.currentState = "Power On";
    } else {
      this.musicPlayer.setState = new PowerOff();
      this.currentState = "Power Off";
    }
  }

  pressedPlay() {
    const state = this.musicPlayer.getState;
    this.currentState = state.pressedPlay();
    this.powerOn ? this.musicPlayer.setState = new Playing() : '';
  }

  pressedPause() {
    const state = this.musicPlayer.getState;
    this.currentState = state.pressedPause();
    this.powerOn ? this.musicPlayer.setState = new Paused() : '';
  }

  componentDidLoad() {
    this.musicPlayer.setState = new PowerOff();
    this.currentState = "Power Off";
  }

}
