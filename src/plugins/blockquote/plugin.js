/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('blockquote', function(editor) {

    function showDialog() {
        var data = {}, selection = editor.selection, dom = editor.dom,
            formatter = editor.formatter,
            selectedElm, citationElm, isBlockQuote, win;

        selectedElm = dom.getParent(selection.getNode(), dom.isBlock);
        isBlockQuote = dom.is(selectedElm, 'blockquote');

        if (isBlockQuote) {
            var copyElm = selectedElm.cloneNode(true);

            citationElm = dom.select('cite', copyElm);
            if (citationElm.length) {
                citationElm = citationElm[0];
                data.citationText = citationElm.innerText || citationElm.textContent;
                dom.remove(citationElm);
            }

            data.quoteText = copyElm.innerText || copyElm.textContent;
        } else {
            data.quoteText = selectedElm.innerText || selectedElm.textContent;
        }

        win = editor.windowManager.open({
            title: 'Insert blockquote',
            data: data,
            body: [
                {
                    name: 'quoteText',
                    type: 'textbox',
                    size: 40,
                    multiline: true,
                    label: 'Quote',
                    onchange: function() {
                        data.quoteText = this.value();
                    }
                },
                {
                    name: 'citationText',
                    type: 'textbox',
                    size: 40,
                    label: 'Citation',
                    onchange: function() {
                        data.citationText = this.value();
                    }
                }
            ],
            onSubmit: function(e) {
                data = tinymce.extend(data, e.data);

                if (isBlockQuote) {
                    editor.focus();

                    if (data.quoteText.length || data.citationText.length) {
                        if ("innerText" in selectedElm) {
                            selectedElm.innerText = data.quoteText;
                        } else {
                            selectedElm.textContent = data.quoteText;
                        }

                        if (data.citationText) {
                            selectedElm.innerHTML += '<cite>' + dom.encode(data.citationText) + '</cite>';
                        }

                        selection.select(selectedElm);
                    } else {
                        dom.remove(selectedElm);
                    }

                } else {
                    dom.replace(dom.create('blockquote', {},
                        dom.encode(data.quoteText) + '<cite>' +
                        dom.encode(data.citationText) + '</cite>'
                    ), selectedElm);
                }
                
                editor.undoManager.add();
            }
        });
    }

    editor.addButton('blockquote', {
        icon: 'blockquote',
        tooltip: 'Insert/edit blockquote',
        onclick: showDialog,
        stateSelector: 'blockquote'
    });

    this.showDialog = showDialog;
});
