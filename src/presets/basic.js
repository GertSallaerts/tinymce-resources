import 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/hr/plugin';
import 'tinymce/skins/lightgray/skin.min.css';

import contentStyle from 'tinymce/skins/lightgray/content.min.css';

export default function (config) {
    return Object.assign({
        theme: 'modern',
        skin: false,
        plugins: 'hr',
        toolbar: 'hr',
        content_style: contentStyle.toString()
    }, config || {});
}
