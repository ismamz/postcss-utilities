/**
 * Border Right Radius
 */
module.exports = function (decl, args) {
    var radius = args[1] || '3px';

    decl.replaceWith({
        prop: 'border-bottom-right-radius',
        value: radius,
        source: decl.source
    }, {
        prop: 'border-top-right-radius',
        value: radius,
        source: decl.source
    });
};
