import { LitElement, html, css } from 'lit-element'
import { mdToUnsafeHtml } from '../utils.js'
import { _, i18nReady } from '../i18n.js'

class WorkExp extends LitElement {
  static get properties() {
    return {
      resumeJSON: { type: Object },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
      }

      :host:before {
        content: "";
        background-color: var(--main-bg-color);
        opacity: 0.2;
        width: 4px;
        position: absolute;
        left: 50%;
        top: 60px;
        bottom: 0px;
        display: block;
      }

      :host:after {
        clear: both;
        content: "";
        display: block;
      }

      .box-container {
        width: 50%;
        margin-bottom: 25px;
        font-size: 16px;
      }

      .box-container:nth-child(odd) {
        float: left;
      }

      .box-container:nth-child(even) {
        float: right;
      }

      .box-container:nth-child(2) {
        margin-top: 50px;
      }

      .box-container__box {
        background-color: var(--white);
        padding: 20px;
        border-top: solid 5px var(--main-bg-color);
        position: relative;
      }

      .box-container__box:before {
        font-size: 80px;
        position: absolute;
        line-height: 44px;
        color: white;
        top: 35px;
      }

      .box-container__box:after {
        content: "";
        border-radius: 50%;
        background-color: var(--main-bg-color);
        width: 8px;
        height: 8px;
        position: absolute;
        top: 55px;
      }

      .box-container:nth-child(odd) .box-container__box {
        margin-right: 35px;
      }

      .box-container:nth-child(odd) .box-container__box:before {
        content: "\\276f";
        right: -18px;
      }

      .box-container:nth-child(odd) .box-container__box:after {
        right: -40px;
      }

      .box-container:nth-child(even) .box-container__box {
        margin-left: 35px;
      }

      .box-container:nth-child(even) .box-container__box:before {
        content: "\\276e";
        left: -18px;
      }

      .box-container:nth-child(even) .box-container__box:after {
        left: -38px;
      }

      .box-container__date {
        font-weight: 700;
        color: var(--main-bg-color);
      }

      .box-container__thumbnail {
        margin-top: 20px;
      }

      .box-container__thumbnail img {
        max-height: 60px;
      }

      .box-container__position {
        text-transform: uppercase;
        margin-top: 10px;
        margin-bottom: 30px;
      }

      .box-container__summary {
        text-align: left;
      }
    `
  }

  constructor() {
    super()
  }

  firstUpdated() {}

  render() {
    const works = _('resume:work', { returnObjects: true })
    const workHtmlFactory = ({
      startDate,
      endDate,
      website,
      thumbnail,
      summary,
      position,
    }) => html`
      <div class="box-container">
        <shadow-box class="box-container__box">
          <div class="box-container__date">${startDate}-${endDate}</div>
          <div class="box-container__thumbnail">
            <a href="${website}" style=${website ? '' : 'pointer-events: none'} target="_blank"
              ><img src="${thumbnail}"
            /></a>
          </div>
          <div class="box-container__position">${position}</div>
          <div class="box-container__summary">${mdToUnsafeHtml(summary)}</div>
        </shadow-box>
      </div>
    `
    return html`
      ${works.map(workHtmlFactory)}
    `
  }
}

i18nReady.then(() => {
  customElements.define('work-exp', WorkExp)
})
