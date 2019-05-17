import { LitElement, html, css } from 'lit-element'
import './icon-font.js'

class ProfileCard extends LitElement {
  static get properties() {
    return {
      imgURL: String,
      resumeJSON: {
        type: Object,
        attribute: true,
      },
    }
  }

  static get styles() {
    return css`
      :host {
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
        display: block;
      }

      .profile {
        background-color: white;
        padding: 57px 50px 15px 50px;
        display: flex;
      }

      .profile__portrait {
        flex: 5;
        padding: 0 15px;
      }

      .profile__portrait img {
        width: 100%;
      }

      .profile__content {
        flex: 7;
        padding: 0 15px;
      }

      .profile__content__title {
        font-size: 36px;
        font-weight: 300;
        color: var(--main-font-color);
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: 1px solid var(--seporator-color);
      }

      .profile__content:before {
        content: "HELLO";
        color: var(--white);
        font-size: 14px;
        font-weight: 700;
        padding: 7px 12px;
        background-color: var(--main-bg-color);
      }

      .profile__content__title:before {
        content: "";
        border-left: solid 8px var(--main-bg-color);
        border-bottom: solid 8px transparent;
        display: block;
        height: 7px;
        margin-left: 8px;
        margin-bottom: 18px;
      }

      .profile__content__title span {
        font-weight: 700;
      }

      .profile__content__label {
        font-size: 18px;
        font-weight: 400;
      }

      .row {
        margin-bottom: 13px;
        display: flex;
      }

      .sub-title {
        font-size: 12px;
        font-weight: 700;
        min-width: 120px;
        text-transform: uppercase;
      }

      .light-text {
        color: var(--light-font-color);
      }

      .profile-social {
        background-color: var(--main-bg-color);
        padding: 15px 0;
      }
    `
  }

  constructor() {
    super()
    this.resumeJSON = {}
  }

  render() {
    const { basics, work } = this.resumeJSON
    const { name, label, location, email } = basics || {}
    const { postalCode, countryCode } = location || {}
    const { company, position } = work[0]

    const infos = Object.entries({
      location: `${countryCode}, ${postalCode}`,
      'e-mail': email,
      current: `${position}, ${company}`,
    }).map(([key, value]) => {
      return html`
        <div class="row">
          <span class="sub-title">${key}</span
          ><span class="light-text">${value}</span>
        </div>
      `
    })

    return html`
      <div class="profile">
        <div class="profile__portrait"><img src="${this.imgURL}" /></div>
        <div class="profile__content">
          <div class="profile__content__title">
            I'm <span>${name}</span>
            <div class="profile__content__label">${label}</div>
          </div>
          <div class="profile__content__info">${infos}</div>
        </div>
      </div>
      <div class="profile-social"><icon-font icon="github"></icon-font></div>
    `
  }
}
customElements.define('profile-card', ProfileCard)
