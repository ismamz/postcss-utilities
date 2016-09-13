/**
 * Horizontal Rule
 */
module.exports = function (decl, args) {
    var color = '#cecece';
    var verticalMargin = '3em';
    var height = '1px';

    if (args[1]) {
        color = args[1];
    }
    if (args[2]) {
        verticalMargin = args[2];
    }

    decl.replaceWith({
        prop: 'height',
        value: height,
        source: decl.source
    }, {
        prop: 'border',
        value: 0,
        source: decl.source
    }, {
        prop: 'border-top',
        value: '1px solid ' + color,
        source: decl.source
    }, {
        prop: 'margin',
        value: verticalMargin + ' 0', // horizontalMargin?
        source: decl.source
    });
};
