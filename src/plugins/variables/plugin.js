tinymce.PluginManager.add('variables', function(editor, url) {

    if (!editor.settings.variables || !editor.settings.variables.length)
        return;

    // Add a button that opens a window
    editor.addButton('variables', {
        text: 'Insert placeholders',
        type: 'listbox',
        icon: false,
        onselect: function (e) {
            editor.insertContent(this.value());
            this.value('');
        },
        values: editor.settings.variables
    });
});
