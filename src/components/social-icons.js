import { LitElement, html, css } from 'lit-element'

class SocialIcons extends LitElement {
  static get properties() {
    return {
      profiles: Array,
    }
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
        width: 45px;
        height: 45px;
        font-size: 20px;
        margin: 5px 15px;
        color: inherit;
        border-radius: 50%;
        transition: background-color 0.25s linear 0s, color 0.25s linear 0s;
        display: inline-block;
      }

      a:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: var(--social-icons-hover-fg);
      }
    `
  }

  render() {
    const icons = this.profiles
      ? this.profiles.map(
        ({ network, url }) => html`
            <a href="${url}" target="_blank">
              <icon-font icon="${network}"></icon-font>
            </a>
          `
      )
      : []
    return html`
      ${icons}
    `
  }
}

customElements.define('social-icons', SocialIcons)
