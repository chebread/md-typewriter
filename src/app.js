import { updateValue } from './modules/updateValue.js';
import './styles/reset.css';
import './styles/default.css';
import './styles/app.css';

const contentMsg = `Quickly write short notes with Markdown that follows the syntax of GitHub.`;
const license = `MIT License &copy; ${new Date().getFullYear()} Cha Haneum`;

document.querySelector('#root').innerHTML = `
    <header class="header">
      <img
        class="header-img"
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Underwoodfive.jpg"
        alt="old typewriter on the table"/>
    </header>
    <div class="content">
      <textarea
        id="content-textarea"
        tabindex="1"
        placeholder="${contentMsg}&nbsp;(${license})"
        ></textarea>
        <div id="content-view"></div>
  `;

document
  .querySelector('#content-textarea')
  .addEventListener('input', e => updateValue(e, '#content-view'));

document
  .querySelector('#content-textarea')
  .addEventListener('keydown', function (e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      this.value =
        this.value.substring(0, start) + '\t' + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 1;
    }
  });
