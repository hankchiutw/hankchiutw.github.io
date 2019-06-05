import { LitElement, html, css } from 'lit-element'

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
      bottom: 60px;
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
    `
  }

  constructor() {
    super()
  }

  firstUpdated() {}

  render() {
    return html`
    <div class='box-container'>
      <shadow-box class='box-container__box box-container__box--odd'>
        <div>a</div>
        <div>b</div>
        <div>b</div>
      </shadow-box>
    </div>
    <div class='box-container'>
      <shadow-box class='box-container__box box-container__box--even'>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>b</div>
      </shadow-box>
    </div>
    <div class='box-container'>
      <shadow-box class='box-container__box box-container__box--odd'>
        <div>a</div>
        <div>a</div>
      </shadow-box>
    </div>
    <div class='box-container'>
      <shadow-box class='box-container__box box-container__box--even'>
        <div>a</div>
        <div>b</div>
      </shadow-box>
    </div>
    `
  }
}

customElements.define('work-exp', WorkExp)
