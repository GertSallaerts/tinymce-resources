tinymce.PluginManager.add('mark', function(editor, url) {

    editor.on('init', () => {
        editor.formatter.register('mark', {inline: 'mark', remove: 'all'});
    });

    editor.addButton('mark', {
        icon: 'backcolor',
        tooltip: 'Highlight text',
        onclick: () => {
            editor.formatter.toggle('mark');
        },
        stateSelector: 'mark'
    });
});
