import { LitElement, html, css } from 'lit-element';
import { mdToUnsafeHtml } from '../utils';
import { _, i18nReady } from 'libs/i18n';

class WorkExp extends LitElement {
  static get properties() {
    return {
      resumeJSON: { type: Object },
    };
  }

  static get styles() {
    const host = css`
      :host {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: stretch;
        --timeline-color: #27a79a50;
        --thumbnail-size: 60px;
        --thumbnail-margin: 35px;
        --thumbnail-border-size: 6px;
        --thumbnail-padding: 2px;
        --timeline-offset: calc(
          (
              var(--thumbnail-size) + var(--thumbnail-border-size) +
                var(--thumbnail-padding)
            ) * 0.5
        );
      }

      .row {
        display: flex;
        margin-bottom: 25px;
      }

      .cell--stretch {
        flex: 1;
      }

      @media (max-width: 767px) {
        :host {
          --thumbnail-size: 40px;
          --thumbnail-margin: 14px;
          --thumbnail-border-size: 4px;
          --thumbnail-padding: 1px;
        }
      }
    `;

    const timeline = css`
      :host:before {
        content: '';
        background-color: var(--timeline-color);
        width: var(--thumbnail-border-size);
        position: absolute;
        left: var(--timeline-offset);
        top: 0;
        bottom: 0;
        display: block;
        z-index: 0;
        border-radius: 3px;
      }
    `;

    const thumbnail = css`
      .thumbnail {
        height: var(--thumbnail-size);
        width: var(--thumbnail-size);
        margin-right: var(--thumbnail-margin);
        border: solid var(--thumbnail-border-size) var(--timeline-color);
        padding: var(--thumbnail-padding);
        border-radius: 50%;
        z-index: 1;
        background-color: white;
      }

      .thumbnail img {
        max-height: var(--thumbnail-size);
        max-width: var(--thumbnail-size);
        border-radius: 50%;
      }
    `;

    const date = css`
      .date-container {
        display: flex;
        align-items: center;
        margin: 8px 0;
        height: var(--thumbnail-size);
      }

      .date-container__label {
        font-size: 18px;
        font-weight: bold;
        background-color: var(--main-bg-color);
        color: white;
        display: inline-block;
        padding: 0 16px;
        border-radius: 20px;
        height: 40px;
        line-height: 40px;
        position: relative;
      }

      .date-container__label:before {
        font-size: 20px;
        position: absolute;
        line-height: 40px;
        color: var(--main-bg-color);
        content: '\\25c0';
        left: -10px;
        top: 0px;
      }

      @media (max-width: 767px) {
        .date-container {
          margin-bottom: 14px;
        }

        .date-container__label {
          width: 100%;
        }
      }
    `;

    const contentBox = css`
      .content-box {
        font-size: 16px;
        text-align: left;
        background-color: var(--white);
        padding: 24px;
        border-top: solid 5px var(--main-bg-color);
        position: relative;
      }

      .content-box__company {
        font-size: 24px;
        font-weight: bold;
        color: var(--main-bg-color);
      }

      .content-box__position {
        text-transform: uppercase;
        margin-top: 10px;
      }
    `;

    return [host, timeline, thumbnail, date, contentBox];
  }

  constructor() {
    super();
  }

  _formatDate(str) {
    return str ? str.replace('-', '.').slice(0, 7) : '';
  }

  render() {
    const works = _('resume:work', { returnObjects: true });
    const workHtmlFactory = ({
      startDate,
      endDate,
      company,
      website,
      thumbnail,
      summary,
      position,
    }) => html`
      <div class="row">
        <a
          class="thumbnail"
          href="${website}"
          style=${website ? '' : 'pointer-events: none'}
          target="_blank"
        >
          <img src="${thumbnail}" />
        </a>
        <div class="cell--stretch">
          <div class="date-container">
            <div class="date-container__label">
              ${this._formatDate(startDate)} - ${this._formatDate(endDate)}
            </div>
          </div>
          <shadow-box class="content-box">
            <div class="content-box__company">${company}</div>
            <div class="content-box__position">${position}</div>
            <div class="content-box__summary">${mdToUnsafeHtml(summary)}</div>
          </shadow-box>
        </div>
      </div>
    `;
    return html`
      ${works.map(workHtmlFactory)}
    `;
  }
}

i18nReady.then(() => {
  customElements.define('work-exp', WorkExp);
});
