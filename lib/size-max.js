/**
 * Size Max
 */
module.exports = function (decl, args) {
    var width;
    var height;

    if (args.length === 2) {
        width = args[1].trim();
        height = width;
    }

    if (args.length === 3) {
        width = args[1].trim();
        height = args[2].trim();
    }

    decl.replaceWith({
        prop: 'max-width',
        value: width,
        source: decl.source
    }, {
        prop: 'max-height',
        value: height,
        source: decl.source
    });
};
