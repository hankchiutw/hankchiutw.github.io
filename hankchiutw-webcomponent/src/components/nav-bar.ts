import { LitElement, html, css } from 'lit-element';

class NavBar extends LitElement {
  static get styles() {
    return css`
    :host {
      display: block;
      padding: 20px 15px;
      margin-bottom: 40px;
    }
    `;
  }
  render() {
    return html`
    <div class='logo'></div>
    `;
  }
}
customElements.define('nav-bar', NavBar);
