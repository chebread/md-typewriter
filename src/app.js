import { marked } from 'marked';
import './styles/reset.css';
import './styles/style.css';

const contentMsg = `Quickly write short notes with Markdown that follows the syntax of GitHub.`;
const license = `MIT License &copy; ${new Date().getFullYear()} Cha Haneum`;

const updateValue = e => {
  document.querySelector('#content-view').innerHTML = marked(e.target.value);
};

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
    <div id="content-view"><span style="color:gray"></span></div>
  </div>
`;

document
  .querySelector('#content-textarea')
  .addEventListener('keydown', function (e) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      this.value =
        this.value.substring(0, start) + '\t' + this.value.substring(end);

      // put caret at right position again
      this.selectionStart = this.selectionEnd = start + 1;
    }
  });

document
  .querySelector('#content-textarea')
  .addEventListener('input', updateValue);
