import { LitElement, html, css } from 'lit-element'

class ShadowBox extends LitElement {
  static get styles() {
    return css`
      :host {
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
        display: block;
      }
    `
  }

  render() {
    return html`
    <slot></slot>
    `
  }
}

customElements.define('shadow-box', ShadowBox)
