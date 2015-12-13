import 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/code/plugin';
import '../plugins/variables/plugin';

export default {
    menubar: false,
    statusbar: false,
    plugins: 'code variables',
    toolbar: 'bold italic underline alignleft aligncenter alignright bullist | variables code'
}
