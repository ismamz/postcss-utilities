/**
 * Truncate
 */
module.exports = function (decl, args) {
    var parentDecl = decl.parent;

    var textOverflow;
    if (args.lenth > 1) {
        textOverflow = args[1];
    } else {
        textOverflow = 'ellipsis';
    }

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
