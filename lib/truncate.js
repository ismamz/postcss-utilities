/**
 * Truncate
 */
module.exports = function (decl) {
    var textOverflow = 'ellipsis';

    decl.replaceWith({
        prop: 'white-space',
        value: 'nowrap',
        source: decl.source
    }, {
        prop: 'overflow',
        value: 'hidden',
        source: decl.source
    }, {
        prop: 'text-overflow',
        value: textOverflow,
        source: decl.source
    });
};
