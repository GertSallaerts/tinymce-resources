import 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/code/plugin';
import 'tinymce/plugins/link/plugin';
import '../plugins/variables/plugin';

export default {
    menubar: false,
    statusbar: false,
    plugins: 'code link',
    toolbar: 'styleselect | bold italic underline strikethrough | alignleft aligncenter alignright | link | bullist numlist | code',
    style_formats: [
        { title: 'Paragraph', block: 'p', remove: 'all' },
        { title: 'Lead Paragraph', block: 'p', classes: 'lead', remove: 'all' },
        { title: 'Heading 1', block: 'h1', remove: 'all' },
        { title: 'Heading 2', block: 'h2', remove: 'all' },
        { title: 'Heading 3', block: 'h3', remove: 'all' },
        { title: 'Preformatted text', block: 'pre', remove: 'all' }
    ]
}
