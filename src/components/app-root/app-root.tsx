import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <a href="/" class="btn-floating grey" id="backBtn"><i class="material-icons">home</i></a>
          <h1>Jade's Design Patterns</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              {/* Creational Pattern */}
              <stencil-route url='/singleton' component='app-singleton' />
              <stencil-route url='/factory' component='app-factory' />

              {/* Structural Pattern */}
              <stencil-route url='/adapter' component='app-adapter' />
              <stencil-route url='/bridge' component='app-bridge' />
              <stencil-route url='/composite' component='app-composite' />
              <stencil-route url='/decorator' component='app-decorator' />
              <stencil-route url='/facade' component='app-facade' />
              <stencil-route url='/flyweight' component='app-flyweight' />
              <stencil-route url='/proxy' component='app-proxy' />

              {/* Behavioral Pattern */}
              <stencil-route url='/memento' component='app-memento' />
              <stencil-route url='/state' component='app-state' />
              <stencil-route url='/strategy' component='app-strategy' />
              <stencil-route url='/iterator' component='app-iterator' />
              <stencil-route url='/observer' component='app-observer' />
              <stencil-route url='/mediator' component='app-mediator' />
              <stencil-route url='/template' component='app-template' />
              <stencil-route url='/command' component='app-command' />
              <stencil-route url='/chain' component='app-chain' />
              
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }

  // componentDidLoad(){
  //   rfidPlugin.addObserver(rfidPluginObserver);
  //   checkRfidPlugin();
  //   //checkConnection();
  // }
}
