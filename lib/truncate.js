/**
 * Truncate
 */
module.exports = function (decl) {
    var parentDecl = decl.parent;

    var textOverflow = 'ellipsis';

    parentDecl.append({
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

    decl.remove();
};
