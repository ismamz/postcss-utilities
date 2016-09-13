/**
 * Size
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
        prop: 'width',
        value: width,
        source: decl.source
    }, {
        prop: 'height',
        value: height,
        source: decl.source
    });
};
