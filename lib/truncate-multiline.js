/**
 * Truncate Multiline
 */
module.exports = function (decl, args) {
    var lineHeight = 1;
    var textOverflow = 'ellipsis';
    var lines = 3;

    if (args[1]) {
        lines = args[1].trim();
    }

    if (args[2]) {
        lineHeight = args[2].trim();
    }

    if (args[3]) {
        textOverflow = args[3];
    }

    var height = Math.round(lineHeight * lines * 100) / 100;

    decl.replaceWith({
        prop: 'display',
        value: 'block',
        source: decl.source
    }, {
        prop: 'display',
        value: '-webkit-box',
        source: decl.source
    }, {
        prop: 'height',
        value: height + 'em',
        source: decl.source
    }, {
        prop: 'line-height',
        value: lineHeight,
        source: decl.source
    }, {
        prop: '-webkit-line-clamp',
        value: lines,
        source: decl.source
    }, {
        prop: '-webkit-box-orient',
        value: 'vertical',
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
