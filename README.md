# hankchiu.tw

<!-- toc -->

- [About me](#about-me)
- [Tech Stack I used](#tech-stack-i-used)
    + [UI template](#ui-template)
      - [React](#react)
      - [lit-element](#lit-element)
      - [Storybook](#storybook)
    + [Styling](#styling)
      - [styled-components](#styled-components)
      - [BEM](#bem)
      - [SCSS](#scss)
    + [State management](#state-management)
      - [Redux or Flux](#redux-or-flux)
    + [Code optimization](#code-optimization)
      - [Babel](#babel)
      - [Webpack](#webpack)
      - [Rollup](#rollup)
      - [Parcel](#parcel)
    + [Testing](#testing)
      - [Enzyme and Jest](#enzyme-and-jest)
      - [mocha](#mocha)
    + [Editor, IDE](#editor-ide)
      - [Vim](#vim)
- [Other interests](#other-interests)
- [Misc](#misc)
    + [From EE to software development](#from-ee-to-software-development)
    + [Liked design patterns](#liked-design-patterns)

<!-- tocstop -->

## About me
I'm a self-taught software engineer focused on front-end while having back-end experiences. I love writing structured code and open-source spirits. Standing on the shoulders of giants keeps me improving. I can refactor a big project with a mindset of clean code.

## Tech Stack I used
Front-end engineering becomes complex and developers are free to have their own mindset(opinionated) during the development process.

JavaScript is imperfect, but you can take advantage of thousands of libraries to get things done or build components/modules by yourself. I classify tools for different aspects of front-end development: _UI template_, _styling_, _state management_, _code optimization_, _testing_ and _editor_.

#### UI template
The reason why using UI libraries is that things will go messy if you define layout by HTML and operate on DOM elements by `document.querySelector` or jQuery.

##### React

Solving the pain of DOM operations(manipulation, accessing, property change, event handling, etc). 

JSX let you bind the component layout and functionalities together intuitionally without worry about the [Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).

Behind the JSX, React handles the "real" DOMs(what users can see) rendering on pages by means of virtual DOM. Virtual DOM is a set of tree-structured JavaScript object mapping to the reall DOM.

##### [lit-element](https://lit-element.polymer-project.org/guide)

Personally, I like it more than React because it uses [web components](https://www.webcomponents.org/introduction) and is gonna be [W3C standard](https://github.com/w3c/webcomponents)(hopefully).

Instead of JSX, I can write HTML by means of [JavaScript template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

Define CSS inside the shadow root and it will be scoped for the component only.

##### [Storybook](https://storybook.js.org/docs/basics/introduction/)

To develop and demo UI components.

#### Styling
CSS is good enough for many cases, especially [CSS var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) is useful for theming. The key question is how to do styling in a maintainable and scalable way.

##### [styled-components](https://www.styled-components.com/docs/basics)

For React components.

##### [BEM](http://getbem.com/introduction/)

Use BEM whenever I have to define CSS classes.

##### [SCSS](https://sass-lang.com/documentation)
Basically, I avoid using SCSS in new projects. Nested selectors become unmaintainable in the end.

BEM forces me thinking about maintainabilities when designing DOM layout(which is better). But I did use SCSS in old projects.

#### State management
Having a consistent state management strategy will make your projects scalable.

##### Redux or Flux

This is more related to design choice instead of tooling. Mono state for Redux and multiple states for Flux.
Redux would be better for complicated projects.

I've ever used old fashioned two-way binding Angular 1.x and got bad performance if not carefully dealing the data flow.

#### Code optimization
Optimization here including transpiling, bundling and minimization.

##### Babel

Basically, all the bundling tools use Babel for transpiling. My basic `.babelrc` looks like this [gist](https://gist.github.com/hankchiutw/bd35cb9ef21135fb00b8cdc5d79a47c4#file-babelrc).

##### Webpack

I use it for production because there are many configurable items, tools, and plugins. 

E.g. [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer), dynamic import, code splitting, etc.

##### Rollup

Suitable for non-UI module development.

##### [Parcel](https://parceljs.org)

I use it for prototyping because it's a zero-configuration bundler.

#### Testing
Not yet dabble in it much, just simple unit testing.

##### Enzyme and Jest
##### mocha

#### Editor
##### Vim

How I use Vim as an IDE: [hankchiutw/vim](https://github.com/hankchiutw/vim).

## Other interests
- [stenciljs](https://stenciljs.com/docs/introduction/), a compiler for web components.

- TypeScript

- cross-platform mobile/desktop app development

  - [Flutter](https://flutter.dev/docs/get-started/install)
    - I have a simple Vim plugin for flutter: [hankchiutw/flutter-reload.vim](https://github.com/hankchiutw/flutter-reload.vim)
  - [NativeScript](https://www.nativescript.org/)
  - [Electron](https://electronjs.org/)

- WebAssembly, Rust

- [gitflow](https://github.com/nvie/gitflow)
  - Applied [git flow branching model](https://nvie.com/posts/a-successful-git-branching-model/) in some of my projects.

- Docker
  - my shell scripts for Docker administration: [hankchiutw/microservice-docker-utils](https://github.com/hankchiutw/microservice-docker-utils)

## Misc
#### From EE to software development
I was majored in EE in college and working as a hardware engineer for 4 years. When people say "how could you jump to software development?", I would say this is not a big gap when you have _Passion_.

Practically, in college, I did some parttime jobs of building web service. To build everything from scratch, I learned LAMP(Linux, Apache, MySQL, PHP) stack. JavaScript is boring at that time, but I was fascinated with being able to share ideas through the Internet.

At some point, [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) was becoming popular. With such asynchronous technique, developing a web page became more like developing a desktop app. Hundreds of [JavaScript frameworks](https://en.wikipedia.org/wiki/List_of_Ajax_frameworks#JavaScript) popped up. Using frameworks is cool, but learning [prototype chain](https://en.wikipedia.org/wiki/List_of_Ajax_frameworks#JavaScript) guided me to the core of JavaScript.

Building side projects becoming my hobbies. Not until my second job did I build something in production. Both hardware and software engineering are interesting for me. Maybe the next project would be an IoT project(lol).

#### Liked design patterns
- prefer composition than inheritance
- decorator pattern
- factory pattern
- singleton
