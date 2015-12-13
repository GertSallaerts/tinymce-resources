import tiny from '../src/index';
import config from '../src/presets/basic';
import skin from '../src/skins/lightgray';

const app = document.createElement('div');
document.body.appendChild(app);

const editor = document.createElement('textarea');
editor.setAttribute('id', 'editor');
editor.innerHTML = "Hello, World!";
app.appendChild(editor);

const tinyMceConfig = config('#editor', skin);

tiny.init(tinyMceConfig);
