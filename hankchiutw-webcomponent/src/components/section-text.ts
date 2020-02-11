import { LitElement, html, css } from 'lit-element';

class SectionText extends LitElement {
  title = '';

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
        font-size: 20px;
        font-weight: 300;
        margin-top: 30px;
        line-height: 1.8;
      }
    `;
  }

  render() {
    return html`
    <slot></slot>
    `;
  }
}

customElements.define('section-text', SectionText);
