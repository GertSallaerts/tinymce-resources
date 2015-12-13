import tiny from '../src/index';
import preset from '../src/presets/basic';
import skin from '../src/skins/lightgray';

const app = document.createElement('div');
document.body.appendChild(app);

const editor = document.createElement('textarea');
editor.setAttribute('id', 'editor');
editor.innerHTML = "Hello, World!";
app.appendChild(editor);

tiny('#editor', preset, skin, {
    variables: [
        { text: 'Entry ID', value: ' {entry_id} ' },
        { text: 'Widget ID', value: ' {widget_id} ' }
    ]
});
