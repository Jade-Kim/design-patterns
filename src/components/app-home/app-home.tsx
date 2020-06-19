import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() addContents: HTMLDivElement;

  render() {
    return (
      <div class='app-home' id="home">
        <div class="row">
          <div class="col s4">
            <h4>Creational</h4>
            <a class="btn waves-effect waves-light cyan" href="/factory">Factory</a>
            <a class="btn waves-effect waves-light cyan" href="/singleton">Singleton</a>
          </div>
          <div class="col s4">
            <h4>Structural</h4>
            <a class="btn waves-effect waves-light blue" href="/adapter">Adapter</a>
            <a class="btn waves-effect waves-light blue" href="/bridge">Bridge</a>
            <a class="btn waves-effect waves-light blue" href="/composite">Composite</a>
            <a class="btn waves-effect waves-light blue" href="/decorator">Decorator</a>
            <a class="btn waves-effect waves-light blue" href="/facade">Facade</a>
            <a class="btn waves-effect waves-light blue" href="/flyweight">Flyweight</a>
            <a class="btn waves-effect waves-light blue" href="/proxy">Proxy</a>
          </div>
          <div class="col s4">
            <h4>Behavioral</h4>
            <a class="btn waves-effect waves-light" href="/memento">Memento</a>
            <a class="btn waves-effect waves-light" href="/command">Command</a>
            <a class="btn waves-effect waves-light" href="/state">State</a>
            <a class="btn waves-effect waves-light" href="/strategy">Strategy</a>
            <a class="btn waves-effect waves-light" href="/template">Template</a>
            <a class="btn waves-effect waves-light" href="/iterator">Iterator</a>
            <a class="btn waves-effect waves-light" href="/observer">Observer</a>
            <a class="btn waves-effect waves-light" href="/chain">Chain of Responsibility</a>
          </div>
        </div>
      </div>
    );
  }





}
