import { LitElement, html, css } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import showdown from 'showdown'

showdown.setOption('openLinksInNewWindow', true)
const mdConverter = new showdown.Converter()

const stacks = [
  {
    icon: 'embed',
    title: 'UI template',
    subTitle: 'React, lit-element, Storybook',
    detail:
      'The reason why using UI libraries is that things will go messy if you define layout by HTML and operate on DOM elements by `document.querySelector` or jQuery.',
  },
  {
    icon: 'paint-format',
    title: 'Styling',
    subTitle: 'CSS, styled-components, BEM, SCSS',
    detail:
      'CSS is good enough for many cases, especially [CSS var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) is useful for theming. The key question is how to do styling in a maintainable and scalable way.',
  },
  {
    icon: 'stack',
    title: 'State management',
    subTitle: 'Redux, Flux',
    detail:
      'Having a consistent state management policy will make your projects scalable.',
  },
  {
    icon: 'rocket',
    title: 'Code optimization',
    subTitle: 'Babel, Webpack, Rollup, Parcel',
    detail:
      'Optimization here including transpiling, bundling and minimization.',
  },
  {
    icon: 'bug',
    title: 'Testing',
    subTitle: 'Enzyme, Jest, mocha',
    detail: 'Not yet dabble in it much, just simple unit testing.',
  },
  {
    icon: 'terminal',
    title: 'Editor',
    subTitle: 'Vim',
    detail:
      'How I use Vim as an IDE: [hankchiutw/vim](https://github.com/hankchiutw/vim).',
  },
]

class TechStack extends LitElement {
  static get properties() {
    return {
      resumeJSON: { type: Object },
    }
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
    `
  }

  render() {
    const content = stacks.map(({ icon, title, subTitle, detail }) => {
      return html`
        <div class="stack">
          <icon-font icon="${icon}"></icon-font>
          <div class="stack__title">${title}</div>
          <div class="stack__subtitle">${subTitle}</div>
          <hr />
          <div class="stack__detail">${unsafeHTML(mdConverter.makeHtml(detail))}</div>
        </div>
      `
    })
    return html`
      <shadow-box> ${content} </shadow-box>
    `
  }
}

customElements.define('tech-stack', TechStack)
