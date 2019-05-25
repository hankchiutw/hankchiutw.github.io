import { LitElement, html, css } from 'lit-element'
import './icon-font.js'

class ProfileCard extends LitElement {
  static get properties() {
    return {
      resumeJSON: { type: Object },
      imgURL: String,
    }
  }

  static get styles() {
    const host = css`
      :host {
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
    `

    const content = css`
      .profile__content {
        flex: 7;
        padding: 0 15px;
      }

      .profile__title {
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

      .profile__title:before {
        content: "";
        border-left: solid 8px var(--main-bg-color);
        border-bottom: solid 8px transparent;
        display: block;
        height: 7px;
        margin-left: 8px;
        margin-bottom: 18px;
      }

      .profile__title span {
        font-weight: 700;
      }

      .profile__label {
        font-size: 18px;
        font-weight: 400;
      }

      .profile__row {
        margin-bottom: 13px;
        display: flex;
      }

      .profile__sub-title {
        font-size: 12px;
        font-weight: 700;
        min-width: 120px;
        text-transform: uppercase;
      }

      .profile__sub-label {
        color: var(--light-font-color);
      }
    `

    const social = css`
      .profile-social {
        background-color: var(--main-bg-color);
        padding: 15px 0;
        display: flex;
        justify-content: center;
        color: var(--white);
      }
    `

    return [host, content, social]
  }

  constructor() {
    super()
    this.resumeJSON = {}
  }

  render() {
    const { basics, work } = this.resumeJSON || {}
    const { name, label, location, email, profiles } = basics || {}
    const { postalCode, countryCode } = location || {}
    const { company, position } = work[0]

    const infos = Object.entries({
      location: `${countryCode}, ${postalCode}`,
      'e-mail': email,
      current: `${position}, ${company}`,
    }).map(([key, value]) => {
      return html`
        <div class="profile__row">
          <span class="profile__sub-title">${key}</span
          ><span class="profile__sub-label">${value}</span>
        </div>
      `
    })

    return html`
      <shadow-box>
        <div class="profile">
          <div class="profile__portrait"><img src="${this.imgURL}" /></div>
          <div class="profile__content">
            <div class="profile__title">
              I'm <span>${name}</span>
              <div class="profile__label">${label}</div>
            </div>
            <div class="profile__info">${infos}</div>
          </div>
        </div>
        <social-icons
          class="profile-social"
          .profiles="${profiles}"
        ></social-icons>
      </shadow-box>
    `
  }
}
customElements.define('profile-card', ProfileCard)
