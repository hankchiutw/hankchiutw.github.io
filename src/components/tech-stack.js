import { LitElement, html, css } from 'lit-element'

class TechStack extends LitElement {
  static get properties() {
    return {
      resumeJSON: { type: Object },
    }
  }

  static get styles() {
    return css`
      :host {
      }

      shadow-box {
        background-color: var(--white);
        padding: 50px 40px;
      }
    `
  }

  render() {
    return html`
    <shadow-box>
    hi
    </shadow-box>
    `
  }
}

customElements.define('tech-stack', TechStack)
