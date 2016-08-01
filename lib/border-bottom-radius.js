/**
 * Border Bottom Radius
 */
module.exports = function (decl, args) {
    var parentDecl = decl.parent;

    var radius = args[1] || '3px';

    parentDecl.append({
        prop: 'border-bottom-left-radius',
        value: radius,
        source: decl.source
    }, {
        prop: 'border-bottom-right-radius',
        value: radius,
        source: decl.source
    });

    decl.remove();
};
