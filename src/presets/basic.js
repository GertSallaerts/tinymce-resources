import 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/hr/plugin';

export default function (selector, skin, overrideConfig) {
    return Object.assign({
        selector: selector,
        theme: 'modern',
        skin: false,
        plugins: 'hr',
        toolbar: 'hr'
    }, skin || {}, overrideConfig || {});
}
