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
        font-family: "icomoon" !important;
        width: 100%;
        height: 100%;
        display: flex;
      }

      [class^="icon-"] {
        margin: auto;
      }

      .icon-paint-format:before {
        content: "\\e90c";
      }
      .icon-stack:before {
        content: "\\e92e";
      }
      .icon-bug:before {
        content: "\\e999";
      }
      .icon-rocket:before {
        content: "\\e9a5";
      }
      .icon-embed:before {
        content: "\\ea80";
      }
      .icon-terminal:before {
        content: "\\ea81";
      }
      .icon-github:before {
        content: "\\eab0";
      }
      .icon-linkedin:before {
        content: "\\eaca";
      }
      .icon-stackoverflow:before {
        content: "\\ead0";
      }
      .icon-angular:before {
        content: "\\e900";
      }
    `
  }

  render() {
    return html`
      <div class="icon-${this.icon}"></div>
    `
  }
}
customElements.define('icon-font', IconFont)
