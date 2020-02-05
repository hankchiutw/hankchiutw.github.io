import { LitElement, html, css } from 'lit-element';
import { mdToUnsafeHtml } from '../utils.js';
import { _, i18nReady } from '../i18n.js';

class AppRoot extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        background-color: #efefef;
        display: block;
      }

      :host:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 515px;
        background-image: url(assets/header.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }

      :host:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        height: 515px;
        background-color: rgba(44, 51, 64, 0.8);
      }

      nav-bar {
        position: relative;
        z-index: 2;
      }

      .container {
        position: relative;
        z-index: 2;
        max-width: 960px;
        padding-left: 15px;
        padding-right: 15px;
        margin: 0 auto;
      }

      section {
        padding-top: 40px;
      }

      footer {
        text-align: center;
        padding: 30px 0;
        color: var(--ultralight-font-color);
        --social-icons-hover-fg: var(--main-font-color);
      }
    `;
  }

  render() {
    const profiles = _('resume:basics.profiles', { returnObjects: true });
    return html`
      <nav-bar></nav-bar>
      <div class="container">
        <profile-card imgurl="assets/portrait.png"></profile-card>
        <section-box title="${_('about-me.title')}">
          <section-text>${mdToUnsafeHtml(_('about-me.detail'))}</section-text>
        </section-box>
        <section-box title="${_('tech-stack.title')}">
          <tech-stack></tech-stack>
        </section-box>
        <section-box title="${_('work-exp.title')}">
          <work-exp></work-exp>
        </section-box>
        <footer><social-icons .profiles="${profiles}"></social-icons></footer>
      </div>
    `;
  }
}

i18nReady.then(() => {
  customElements.define('app-root', AppRoot);
});
