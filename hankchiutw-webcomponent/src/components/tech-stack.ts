import { LitElement, html, css } from 'lit-element';
import { mdToUnsafeHtml } from '../utils';
import { _, i18nReady } from 'libs/i18n';

class TechStack extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        text-align: left;
        font-weight: 400;
      }

      shadow-box {
        background-color: var(--white);
        padding: 50px 40px 25px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: auto auto;
        grid-row-gap: 25px;
      }

      @media (max-width: 767px) {
        shadow-box {
          padding: 30px 20px;
          display: block;
        }
      }

      .stack {
        margin: 0 15px 25px;
      }

      icon-font {
        color: var(--main-bg-color);
        font-size: 35px;
        display: block;
        height: auto;
        margin-bottom: 20px;
      }

      .stack__title {
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
      }

      .stack__subtitle {
        font-size: 16px;
        margin: 15px 0 0;
        color: var(--main-bg-color);
      }

      hr {
        width: 100%;
        max-width: 130px;
        height: 5px;
        background-color: var(--seporator-color);
        border: 0;
        display: inline-block;
        margin: 25px 0 0;
      }

      .stack__detail {
        font-size: 16px;
        word-break: break-word;
      }
    `;
  }

  render() {
    const content = _('tech-stack.stacks', { returnObjects: true }).map(
      ({ icon, title, subTitle, detail }) => {
        return html`
          <div class="stack">
            <icon-font icon="${icon}"></icon-font>
            <div class="stack__title">${title}</div>
            <div class="stack__subtitle">${subTitle}</div>
            <hr />
            <div class="stack__detail">
              ${mdToUnsafeHtml(detail)}
            </div>
          </div>
        `;
      }
    );

    return html`
      <shadow-box>${content}</shadow-box>
      <section-text>
        ${mdToUnsafeHtml(_('tech-stack.detail'))}
      </section-text>
    `;
  }
}

i18nReady.then(() => {
  customElements.define('tech-stack', TechStack);
});
