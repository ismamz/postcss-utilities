/**
 * Reset Text
 */
module.exports = function (decl) {
    var fontFamily = 'sans-serif';
    var lineHeight = '1.5';

    decl.replaceWith({
        prop: 'font-family',
        value: fontFamily,
        source: decl.source
    }, {
        prop: 'font-style',
        value: 'normal',
        source: decl.source
    }, {
        prop: 'font-weight',
        value: 'normal',
        source: decl.source
    }, {
        prop: 'letter-spacing',
        value: 'normal',
        source: decl.source
    }, {
        prop: 'line-break',
        value: 'auto',
        source: decl.source
    }, {
        prop: 'line-height',
        value: lineHeight,
        source: decl.source
    }, {
        prop: 'text-align',
        value: 'left',
        source: decl.source
    }, {
        prop: 'text-align',
        value: 'start',
        source: decl.source
    }, {
        prop: 'text-decoration',
        value: 'none',
        source: decl.source
    }, {
        prop: 'text-shadow',
        value: 'none',
        source: decl.source
    }, {
        prop: 'text-transform',
        value: 'none',
        source: decl.source
    }, {
        prop: 'white-space',
        value: 'normal',
        source: decl.source
    }, {
        prop: 'word-break',
        value: 'normal',
        source: decl.source
    }, {
        prop: 'word-spacing',
        value: 'normal',
        source: decl.source
    }, {
        prop: 'word-wrap',
        value: 'normal',
        source: decl.source
    });
};
