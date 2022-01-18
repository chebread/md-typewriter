import { marked } from 'marked';
import './styles/reset.css';
import './styles/style.css';

const contentMsg = `Quickly write short notes with Markdown that follows the syntax of GitHub.`;

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
      placeholder="${contentMsg}"
      ></textarea>
    <div id="content-view"></div>
  </div>

  <footer class="footer">
    <div class="footer-left">
      MIT License &copy; ${new Date().getFullYear()} Cha Haneum
    </div>
    <div class="footer-right">
    </div>
  </footer>
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
