import tiny from '../src/index';
import config from '../src/presets/basic';

const app = document.createElement('div');
document.body.appendChild(app);

const editor = document.createElement('textarea');
editor.setAttribute('id', 'editor');
editor.innerHTML = "Hello, World!";
app.appendChild(editor);

tiny.init(Object.assign({
    selector: '#editor',
    theme_url: 'http://local.bubobox.dev:8080/node_modules/tinymce/themes/modern/theme.js',
    skin_url: 'http://local.bubobox.dev:8080/node_modules/tinymce/skins/lightgray'
}, config);
