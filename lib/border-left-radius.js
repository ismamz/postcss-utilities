/**
 * Border Left Radius
 */
module.exports = function (decl, args) {
    var radius = args[1] || '3px';

    decl.replaceWith({
        prop: 'border-bottom-left-radius',
        value: radius,
        source: decl.source
    }, {
        prop: 'border-top-left-radius',
        value: radius,
        source: decl.source
    });
};
