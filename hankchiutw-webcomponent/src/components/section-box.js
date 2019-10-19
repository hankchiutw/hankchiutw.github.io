import { LitElement, html, css } from 'lit-element'

class SectionBox extends LitElement {
  static get properties() {
    return {
      title: String,
    }
  }

  static get styles() {
    return css`
      :host {
        text-align: center;
        color: var(--main-font-color);
      }

      h2 {
        font-size: 34px;
        font-weight: 600;
        margin-top: 70px;
        margin-bottom: 25px;
      }
    `
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <slot></slot>
    `
  }
}

customElements.define('section-box', SectionBox)
