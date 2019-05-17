import { LitElement, html, css } from 'lit-element'

class IconFont extends LitElement {
  static get properties() {
    return {
      icon: String,
    }
  }

  static get styles() {
    return css`
    :host {
      font-family: 'icomoon' !important;
    }

    .icon-github:before {
      content: "\\eab0";
    }
    .icon-linkedin:before {
      content: "\\eac9";
    }
    .icon-linkedin2:before {
      content: "\\eaca";
    }
    .icon-stackoverflow:before {
      content: "\\ead0";
    }
    `
  }

  render() {
    return html`
    <span class='icon-${this.icon}'></span>
    `
  }
}
customElements.define('icon-font', IconFont)
