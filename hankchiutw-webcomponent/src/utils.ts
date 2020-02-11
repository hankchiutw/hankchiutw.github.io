import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import showdown from 'showdown';

showdown.setOption('openLinksInNewWindow', true);
const mdConverter = new showdown.Converter();

export const mdToUnsafeHtml = (str) => unsafeHTML(mdConverter.makeHtml(str));
