/**
 * Center
 */
module.exports = function (decl, args, opts) {
    var centerMethod = opts.centerMethod || 'transform';

    if (centerMethod === 'flexbox') {
        decl.replaceWith({
            prop: 'display',
            value: 'flex',
            source: decl.source
        }, {
            prop: 'align-items',
            value: 'center',
            source: decl.source
        }, {
            prop: 'justify-content',
            value: 'center',
            source: decl.source
        });
    } else {
        decl.replaceWith({
            prop: 'position',
            value: 'absolute',
            source: decl.source
        }, {
            prop: 'top',
            value: '50%',
            source: decl.source
        }, {
            prop: 'left',
            value: '50%',
            source: decl.source
        }, {
            prop: 'transform',
            value: 'translate(-50%, -50%)',
            source: decl.source
        });
    }
};
