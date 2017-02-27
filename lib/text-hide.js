/**
 * Text Hide
 */
module.exports = function (decl, args, opts) {
    var textHideMethod = opts.textHideMethod || 'indent';

    if (textHideMethod === 'font') {
        decl.replaceWith({
            prop: 'font',
            value: '0/0 a',
            source: decl.source
        }, {
            prop: 'color',
            value: 'transparent',
            source: decl.source
        }, {
            prop: 'text-shadow',
            value: 'none',
            source: decl.source
        }, {
            prop: 'background-color',
            value: 'transparent',
            source: decl.source
        }, {
            prop: 'border',
            value: 0,
            source: decl.source
        });
    } else {
        decl.replaceWith({
            prop: 'overflow',
            value: 'hidden',
            source: decl.source
        }, {
            prop: 'text-indent',
            value: '101%',
            source: decl.source
        }, {
            prop: 'white-space',
            value: 'nowrap',
            source: decl.source
        });
    }
};
