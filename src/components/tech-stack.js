import { LitElement, html, css } from 'lit-element'

const stacks = [
  {
    title: 'UI template',
    subTitle: 'React, lit-element, Storybook',
    detail: 'The reason why using UI libraries is that things will go messy if you define layout by HTML and operate on DOM elements by `document.querySelector` or jQuery.',
  },
  {
    title: 'Styling',
    subTitle: 'CSS, styled-components, BEM, SCSS',
    detail: 'CSS is good enough for many cases, especially [CSS var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) is useful for theming. The key question is how to do styling in a maintainable and scalable way.',
  },
  {
    title: 'State management',
    subTitle: 'Redux, Flux',
    detail: 'Having a consistent state management policy will make your projects scalable.',
  },
  {
    title: 'Code optimization',
    subTitle: 'Babel, Webpack, Rollup, Parcel',
    detail: 'Optimization here including transpiling, bundling and minimization.',
  },
  {
    title: 'Testing',
    subTitle: 'Enzyme, Jest, mocha',
    detail: 'Not yet dabble in it much, just simple unit testing.',
  },
  {
    title: 'Editor',
    subTitle: 'Vim',
    detail: 'How I use Vim as an IDE: [hankchiutw/vim](https://github.com/hankchiutw/vim).',
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
      }

      shadow-box {
        background-color: var(--white);
        padding: 50px 40px 25px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: auto auto;
      }

      @media (max-width: 767px) {
        shadow-box {
          display: block;
        }
      }

      .stack {
        margin: 0 15px 25px;
      }

      h3 {
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0;
      }

      h4 {
        font-size: 16px;
        font-weight: 400;
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
        margin: 25px 0;
      }

      .detail {
        font-size: 16px;
        word-break: break-word;
      }
    `
  }

  render() {
    const content = stacks.map(({ title, subTitle, detail }) => {
      return html`
        <div class="stack">
          <h3>${title}</h3>
          <h4>${subTitle}</h4>
          <hr />
          <div class='detail'>${detail}</div>
        </div>
      `
    })
    return html`
      <shadow-box> ${content} </shadow-box>
    `
  }
}

customElements.define('tech-stack', TechStack)
