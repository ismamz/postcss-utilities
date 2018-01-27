/**
 * Horizontal Rule
 */
module.exports = function (decl, args) {
    var color = args[1] || '#cecece';
    var verticalMargin = args[2] || '3em';
    var style = args[3] || 'solid';
    var height = args[4] || '1px';

    decl.replaceWith({
        prop: 'height',
        value: '1px',
        source: decl.source
    }, {
        prop: 'border',
        value: 0,
        source: decl.source
    }, {
        prop: 'border-top',
        value: height + ' ' + style + ' ' + color,
        source: decl.source
    }, {
        prop: 'margin',
        value: verticalMargin + ' 0',
        source: decl.source
    });
};
