import lib from 'tinymce/tinymce';

export const tinymce = lib;

export default function init( selector, ...args ) {
    return lib.init(config(...args, { selector }));
}

export function config( ...args ) {
    return Object.assign({
        theme: 'modern',
        skin: false
    }, ...args);
}
