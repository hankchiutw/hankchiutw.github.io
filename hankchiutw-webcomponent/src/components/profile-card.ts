import { ResumeBasics, Location } from 'features/resume/resume.model';
import { _, i18nReady } from 'libs/i18n';
import { LitElement, html, css } from 'lit-element';
import './icon-font';

class ProfileCard extends LitElement {
  resumeJSON = {};
  imgURL = '';

  static get styles() {
    const host = css`
      :host {
        display: block;
      }

      .profile {
        background-color: white;
        padding: 57px 50px 15px;
        display: flex;
      }

      .profile__portrait {
        flex: 5;
        padding: 0 15px;
        text-align: center;
        margin-bottom: 30px;
      }

      .profile__portrait img {
        width: 100%;
        max-width: 400px;
      }
    `;

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
        content: 'HELLO';
        color: var(--white);
        font-size: 14px;
        font-weight: 700;
        padding: 7px 12px;
        background-color: var(--main-bg-color);
      }

      .profile__title:before {
        content: '';
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
        font-weight: 400;
        font-size: 16px;
      }
    `;

    const social = css`
      .profile-social {
        background-color: var(--main-bg-color);
        padding: 15px 0;
        display: flex;
        justify-content: center;
        color: var(--white);
      }
    `;

    const media = css`
      @media (max-width: 767px) {
        .profile {
          padding: 30px 20px 15px;
          display: block;
        }

        .profile__title {
          text-align: center;
        }

        .profile__content:before {
          text-align: center;
          display: flex;
          max-width: 150px;
          justify-content: center;
          margin: auto;
        }

        .profile__title:before {
          display: flex;
          max-width: 150px;
          justify-content: center;
          height: 0px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 18px;
        }

        .profile__row {
          margin-bottom: 28px;
          flex-direction: column;
        }
      }
    `;

    return [host, content, social, media];
  }

  constructor() {
    super();
    this.resumeJSON = {};
  }

  render() {
    const basics: ResumeBasics = _('resume:basics', { returnObjects: true });
    const work = _('resume:work', { returnObjects: true });
    const {
      name = '',
      label = '',
      location = {},
      email = '',
      profiles = {},
    } = basics;
    const { postalCode, countryCode } = location as Location;
    const { company, position } = work[0];

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
      `;
    });

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
    `;
  }
}

i18nReady.then(() => {
  customElements.define('profile-card', ProfileCard);
});
