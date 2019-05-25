import { LitElement, html, css } from 'lit-element'
import resumeJSON from '../../assets/resume.json'

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
    `
  }

  render() {
    return html`
      <nav-bar></nav-bar>
      <div class="container">
        <profile-card
          imgurl='assets/portrait.png'
          .resumeJSON='${resumeJSON}'
        ></profile-card>
        <section-box title='About Me'>
          <div>
          I'm a self-taught software engineer focused on front-end while having back-end experiences. I love writing structured code and open-source spirits. Standing on the shoulders of giants keeps me improving. I can refactor a big project with a mindset of clean code.
          </div>
        </section-box>
        <section-box title='Tech Stack'>
          <tech-stack
            .resumeJSON='${resumeJSON}'
          ></tech-stack>
        </section-box>
      </div>
    `
  }
}

customElements.define('app-root', AppRoot)
