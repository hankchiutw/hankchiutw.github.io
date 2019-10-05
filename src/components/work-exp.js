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
    const host = css`
      :host {
        display: block;
        position: relative;
      }
    `

    const timeline = css`
      :host:before {
        content: "";
        background-color: var(--main-bg-color);
        opacity: 0.2;
        width: 4px;
        position: absolute;
        left: calc(50% - 2px);
        top: 60px;
        bottom: 85px;
        display: block;
      }

      :host:after {
        clear: both;
        content: "";
        display: block;
      }
    `

    const columnLayout = css`
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
        padding: 24px;
        border-top: solid 5px var(--main-bg-color);
        position: relative;
      }

      .box-container:nth-child(odd) .box-container__box {
        margin-right: 35px;
      }

      .box-container:nth-child(even) .box-container__box {
        margin-left: 35px;
      }

      .box-container:last-child {
        float: right;
      }

      .box-container:last-child .box-container__box {
        margin-right: auto;
        margin-left: 35px;
      }

      @media (max-width: 767px) {
        .box-container {
          width: 100%;
        }

        .box-container:nth-child(odd) {
          float: none;
        }

        .box-container:nth-child(even) {
          float: none;
        }

        .box-container:nth-child(2) {
          margin-top: 0;
        }

        .box-container:nth-child(odd) .box-container__box {
          margin-right: 0;
        }

        .box-container:nth-child(even) .box-container__box {
          margin-left: 0;
        }

        .box-container:last-child .box-container__box {
          margin-right: 0;
          margin-left: 0;
        }
      }
    `

    const arrowAndDot = css`
      :host {
        --arrow-offset: -18px;
        --dot-offset: -39px;
        --arrow-top: 50%;
        --dot-top: calc(50% + 20px);
      }

      .box-container__box:before {
        font-size: 80px;
        position: absolute;
        line-height: 44px;
        color: white;
        top: var(--arrow-top);
      }

      .box-container__box:after {
        content: "";
        border-radius: 50%;
        background-color: var(--main-bg-color);
        width: 8px;
        height: 8px;
        position: absolute;
        top: var(--dot-top);
      }

      @media (max-width: 767px) {
        .box-container__box:before {
          display: none;
        }

        .box-container__box:after {
          display: none;
        }
      }

      .box-container:nth-child(odd) .box-container__box:before {
        content: "\\276f";
        right: var(--arrow-offset);
      }

      .box-container:nth-child(odd) .box-container__box:after {
        right: var(--dot-offset);
      }

      .box-container:nth-child(even) .box-container__box:before {
        content: "\\276e";
        left: var(--arrow-offset);
      }

      .box-container:nth-child(even) .box-container__box:after {
        left: var(--dot-offset);
      }

      .box-container:first-child .box-container__box:before {
        top: 35px;
      }

      .box-container:first-child .box-container__box:after {
        top: 55px;
      }

      .box-container:last-child .box-container__box:before {
        top: auto;
        bottom: 35px;
        content: "\\276e";
        right: auto;
        left: var(--arrow-offset);
      }

      .box-container:last-child .box-container__box:after {
        top: auto;
        bottom: 55px;
        right: auto;
        left: var(--dot-offset);
      }
    `

    const boxContent = css`
      .box-container__date {
        font-weight: 700;
        color: var(--main-bg-color);
      }

      .box-container__head {
        margin-top: 20px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: left;
      }

      .box-container__thumbnail {
        height: 60px;
        width: 60px;
        margin-right: 20px;
      }

      .box-container__thumbnail img {
        max-height: 60px;
        max-width: 60px;
      }

      .box-container__company {
        font-size: 20px;
      }

      .box-container__position {
        text-transform: uppercase;
        margin-top: 10px;
      }

      .box-container__summary {
        text-align: left;
      }
    `

    return [
      host,
      timeline,
      columnLayout,
      arrowAndDot,
      boxContent,
    ]
  }

  constructor() {
    super()
  }

  firstUpdated() {}

  _formatDate(str) {
    return str ? str.replace('-', '.').slice(0, 7) : ''
  }

  render() {
    const works = _('resume:work', { returnObjects: true })
    const workHtmlFactory = ({
      startDate,
      endDate,
      company,
      website,
      thumbnail,
      summary,
      position,
    }) => html`
      <div class="box-container">
        <shadow-box class="box-container__box">
          <div class="box-container__date">
            ${this._formatDate(startDate)} - ${this._formatDate(endDate)}
          </div>
          <div class="box-container__head">
            <a class="box-container__thumbnail" href="${website}" style=${website ? '' : 'pointer-events: none'} target="_blank">
              <img src="${thumbnail}" />
            </a>
            <div>
              <div class="box-container__company">${company}</div>
              <div class="box-container__position">${position}</div>
            </div>
          </div>
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
