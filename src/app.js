import { replaceMd } from './modules/replaceMd.js';
import './styles/reset.css';
import './styles/style.css';

const contentMsg = `Quickly write short notes with Markdown that follows the syntax of GitHub (MIT License &copy; 2022 Cha Haneum)`;

document.querySelector('#root').innerHTML = `
    <header class="header">
        <img class="header-img" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Underwoodfive.jpg" alt="old typewriter on the table"/>
    </header>

    <div class="content">
        <textarea
            id="content-textarea"
            placeholder="${contentMsg}"></textarea>
        <pre
            id="content-view"></pre>
    </div>
`;

const updateValue = (e) => {
    document.querySelector('#content-view').innerHTML = e.target.value;

}

document.querySelector('#content-textarea').addEventListener('input', updateValue);

