import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pattern-photos',
  styleUrl: 'photos.css',
  shadow: true
})
export class Photos {

  @Prop() uml: string;
  @Prop() uml2: string;
  @Prop() imp: string;
  @Prop() imp2: string;
  @Prop() cl: string;
  @Prop() cl2: string;


  render() {
    return (
      <Host>
        <slot>
          <div class="pattern-photos">
            <h3>UML</h3>
            <img src={"../../assets/" + this.uml} class="margin20 uml" />
            {this.uml2 && <img src={"../../assets/" + this.uml2} class="margin20 uml" />}

            <h3>Implementation</h3>
            <img src={"../../assets/" + this.imp} class="margin20" />
            {this.imp2 && <img src={"../../assets/" + this.imp2} class="" />}

            <h3>Class</h3>
            <img src={"../../assets/" + this.cl} class="" />
            {this.cl2 && <img src={"../../assets/" + this.cl2} class="" />}

          </div>
        </slot>
      </Host>
    );
  }

}
