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
      width: 100%;
      height: 100%;
      display: flex;
    }

    [class^='icon-'] {
      margin: auto;
    }

    .icon-github:before {
      content: "\\eab0";
    }
    .icon-linkedin:before {
      content: "\\eaca";
    }
    .icon-linkedin2:before {
      content: "\\eac9";
    }
    .icon-stackoverflow:before {
      content: "\\ead0";
    }
    `
  }

  render() {
    return html`
    <div class='icon-${this.icon}'></div>
    `
  }
}
customElements.define('icon-font', IconFont)
