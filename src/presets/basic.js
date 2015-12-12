import 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/hr/plugin';

export default function (config) {
    return Object.assign({
        theme: 'modern',
        plugins: 'hr',
        toolbar: 'hr'
    }, config || {});
}
